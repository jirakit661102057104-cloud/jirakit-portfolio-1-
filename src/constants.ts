export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'Web Dev' | 'UI Design' | 'IoT' | 'Mobile Apps';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Development' | 'Networking' | 'Academic' | 'Cloud' | 'Data' | 'Design' | 'Cyber Security' | 'Soft Skills';
  image: string;
  credentialId?: string;
  description?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'NATIONAL' | 'WORKSHOP' | 'VOLUNTEERING' | 'SPEAKING';
  icon: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Student Management System',
    description: 'A comprehensive dashboard for academic monitoring, grading, and attendance tracking for PCRU faculty.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop',
    tags: ['REACT', 'NODE.JS'],
    category: 'Web Dev'
  },
  {
    id: '2',
    title: 'E-commerce Experience',
    description: 'Modernized shopping interface focusing on high conversion and accessibility for mobile users.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop',
    tags: ['UI/UX', 'MOBILE'],
    category: 'UI Design'
  },
  {
    id: '3',
    title: 'IoT Smart Home Hub',
    description: 'An integrated system for controlling lights and security through a centralized hardware gateway.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
    tags: ['IOT', 'PYTHON'],
    category: 'IoT'
  },
  {
    id: '4',
    title: 'PCRU Analytics Dash',
    description: 'Visualizing academic performance datasets to identify student trends across the IT department.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda6462f744?q=80&w=800&auto=format&fit=crop',
    tags: ['DATA', 'D3.JS'],
    category: 'Web Dev'
  },
  {
    id: '5',
    title: 'Mobile Learning App',
    description: 'Interactive educational tools designed specifically for the PCRU student ecosystem.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    tags: ['SWIFT', 'EDUTECH'],
    category: 'Mobile Apps'
  },
  {
    id: '6',
    title: 'Portfolio Version 1.0',
    description: 'My initial exploration into professional portfolio design with a focus on typography and grid systems.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    tags: ['DESIGN', 'TAILWIND'],
    category: 'UI Design'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    title: 'Advanced Full-Stack Web Engineering',
    issuer: 'Coursera & Google',
    date: 'May 2023',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    credentialId: 'PCRU-IT-2024-9981-SK',
    description: 'This certification validates expertise in server management, cloud deployment strategies, and high-availability architecture for modern web applications.'
  },
  {
    id: '2',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: 'Jan 2024',
    category: 'Networking',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Best Project Award: IT PCRU Expo',
    issuer: 'IT PCRU University',
    date: 'Aug 2023',
    category: 'Academic',
    image: 'https://images.unsplash.com/photo-1523240715630-9918c13d190c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'GCP Fundamentals: Core Infrastructure',
    issuer: 'Google Cloud',
    date: 'Nov 2023',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Python for Data Science Specialization',
    issuer: 'IBM Skills',
    date: 'Mar 2024',
    category: 'Data',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Human-Centered Design Fundamentals',
    issuer: 'Design Academy',
    date: 'Dec 2023',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop'
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'National Hackathon 2023',
    description: 'Lead Developer - Built a sustainable energy tracking application using React and Firebase. Won the "Most Innovative Solution" award among 50 competing teams.',
    date: 'Dec 2023',
    type: 'NATIONAL',
    icon: 'trophy',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Web Development Intensive Workshop',
    description: 'Participant - Advanced training session on React.js hooks, state management, and Tailwind CSS architecture. Applied skills to rebuild the IT PCRU club portal.',
    date: 'Oct 2023',
    type: 'WORKSHOP',
    icon: 'school',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'IT PCRU Open House',
    description: 'Infrastructure Lead - Orchestrated the networking setup for the annual Open House. Managed a team of 5 students to ensure seamless connectivity for 20+ exhibit booths.',
    date: 'Aug 2023',
    type: 'VOLUNTEERING',
    icon: 'groups',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Community Tech Talk: AI in Education',
    description: 'Guest Speaker - Delivered a presentation on how AI tools can bridge the educational gap in provincial schools. Attended by over 100 faculty members and students.',
    date: 'June 2023',
    type: 'SPEAKING',
    icon: 'record_voice_over',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop'
  }
];
