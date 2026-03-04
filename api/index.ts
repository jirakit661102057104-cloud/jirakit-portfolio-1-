import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// GitHub OAuth Routes
app.get('/api/auth/github/url', (req, res) => {
  const client_id = process.env.GITHUB_CLIENT_ID;
  if (!client_id) {
    return res.status(500).json({ error: 'GITHUB_CLIENT_ID not configured' });
  }

  // Use the production domain if available
  const host = req.get('host');
  const protocol = host?.includes('localhost') ? 'http' : 'https';
  const redirect_uri = `${protocol}://${host}/api/auth/github/callback`;
  
  const params = new URLSearchParams({
    client_id,
    redirect_uri,
    scope: 'read:user,repo',
  });

  const authUrl = `https://github.com/login/oauth/authorize?${params.toString()}`;
  res.json({ url: authUrl });
});

app.get('/api/auth/github/callback', async (req, res) => {
  const { code } = req.query;
  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  if (!code || !client_id || !client_secret) {
    return res.status(400).send('Missing code or configuration');
  }

  try {
    const tokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      { client_id, client_secret, code },
      { headers: { Accept: 'application/json' } }
    );

    const accessToken = tokenResponse.data.access_token;
    if (!accessToken) return res.status(400).send('Failed to obtain access token');

    const userResponse = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const userData = userResponse.data;

    res.send(`
      <html>
        <body>
          <script>
            if (window.opener) {
              window.opener.postMessage({ 
                type: 'OAUTH_AUTH_SUCCESS', 
                user: ${JSON.stringify(userData)},
                token: "${accessToken}"
              }, '*');
              window.close();
            } else {
              window.location.href = '/';
            }
          </script>
          <p>Authentication successful. This window should close automatically.</p>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('GitHub OAuth error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Export the app for Vercel
export default app;
