/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  School, 
  ChevronRight, 
  Verified, 
  Code, 
  Network, 
  Shield, 
  User, 
  Download, 
  Share2, 
  Building2, 
  Calendar, 
  QrCode, 
  Trophy, 
  Users, 
  Mic2, 
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  Search,
  ArrowRight
} from 'lucide-react';
import { PROJECTS, CERTIFICATES, ACTIVITIES, Project, Certificate, Activity } from './constants';

type Screen = 'home' | 'works' | 'certificates' | 'activities' | 'about' | 'contact';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProjectCategory, setSelectedProjectCategory] = useState<string>('All');
  const [selectedCertCategory, setSelectedCertCategory] = useState<string>('All');
  const [githubUser, setGithubUser] = useState<any>(null);

  // Listen for OAuth success
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const origin = event.origin;
      if (!origin.endsWith('.run.app') && !origin.includes('localhost')) {
        return;
      }
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
        setGithubUser(event.data.user);
        console.log('GitHub Connected:', event.data.user);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleConnectGitHub = async () => {
    try {
      const response = await fetch('/api/auth/github/url');
      if (!response.ok) throw new Error('Failed to get auth URL');
      const { url } = await response.json();
      
      const width = 600;
      const height = 700;
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;
      
      window.open(
        url,
        'github_oauth',
        `width=${width},height=${height},left=${left},top=${top}`
      );
    } catch (error) {
      console.error('GitHub connection error:', error);
      alert('Failed to connect to GitHub. Please check your configuration.');
    }
  };

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentScreen]);

  const Navbar = () => (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-6 md:px-20 py-4 sticky top-0 bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-3 text-primary cursor-pointer" onClick={() => setCurrentScreen('home')}>
        <div className="size-8 flex items-center justify-center bg-primary text-bg-dark rounded-lg">
          <Terminal size={20} />
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight uppercase">
          JIRAKIT <span className="text-primary">|</span> IT PCRU
        </h2>
      </div>
      
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-8">
          {[
            { id: 'home', label: 'Home' },
            { id: 'works', label: 'My Works' },
            { id: 'certificates', label: 'Certificates' },
            { id: 'activities', label: 'Activities' },
            { id: 'about', label: 'About' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentScreen(item.id as Screen)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentScreen === item.id ? 'text-primary border-b-2 border-primary' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-bg-dark text-sm font-bold transition-transform hover:scale-105 active:scale-95">
          <span>Download CV</span>
        </button>
        <div className="bg-primary/20 rounded-full p-0.5 border border-primary/30 group relative cursor-pointer">
          <img 
            alt="User Profile" 
            className="rounded-full size-9 object-cover" 
            src={githubUser?.avatar_url || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"} 
            referrerPolicy="no-referrer"
          />
          {githubUser && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-bg-dark border border-primary/20 p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              <p className="text-xs font-bold text-primary mb-1">Connected as</p>
              <p className="text-sm font-bold truncate">{githubUser.name || githubUser.login}</p>
              <p className="text-[10px] text-slate-400 truncate">@{githubUser.login}</p>
            </div>
          )}
        </div>
      </div>

      <button className="md:hidden text-slate-900 dark:text-slate-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-light dark:bg-bg-dark border-b border-primary/20 p-6 flex flex-col gap-4 md:hidden"
          >
            {['home', 'works', 'certificates', 'activities', 'about', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => {
                  setCurrentScreen(id as Screen);
                  setIsMenuOpen(false);
                }}
                className={`text-left text-lg font-bold capitalize ${currentScreen === id ? 'text-primary' : ''}`}
              >
                {id}
              </button>
            ))}
            <button className="w-full bg-primary text-bg-dark font-bold py-3 rounded-lg mt-4">
              Download CV
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );

  const Footer = () => (
    <footer className="border-t border-primary/20 bg-bg-light dark:bg-bg-dark py-12 px-6 md:px-20 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="size-6 bg-primary text-bg-dark rounded flex items-center justify-center">
            <Terminal size={14} />
          </div>
          <span className="font-bold text-lg tracking-tight">JIRAKIT | IT PCRU</span>
        </div>
        <div className="flex gap-8 text-sm text-slate-500 dark:text-slate-400">
          <a className="hover:text-primary transition-colors flex items-center gap-1" href="#"><Linkedin size={16} /> LinkedIn</a>
          <a className="hover:text-primary transition-colors flex items-center gap-1" href="#"><Github size={16} /> GitHub</a>
          <a className="hover:text-primary transition-colors flex items-center gap-1" href="#"><Twitter size={16} /> Twitter</a>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          Designed for IT PCRU Showcase © 2024
        </p>
      </div>
    </footer>
  );

  const HomeScreen = () => (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="flex flex-col gap-20"
    >
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-10">
        <div className="flex-1 space-y-8">
          <div className="space-y-2">
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Innovating since 2024</span>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none">
              JIRA<span className="text-primary">KIT</span>
            </h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed max-w-xl">
            Student at IT PCRU. Specialized in crafting high-performance digital experiences with passion and technical precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setCurrentScreen('works')}
              className="bg-primary text-bg-dark font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
              View My Works
            </button>
            {!githubUser ? (
              <button 
                onClick={handleConnectGitHub}
                className="border border-primary/30 text-slate-900 dark:text-slate-100 font-bold px-8 py-4 rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-2"
              >
                <Github size={20} /> Connect GitHub
              </button>
            ) : (
              <div className="flex items-center gap-4 bg-primary/5 border border-primary/20 px-6 py-3 rounded-lg">
                <img src={githubUser.avatar_url} className="size-8 rounded-full border border-primary/30" alt="" />
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-tighter">GitHub Connected</p>
                  <p className="text-sm font-bold">@{githubUser.login}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="aspect-square rounded-3xl overflow-hidden border border-primary/20 bg-bg-dark/50 relative group">
            <img 
              src="https://images.unsplash.com/photo-1587829741301-dc798b83bac1?q=80&w=800&auto=format&fit=crop" 
              alt="Workspace" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-bg-dark/90 backdrop-blur-md border border-primary/20 p-4 rounded-xl flex items-center gap-3">
              <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold tracking-wider uppercase text-slate-300">Available for new projects</span>
            </div>
          </div>
          {/* Decorative dots */}
          <div className="absolute -z-10 -top-10 -right-10 grid grid-cols-10 gap-4 opacity-20">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="size-1 rounded-full bg-primary" />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Projects Completed', value: '15+', icon: <Code className="text-primary" /> },
          { label: 'Certificates Earned', value: '10+', icon: <Verified className="text-primary" /> },
          { label: 'IT Activities', value: '20+', icon: <Trophy className="text-primary" /> },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-bg-dark/40 border border-slate-200 dark:border-primary/10 p-8 rounded-2xl hover:border-primary transition-colors group">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
            <p className="text-4xl font-black">{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Featured Works */}
      <section className="space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-black tracking-tight">Featured <span className="text-primary">Works</span></h2>
          <button 
            onClick={() => setCurrentScreen('works')}
            className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
          >
            View All <ArrowRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project) => (
            <div key={project.id} className="group bg-white dark:bg-bg-dark/40 border border-slate-200 dark:border-primary/10 rounded-2xl overflow-hidden hover:border-primary transition-all">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="text-primary">
                    {project.category === 'Web Dev' ? <Code size={20} /> : project.category === 'UI Design' ? <Verified size={20} /> : <Terminal size={20} />}
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{project.description}</p>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 rounded uppercase">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-bg-dark text-5xl font-black leading-tight">Ready to collaborate?</h2>
          <p className="text-bg-dark/80 text-xl font-medium">I'm currently looking for internships and freelance opportunities.</p>
        </div>
        <button className="bg-bg-dark text-primary font-bold px-10 py-5 rounded-2xl text-lg hover:scale-105 transition-transform shadow-2xl">
          Let's Talk Business
        </button>
      </section>
    </motion.div>
  );

  const WorksScreen = () => {
    const categories = ['All', 'Web Dev', 'UI Design', 'IoT', 'Mobile Apps'];
    const filteredProjects = selectedProjectCategory === 'All' 
      ? PROJECTS 
      : PROJECTS.filter(p => p.category === selectedProjectCategory);

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
        <div className="space-y-6">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">Portfolio</span>
          <h1 className="text-6xl font-black">Selected <span className="text-primary">Works</span></h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl leading-relaxed">
            Explore a collection of digital experiences, hardware integrations, and academic research projects developed at IT Phetchabun Rajabhat University.
          </p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedProjectCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
                selectedProjectCategory === cat 
                  ? 'bg-primary text-bg-dark shadow-lg shadow-primary/20' 
                  : 'bg-slate-200 dark:bg-bg-dark/50 border border-slate-300 dark:border-primary/20 text-slate-600 dark:text-slate-400 hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <motion.div 
              layout
              key={project.id} 
              className="group bg-white dark:bg-bg-dark/40 border border-slate-200 dark:border-primary/10 rounded-2xl overflow-hidden hover:border-primary transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8 space-y-6">
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 rounded uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.description}</p>
                </div>
                <button className="w-full bg-primary text-bg-dark font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  View Details <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const CertificatesScreen = () => {
    const categories = ['All', 'Web Development', 'Networking', 'Cyber Security', 'Soft Skills'];
    const filteredCerts = selectedCertCategory === 'All' 
      ? CERTIFICATES 
      : CERTIFICATES.filter(c => c.category.includes(selectedCertCategory) || selectedCertCategory === 'All');

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6 max-w-2xl">
            <nav className="flex items-center gap-2 text-sm">
              <span className="text-primary hover:underline cursor-pointer" onClick={() => setCurrentScreen('home')}>Home</span>
              <ChevronRight size={14} className="text-slate-400" />
              <span className="text-slate-500 dark:text-slate-400">Certificates</span>
            </nav>
            <h1 className="text-6xl font-black">My <span className="text-primary">Certificates</span></h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              A curated gallery of my technical achievements and professional recognition from IT PCRU and global educational institutions.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-primary/10 p-6 rounded-2xl border border-primary/20">
            <Verified size={40} className="text-primary" />
            <div>
              <p className="text-primary font-black text-3xl leading-none">24</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-bold mt-1">Total Verified</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCertCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                selectedCertCategory === cat 
                  ? 'bg-primary text-bg-dark shadow-lg shadow-primary/20' 
                  : 'bg-slate-200 dark:bg-bg-dark/50 border border-slate-300 dark:border-primary/20 text-slate-600 dark:text-slate-400 hover:border-primary'
              }`}
            >
              {cat}
              {cat === 'Web Development' && <Code size={14} />}
              {cat === 'Networking' && <Network size={14} />}
              {cat === 'Cyber Security' && <Shield size={14} />}
              {cat === 'Soft Skills' && <User size={14} />}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map(cert => (
            <div key={cert.id} className="group bg-white dark:bg-bg-dark/40 border border-slate-200 dark:border-primary/10 rounded-2xl overflow-hidden hover:border-primary transition-all">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-primary text-bg-dark rounded-full p-4 shadow-xl">
                    <Search size={24} />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">{cert.category}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{cert.date}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Issuing Org: {cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View Section */}
        <div className="mt-20 space-y-10">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Search className="text-primary" /> Detailed Certificate View
          </h2>
          <div className="bg-white dark:bg-bg-dark/60 rounded-3xl border border-slate-200 dark:border-primary/20 overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-2/3 bg-slate-100 dark:bg-bg-dark p-8 md:p-16 flex items-center justify-center">
              <div className="w-full max-w-2xl bg-white shadow-2xl p-8 border-[12px] border-slate-50 rounded-sm relative aspect-[1.414/1] flex flex-col items-center justify-between text-center font-serif italic text-slate-800">
                <div className="size-16 bg-primary text-white flex items-center justify-center rounded-full">
                  <Verified size={40} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-bold not-italic font-display">CERTIFICATE OF ACHIEVEMENT</h4>
                  <p className="text-slate-500">This is to certify that</p>
                </div>
                <h5 className="text-5xl font-black text-primary border-b-2 border-primary pb-2 px-10 not-italic font-display">JIRAKIT S.</h5>
                <div className="space-y-2">
                  <p className="text-slate-500">has successfully completed the training for</p>
                  <p className="text-2xl font-bold not-italic font-display">ADVANCED WEB INFRASTRUCTURE</p>
                </div>
                <div className="flex justify-between w-full mt-10 not-italic">
                  <div className="border-t border-slate-300 pt-2 w-32">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Signature</p>
                  </div>
                  <div className="size-16 opacity-10">
                    <Verified size={64} />
                  </div>
                  <div className="border-t border-slate-300 pt-2 w-32">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Date</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 p-12 flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Information</span>
                  <h3 className="text-4xl font-bold">Advanced Web Infrastructure</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { icon: <Building2 size={20} />, label: 'Organization', value: 'IT PCRU - Phetchabun Rajabhat University' },
                    { icon: <Calendar size={20} />, label: 'Issued Date', value: 'March 15, 2024' },
                    { icon: <QrCode size={20} />, label: 'Credential ID', value: 'PCRU-IT-2024-9981-SK', mono: true },
                  ].map((info, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{info.label}</p>
                        <p className={`font-medium ${info.mono ? 'font-mono text-sm' : ''}`}>{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  This certification validates expertise in server management, cloud deployment strategies, and high-availability architecture for modern web applications.
                </p>
              </div>
              <div className="flex gap-4 mt-12">
                <button className="flex-1 bg-primary text-bg-dark font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <Download size={20} /> Download PDF
                </button>
                <button className="bg-slate-200 dark:bg-bg-dark border border-slate-300 dark:border-primary/30 p-4 rounded-xl hover:border-primary transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const ActivitiesScreen = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-20">
      <div className="space-y-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mx-auto md:mx-0">
          <Calendar size={14} />
          <span className="text-xs font-bold uppercase tracking-widest">My Journey</span>
        </div>
        <h1 className="text-6xl md:text-7xl font-black">Activity <span className="text-primary">Timeline</span></h1>
        <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl leading-relaxed">
          A chronological log of my professional growth, technical hackathons, and community workshops at IT PCRU.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto md:mx-0">
        <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-primary/20" />
        <div className="space-y-16">
          {ACTIVITIES.map((activity) => (
            <div key={activity.id} className="relative pl-12 group">
              <div className="absolute left-0 top-1 size-10 rounded-full bg-primary flex items-center justify-center z-10 shadow-xl shadow-primary/30 group-hover:scale-110 transition-transform">
                {activity.icon === 'trophy' ? <Trophy size={20} className="text-bg-dark" /> : 
                 activity.icon === 'school' ? <School size={20} className="text-bg-dark" /> :
                 activity.icon === 'groups' ? <Users size={20} className="text-bg-dark" /> :
                 <Mic2 size={20} className="text-bg-dark" />}
              </div>
              <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-primary/5 p-8 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all shadow-sm">
                <div className="w-full md:w-64 h-40 rounded-xl overflow-hidden shrink-0 border border-primary/10">
                  <img src={activity.image} alt={activity.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold uppercase text-primary tracking-widest">{activity.date}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      activity.type === 'NATIONAL' ? 'bg-primary text-bg-dark' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      {activity.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{activity.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-black">Activity <span className="text-primary">Gallery</span></h2>
          <div className="h-[2px] grow ml-8 bg-primary/10" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Lab Collaboration', desc: 'Peer coding session at PCRU Lab', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop' },
            { title: 'Tech Summit 2023', desc: 'Annual Regional Technology Conference', img: 'https://images.unsplash.com/photo-1540575861501-7ad05823c95b?q=80&w=800&auto=format&fit=crop' },
            { title: 'Late Night Coding', desc: 'Developing open-source projects', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop' },
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer space-y-4">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-primary/10">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <Search size={32} className="text-white" />
                </div>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-bold text-xl">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-bg-dark text-4xl font-black">Interested in working together?</h2>
          <p className="text-bg-dark/80 font-bold text-lg">I'm currently looking for internship opportunities for Summer 2024.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-10 py-4 bg-bg-dark text-primary font-bold rounded-xl hover:bg-slate-900 transition-colors shadow-2xl">
            Hire Me
          </button>
          <button 
            onClick={() => setCurrentScreen('works')}
            className="px-10 py-4 border-2 border-bg-dark text-bg-dark font-bold rounded-xl hover:bg-bg-dark/10 transition-colors"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </motion.div>
  );

  const AboutScreen = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-20 py-10">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <h1 className="text-7xl font-black">About <span className="text-primary">Me</span></h1>
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Hello! I'm Jirakit, a passionate IT student at Phetchabun Rajabhat University. My journey in technology began with a curiosity about how digital experiences are built and has evolved into a dedicated pursuit of excellence in web development and UI/UX design.
            </p>
            <p>
              I believe that great software is not just about code, but about solving real-world problems through intuitive design and robust engineering. My work focuses on creating seamless, high-performance applications that provide value to users.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <p className="text-primary font-bold text-3xl">3.85</p>
              <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Current GPA</p>
            </div>
            <div>
              <p className="text-primary font-bold text-3xl">3rd Year</p>
              <p className="text-xs uppercase tracking-widest font-bold text-slate-500">IT Student</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-primary/20 relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
              alt="Jirakit" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
          </div>
        </div>
      </div>
    </motion.div>
  );

  const ContactScreen = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16 py-10">
      <div className="text-center space-y-4">
        <h1 className="text-7xl font-black">Get In <span className="text-primary">Touch</span></h1>
        <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out through any of the channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-bg-dark/40 border border-slate-200 dark:border-primary/10 p-10 rounded-3xl space-y-8">
          <h2 className="text-3xl font-bold">Contact Information</h2>
          <div className="space-y-6">
            {[
              { icon: <Mic2 className="text-primary" />, label: 'Email', value: 'jirakit.pcru@email.com' },
              { icon: <Twitter className="text-primary" />, label: 'Twitter', value: '@jirakit_it' },
              { icon: <Linkedin className="text-primary" />, label: 'LinkedIn', value: 'linkedin.com/in/jirakit' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.label}</p>
                  <p className="text-xl font-bold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form className="space-y-6 bg-white dark:bg-bg-dark/40 border border-slate-200 dark:border-primary/10 p-10 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Name</label>
              <input type="text" className="w-full bg-slate-100 dark:bg-bg-dark border border-slate-200 dark:border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Email</label>
              <input type="email" className="w-full bg-slate-100 dark:bg-bg-dark border border-slate-200 dark:border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="your@email.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Message</label>
            <textarea rows={5} className="w-full bg-slate-100 dark:bg-bg-dark border border-slate-200 dark:border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder="How can I help you?" />
          </div>
          <button className="w-full bg-primary text-bg-dark font-black py-4 rounded-xl text-lg hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-10">
        <AnimatePresence mode="wait">
          {currentScreen === 'home' && <HomeScreen key="home" />}
          {currentScreen === 'works' && <WorksScreen key="works" />}
          {currentScreen === 'certificates' && <CertificatesScreen key="certificates" />}
          {currentScreen === 'activities' && <ActivitiesScreen key="activities" />}
          {currentScreen === 'about' && <AboutScreen key="about" />}
          {currentScreen === 'contact' && <ContactScreen key="contact" />}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
