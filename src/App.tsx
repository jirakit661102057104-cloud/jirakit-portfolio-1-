/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap,
  Award,
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
  Mail,
  Instagram,
  Phone,
  ExternalLink,
  Github,
  Menu,
  X,
  Search,
  ArrowRight,
  ArrowLeft,
  Languages,
  Lock,
  LayoutGrid,
  Globe,
  Palette,
  Cpu,
  Smartphone,
  Server,
  Gamepad2
} from 'lucide-react';
import { PROJECTS, CERTIFICATES, ACTIVITIES, SKILLS, Project, Certificate, Activity } from './constants';
import { translations } from './translations';

type Screen = 'home' | 'works' | 'certificates' | 'activities' | 'about' | 'contact';
type Language = 'en' | 'th';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProjectCategory, setSelectedProjectCategory] = useState<string>('All');
  const [selectedCertCategory, setSelectedCertCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [expandedGalleryImage, setExpandedGalleryImage] = useState<string | null>(null);
  const [githubUser, setGithubUser] = useState<any>(null);
  const [lang, setLang] = useState<Language>('en');

  const t = translations[lang];

  // Listen for OAuth success
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const origin = event.origin;
      if (!origin.endsWith('.run.app') && !origin.includes('localhost')) {
        return;
      }
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
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
      <div className="flex items-center gap-3 text-primary cursor-pointer" onClick={() => {
        setCurrentScreen('home');
        setSelectedProject(null);
      }}>
        <div className="size-8 flex items-center justify-center bg-primary text-bg-dark rounded-lg">
          <Terminal size={20} />
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight uppercase">
          {t.nav.name} <span className="text-primary">|</span> IT PCRU
        </h2>
      </div>
      
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-8">
          {[
            { id: 'home', label: t.nav.home },
            { id: 'works', label: t.nav.works },
            { id: 'certificates', label: t.nav.certificates },
            { id: 'activities', label: t.nav.activities },
            { id: 'about', label: t.nav.about },
            { id: 'contact', label: t.nav.contact },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentScreen(item.id as Screen);
                setSelectedProject(null);
                setSelectedActivity(null);
                setExpandedGalleryImage(null);
              }}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentScreen === item.id ? 'text-primary border-b-2 border-primary' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Language Switcher */}
        <button 
          onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
          className="size-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-colors group relative"
          title={lang === 'en' ? 'Switch to Thai' : 'Switch to English'}
        >
          <div className="size-7 rounded-full overflow-hidden border border-primary/10">
            <img 
              src={lang === 'en' ? "https://flagcdn.com/w40/th.png" : "https://flagcdn.com/w40/us.png"} 
              alt={lang === 'en' ? "TH" : "US"}
              className="w-full h-full object-cover"
            />
          </div>
        </button>

        <a 
          href="/images/CV.JirakitPCRU.pdf" 
          download="/images/CV.JirakitPCRU.pdf"
          className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-bg-dark text-sm font-bold transition-transform hover:scale-105 active:scale-95"
        >
          <span>{t.nav.downloadCv}</span>
        </a>
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
                  setSelectedProject(null);
                  setSelectedActivity(null);
                  setExpandedGalleryImage(null);
                }}
                className={`text-left text-lg font-bold capitalize ${currentScreen === id ? 'text-primary' : ''}`}
              >
                {t.nav[id as keyof typeof t.nav]}
              </button>
            ))}
            <div className="flex items-center justify-between mt-4">
              <a 
                href="/CV_Jirakit.pdf" 
                download="CV_Jirakit.pdf"
                className="bg-primary text-bg-dark font-bold py-3 px-6 rounded-lg flex-1 mr-4 text-center"
              >
                {t.nav.downloadCv}
              </a>
              <button 
                onClick={() => {
                  setLang(lang === 'en' ? 'th' : 'en');
                  setIsMenuOpen(false);
                }}
                className="size-12 rounded-full border border-primary/20 flex items-center justify-center bg-primary/5"
              >
                <div className="size-8 rounded-full overflow-hidden border border-primary/10">
                  <img 
                    src={lang === 'en' ? "https://flagcdn.com/w80/th.png" : "https://flagcdn.com/w80/us.png"} 
                    alt={lang === 'en' ? "Thai Flag" : "US Flag"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            </div>
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
          <span className="font-bold text-lg tracking-tight">{t.nav.name} | IT PCRU</span>
        </div>
        <div className="flex gap-8 text-sm text-slate-500 dark:text-slate-400">
          <a className="hover:text-primary transition-colors flex items-center gap-1" href="https://instagram.com/ppperth.ixz" target="_blank" rel="noopener noreferrer"><Instagram size={16} /> Instagram</a>
          <a className="hover:text-primary transition-colors flex items-center gap-1" href="https://github.com/jirakit661102057104-cloud" target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a>
          <a className="hover:text-primary transition-colors flex items-center gap-1" href="https://mail.google.com/mail/?view=cm&fs=1&to=jirakit661102057104@gmail.com" target="_blank" rel="noopener noreferrer"><Mail size={16} /> Gmail</a>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          {t.footer.designed} © 2024
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
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">{t.hero.subtitle}</span>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none">
              {t.hero.title}<span className="text-primary">{t.hero.titleSuffix}</span>
            </h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed max-w-xl">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => {
                setCurrentScreen('works');
                setSelectedProject(null);
              }}
              className="bg-primary text-bg-dark font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
              {t.hero.viewWorks}
            </button>
            <a 
              href="https://github.com/jirakit661102057104-cloud" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary/30 text-slate-900 dark:text-slate-100 font-bold px-8 py-4 rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-2"
            >
              <Github size={20} /> Visit GitHub
            </a>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="aspect-square rounded-3xl overflow-hidden border border-primary/20 bg-bg-dark/50 relative group">
            <img 
              src="/images/somohsoghost.png" 
              alt="Workspace" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/800x800?text=Upload+to+/public/images/somohsoghost.png";
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 bg-bg-dark/90 backdrop-blur-md border border-primary/20 p-4 rounded-xl flex items-center gap-3">
              <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold tracking-wider uppercase text-slate-300">{t.hero.available}</span>
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
          { label: t.stats.projects, value: '-', icon: <Code className="text-primary" /> },
          { label: t.stats.certificates, value: '-', icon: <Verified className="text-primary" /> },
          { label: t.stats.activities, value: '-', icon: <Trophy className="text-primary" /> },
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
          <h2 className="text-4xl font-black tracking-tight">{t.featured.title} <span className="text-primary">{t.featured.titleSuffix}</span></h2>
          <button 
            onClick={() => {
              setCurrentScreen('works');
              setSelectedProject(null);
            }}
            className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
          >
            {t.featured.viewAll} <ArrowRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project) => (
            <div 
              key={project.id} 
              onClick={() => {
                setSelectedProject(project);
                setCurrentScreen('works');
              }}
              className="group bg-white dark:bg-bg-dark/40 border border-slate-200 dark:border-primary/10 rounded-2xl overflow-hidden hover:border-primary transition-all cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={lang === 'th' ? project.titleTh || project.title : project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{lang === 'th' ? project.titleTh || project.title : project.title}</h3>
                  <div className="text-primary">
                    {project.category === 'Web Dev' ? <Code size={20} /> : project.category === 'UI Design' ? <Verified size={20} /> : <Terminal size={20} />}
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{lang === 'th' ? project.descriptionTh || project.description : project.description}</p>
                <div className="flex flex-wrap gap-2 items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 rounded uppercase">{tag}</span>
                    ))}
                  </div>
                  {project.status && (
                    <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter ${
                      project.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' :
                      project.status === 'In Progress' ? 'bg-amber-500/10 text-amber-500' :
                      'bg-blue-500/10 text-blue-500'
                    }`}>
                      {lang === 'th' ? project.statusTh || project.status : project.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-bg-dark text-5xl font-black leading-tight">{t.cta.title}</h2>
          <p className="text-bg-dark/80 text-xl font-medium">{t.cta.description}</p>
        </div>
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jirakit661102057104@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-bg-dark text-primary font-bold px-10 py-5 rounded-2xl text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center"
        >
          {t.cta.button}
        </a>
      </section>
    </motion.div>
  );

  const WorksScreen = () => {
    const categories = [
      { id: 'All', label: t.works.categories.all, icon: <LayoutGrid size={18} /> },
      { id: 'Web Dev', label: t.works.categories.web, icon: <Globe size={18} /> },
      { id: 'UI Design', label: t.works.categories.ui, icon: <Palette size={18} /> },
      { id: 'IoT', label: t.works.categories.iot, icon: <Cpu size={18} /> },
      { id: 'Mobile Apps', label: t.works.categories.mobile, icon: <Smartphone size={18} /> },
      { id: 'Web Server', label: t.works.categories.server, icon: <Server size={18} /> },
      { id: 'Game Dev', label: t.works.categories.game, icon: <Gamepad2 size={18} /> },
    ];
    const filteredProjects = selectedProjectCategory === 'All' 
      ? PROJECTS 
      : PROJECTS.filter(p => p.category === selectedProjectCategory);

    if (selectedProject) {
      return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
          <button 
            onClick={() => setSelectedProject(null)}
            className="flex items-center gap-2 text-primary font-bold hover:underline"
          >
            <ArrowLeft size={20} /> {t.works.back}
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <h1 className="text-5xl font-black">{lang === 'th' ? selectedProject.titleTh || selectedProject.title : selectedProject.title}</h1>
                
                {selectedProject.status && (
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <span className="text-slate-500 uppercase tracking-widest">{t.works.statusLabel}:</span>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      selectedProject.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' :
                      selectedProject.status === 'In Progress' ? 'bg-amber-500/10 text-amber-500' :
                      'bg-blue-500/10 text-blue-500'
                    }`}>
                      {lang === 'th' ? selectedProject.statusTh || selectedProject.status : selectedProject.status}
                    </span>
                  </div>
                )}

                <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
                  {lang === 'th' ? selectedProject.descriptionTh || selectedProject.description : selectedProject.description}
                </p>
              </div>

              {selectedProject.status === 'Completed' ? (
                selectedProject.downloadUrl && (
                  <a 
                    href={selectedProject.downloadUrl} 
                    className="inline-flex items-center gap-3 bg-primary text-bg-dark font-black px-8 py-4 rounded-2xl text-lg hover:scale-105 transition-transform shadow-xl"
                  >
                    <Download size={24} /> {t.works.download}
                  </a>
                )
              ) : (
                <div className="inline-flex items-center gap-3 bg-slate-200 dark:bg-slate-800 text-slate-500 font-black px-8 py-4 rounded-2xl text-lg cursor-not-allowed opacity-60">
                  <Lock size={24} /> {lang === 'th' ? 'ยังไม่พร้อมใช้งาน' : 'Not Ready'}
                </div>
              )}
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
          </div>

          {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">{t.works.gallery}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {selectedProject.additionalImages.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-slate-200 dark:border-primary/10 shadow-lg">
                    <img src={img} alt={`${selectedProject.title} gallery ${i}`} className="w-full h-auto hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      );
    }

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
        <div className="space-y-6">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">{t.works.subtitle}</span>
          <h1 className="text-6xl font-black">{t.works.title} <span className="text-primary">{t.works.titleSuffix}</span></h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl leading-relaxed">
            {t.works.description}
          </p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedProjectCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                selectedProjectCategory === cat.id 
                  ? 'bg-primary text-bg-dark shadow-lg shadow-primary/20' 
                  : 'bg-slate-200 dark:bg-bg-dark/50 border border-slate-300 dark:border-primary/20 text-slate-600 dark:text-slate-400 hover:border-primary'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <motion.div 
              layout
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group bg-white dark:bg-bg-dark/40 border border-slate-200 dark:border-primary/10 rounded-2xl overflow-hidden hover:border-primary transition-all cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={lang === 'th' ? project.titleTh || project.title : project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 rounded uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                  {project.status && (
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter ${
                      project.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' :
                      project.status === 'In Progress' ? 'bg-amber-500/10 text-amber-500' :
                      'bg-blue-500/10 text-blue-500'
                    }`}>
                      {lang === 'th' ? project.statusTh || project.status : project.status}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{lang === 'th' ? project.titleTh || project.title : project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">{lang === 'th' ? project.descriptionTh || project.description : project.description}</p>
                </div>
                <button className="w-full bg-primary text-bg-dark font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  {t.featured.viewDetails} <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const CertificatesScreen = () => {
    const categories = [
      { id: 'All', label: t.certs.categories.all },
      { id: 'Academic', label: t.certs.categories.academic },
      { id: 'Student Activities', label: t.certs.categories.student },
      { id: 'Training', label: t.certs.categories.training },
    ];
    const filteredCerts = selectedCertCategory === 'All' 
      ? CERTIFICATES 
      : CERTIFICATES.filter(c => c.category === selectedCertCategory);

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6 max-w-2xl">
            <nav className="flex items-center gap-2 text-sm">
              <span className="text-primary hover:underline cursor-pointer" onClick={() => setCurrentScreen('home')}>{t.nav.home}</span>
              <ChevronRight size={14} className="text-slate-400" />
              <span className="text-slate-500 dark:text-slate-400">{t.nav.certificates}</span>
            </nav>
            <h1 className="text-6xl font-black">{t.certs.title} <span className="text-primary">{t.certs.titleSuffix}</span></h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              {t.certs.description}
            </p>
          </div>
          <div className="flex items-center gap-4 bg-primary/10 p-6 rounded-2xl border border-primary/20">
            <Verified size={40} className="text-primary" />
            <p className="text-primary font-black text-3xl leading-none">-</p>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCertCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                selectedCertCategory === cat.id 
                  ? 'bg-primary text-bg-dark shadow-lg shadow-primary/20' 
                  : 'bg-slate-200 dark:bg-bg-dark/50 border border-slate-300 dark:border-primary/20 text-slate-600 dark:text-slate-400 hover:border-primary'
              }`}
            >
              {cat.label}
              {cat.id === 'Academic' && <GraduationCap size={14} />}
              {cat.id === 'Student Activities' && <Users size={14} />}
              {cat.id === 'Training' && <Award size={14} />}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map(cert => (
            <div key={cert.id} className="group bg-white dark:bg-bg-dark/40 border border-slate-200 dark:border-primary/10 rounded-2xl overflow-hidden hover:border-primary transition-all">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={cert.image} alt={lang === 'th' ? cert.titleTh || cert.title : cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-primary text-bg-dark rounded-full p-4 shadow-xl">
                    <Search size={24} />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">{cert.category}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{lang === 'th' ? cert.dateTh || cert.date : cert.date}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{lang === 'th' ? cert.titleTh || cert.title : cert.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t.certs.issuingOrg}: {lang === 'th' ? cert.issuerTh || cert.issuer : cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View Section */}
        <div className="mt-20 space-y-10">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Search className="text-primary" /> {t.certs.detailedView}
          </h2>
          <div className="bg-white dark:bg-bg-dark/60 rounded-3xl border border-slate-200 dark:border-primary/20 overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-2/3 bg-slate-100 dark:bg-bg-dark p-8 md:p-16 flex items-center justify-center">
              <div className="w-full max-w-2xl aspect-[1.414/1] bg-bg-dark/40 rounded-2xl border-4 border-primary/20 flex flex-col items-center justify-center text-center p-10 space-y-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="size-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-6 animate-pulse">
                    <Verified size={48} />
                  </div>
                  <h3 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-none">{t.certs.comingSoon}</h3>
                  <div className="w-20 h-1.5 bg-primary mx-auto my-4 rounded-full" />
                  <p className="text-slate-400 font-bold text-sm tracking-[0.2em] uppercase">{lang === 'th' ? 'กำลังปรับปรุงข้อมูลส่วนนี้' : 'Detailed View Under Construction'}</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 p-12 flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">{t.certs.info}</span>
                  <h3 className="text-4xl font-bold">{t.certs.comingSoon}</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { icon: <Building2 size={20} />, label: t.certs.org, value: '-' },
                    { icon: <Calendar size={20} />, label: t.certs.issuedDate, value: '-' },
                    { icon: <QrCode size={20} />, label: t.certs.credId, value: '-', mono: true },
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
                  {t.certs.comingSoon}
                </p>
              </div>
              <div className="flex gap-4 mt-12">
                <button className="flex-1 bg-slate-200 dark:bg-bg-dark/50 text-slate-400 font-bold py-4 rounded-xl flex items-center justify-center gap-2 cursor-not-allowed border border-slate-300 dark:border-primary/10">
                  <Download size={20} /> {t.certs.notAvailable}
                </button>
                <button className="bg-slate-200 dark:bg-bg-dark/50 text-slate-400 border border-slate-300 dark:border-primary/10 p-4 rounded-xl cursor-not-allowed">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };
  const ActivitiesScreen = () => {
    if (selectedActivity) {
      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="space-y-12"
        >
          <button 
            onClick={() => setSelectedActivity(null)}
            className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
          >
            <ArrowLeft size={20} /> {lang === 'th' ? 'กลับไปยังกิจกรรมทั้งหมด' : 'Back to all activities'}
          </button>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3 space-y-8">
              <div className="aspect-video rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
                <img 
                  src={selectedActivity.image} 
                  alt={lang === 'th' ? selectedActivity.titleTh || selectedActivity.title : selectedActivity.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="px-4 py-1.5 rounded-full bg-primary text-bg-dark text-xs font-bold uppercase tracking-widest">
                    {selectedActivity.type}
                  </span>
                  <span className="flex items-center gap-2 text-slate-500 font-medium">
                    <Calendar size={18} /> {lang === 'th' ? selectedActivity.dateTh || selectedActivity.date : selectedActivity.date}
                  </span>
                </div>
                
                <h1 className="text-5xl font-black">{lang === 'th' ? selectedActivity.titleTh || selectedActivity.title : selectedActivity.title}</h1>
                
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                    {lang === 'th' ? selectedActivity.descriptionTh || selectedActivity.description : selectedActivity.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 space-y-8">
              <div className="bg-white dark:bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-6 sticky top-24">
                <h3 className="text-xl font-bold border-b border-primary/10 pb-4">{lang === 'th' ? 'ข้อมูลกิจกรรม' : 'Activity Info'}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Trophy size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{lang === 'th' ? 'ประเภท' : 'Type'}</p>
                      <p className="font-medium">{selectedActivity.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{lang === 'th' ? 'วันที่' : 'Date'}</p>
                      <p className="font-medium">{lang === 'th' ? selectedActivity.dateTh || selectedActivity.date : selectedActivity.date}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    onClick={() => setSelectedActivity(null)}
                    className="w-full py-4 bg-primary text-bg-dark font-bold rounded-xl hover:opacity-90 transition-opacity"
                  >
                    {lang === 'th' ? 'ปิดหน้านี้' : 'Close Details'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-20">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mx-auto md:mx-0">
            <Calendar size={14} />
            <span className="text-xs font-bold uppercase tracking-widest">{t.activities.subtitle}</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black">{t.activities.title} <span className="text-primary">{t.activities.titleSuffix}</span></h1>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl leading-relaxed">
            {t.activities.description}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto md:mx-0">
          <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-primary/20" />
          <div className="space-y-16">
            {ACTIVITIES.map((activity) => (
              <div 
                key={activity.id} 
                className="relative pl-12 group cursor-pointer"
                onClick={() => setSelectedActivity(activity)}
              >
                <div className="absolute left-0 top-1 size-10 rounded-full bg-primary flex items-center justify-center z-10 shadow-xl shadow-primary/30 group-hover:scale-110 transition-transform">
                  {activity.icon === 'trophy' ? <Trophy size={20} className="text-bg-dark" /> : 
                   activity.icon === 'school' ? <School size={20} className="text-bg-dark" /> :
                   activity.icon === 'groups' ? <Users size={20} className="text-bg-dark" /> :
                   activity.icon === 'science' ? <Terminal size={20} className="text-bg-dark" /> :
                   activity.icon === 'hardware' ? <Code size={20} className="text-bg-dark" /> :
                   <Mic2 size={20} className="text-bg-dark" />}
                </div>
                <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-primary/5 p-8 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all shadow-sm group-hover:shadow-xl group-hover:shadow-primary/5">
                  <div className="w-full md:w-64 h-40 rounded-xl overflow-hidden shrink-0 border border-primary/10">
                    <img src={activity.image} alt={lang === 'th' ? activity.titleTh || activity.title : activity.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold uppercase text-primary tracking-widest">{lang === 'th' ? activity.dateTh || activity.date : activity.date}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        activity.type === 'NATIONAL' ? 'bg-primary text-bg-dark' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {activity.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{lang === 'th' ? activity.titleTh || activity.title : activity.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">{lang === 'th' ? activity.descriptionTh || activity.description : activity.description}</p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {lang === 'th' ? 'ดูรายละเอียด' : 'View Details'} <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-black">{t.activities.gallery} <span className="text-primary">{t.activities.gallerySuffix}</span></h2>
          <div className="h-[2px] grow ml-8 bg-primary/10" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: lang === 'th' ? 'โครงการพัฒนาผู้นำนักศึกษาด้านบุคลิกภาพ' : 'Student Leader Personality Development Project', 
              desc: lang === 'th' ? 'การอบรมพัฒนาทักษะความเป็นผู้นำและบุคลิกภาพ' : 'Leadership and personality development training', 
              img: '/images/formyself.png' 
            },
            { 
              title: lang === 'th' ? 'กิจกรรม "รับน้อง รักพี่" คณะวิทยาศาสตร์และเทคโนโลยี ประจำปี 2568' : '"Welcome Freshmen" Science and Technology 2025', 
              desc: lang === 'th' ? 'กิจกรรมสร้างความสัมพันธ์ระหว่างรุ่นพี่และรุ่นน้อง' : 'Building relationships between seniors and freshmen', 
              img: '/images/luvSci.jpg' 
            },
            { 
              title: lang === 'th' ? 'กิจกรรมปีใหม่คณะวิทยาศาสตร์และเทคโนโลยี ประจำปี 2569' : 'New Year Activity Science and Technology 2026', 
              desc: lang === 'th' ? 'งานเฉลิมฉลองปีใหม่ของคณะวิทยาศาสตร์และเทคโนโลยี' : 'New Year celebration for the Faculty of Science and Technology', 
              img: '/images/HNYSCI.png' 
            },
          ].map((item, i) => (
            <div 
              key={i} 
              className="group cursor-pointer space-y-4"
              onClick={() => setExpandedGalleryImage(item.img)}
            >
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

      {/* Gallery Lightbox */}
      <AnimatePresence>
        {expandedGalleryImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-dark/95 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setExpandedGalleryImage(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 size-12 rounded-full bg-primary text-bg-dark flex items-center justify-center hover:scale-110 transition-transform z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedGalleryImage(null);
              }}
            >
              <X size={24} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-primary/20"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={expandedGalleryImage} 
                className="w-full h-full object-contain bg-bg-dark" 
                alt="Expanded Gallery"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-primary rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-bg-dark text-4xl font-black">{t.activities.ctaTitle}</h2>
          <p className="text-bg-dark/80 font-bold text-lg">{t.activities.ctaDesc}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-10 py-4 bg-bg-dark text-primary font-bold rounded-xl hover:bg-slate-900 transition-colors shadow-2xl">
            {t.activities.hireMe}
          </button>
          <button 
            onClick={() => {
              setCurrentScreen('works');
              setSelectedProject(null);
            }}
            className="px-10 py-4 border-2 border-bg-dark text-bg-dark font-bold rounded-xl hover:bg-bg-dark/10 transition-colors"
          >
            {t.activities.viewPortfolio}
          </button>
        </div>
      </div>
    </motion.div>
    );
  };


  const AboutScreen = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-20 py-10">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <h1 className="text-7xl font-black">{t.about.title} <span className="text-primary">{t.about.titleSuffix}</span></h1>
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              {t.about.p1}
            </p>
            <p>
              {t.about.p2}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <p className="text-primary font-bold text-3xl">3.39</p>
              <p className="text-xs uppercase tracking-widest font-bold text-slate-500">{t.about.gpa}</p>
            </div>
            <div>
              <p className="text-primary font-bold text-3xl">{t.about.yearValue}</p>
              <p className="text-xs uppercase tracking-widest font-bold text-slate-500">{t.about.yearLabel}</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-primary/20 relative">
            <img 
              src="/images/jirakit_Leader.png" 
              alt="Jirakit" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-black">{t.about.skillsTitle}</h2>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-bg-dark/40 border border-slate-200 dark:border-primary/10 p-8 rounded-3xl space-y-6 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {category.categoryKey === 'ide' && <Terminal size={24} />}
                  {category.categoryKey === 'language' && <Code size={24} />}
                  {category.categoryKey === 'database' && <Server size={24} />}
                  {category.categoryKey === 'tool' && <Cpu size={24} />}
                </div>
                <h3 className="text-xl font-bold">
                  {t.about.categories[category.categoryKey as keyof typeof t.about.categories]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 border border-transparent hover:border-primary/20 hover:text-primary transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const ContactScreen = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16 py-10">
      <div className="text-center space-y-4">
        <h1 className="text-7xl font-black">{t.contact.title} <span className="text-primary">{t.contact.titleSuffix}</span></h1>
        <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto">
          {t.contact.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-bg-dark/40 border border-slate-200 dark:border-primary/10 p-10 rounded-3xl space-y-8">
          <h2 className="text-3xl font-bold">{t.contact.infoTitle}</h2>
          <div className="space-y-6">
            {[
              { icon: <Mail className="text-primary" />, label: t.contact.email, value: 'jirakit661102057104@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=jirakit661102057104@gmail.com' },
              { icon: <Instagram className="text-primary" />, label: t.contact.instagram, value: 'ppperth.ixz', href: 'https://instagram.com/ppperth.ixz' },
              { icon: <Phone className="text-primary" />, label: t.contact.phone, value: '0807034438', href: 'tel:0807034438' },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-bg-dark transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.label}</p>
                  <p className="text-xl font-bold group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <form className="space-y-6 bg-white dark:bg-bg-dark/40 border border-slate-200 dark:border-primary/10 p-10 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">{t.contact.nameLabel}</label>
              <input type="text" className="w-full bg-slate-100 dark:bg-bg-dark border border-slate-200 dark:border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder={t.contact.namePlaceholder} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">{t.contact.emailLabel}</label>
              <input type="email" className="w-full bg-slate-100 dark:bg-bg-dark border border-slate-200 dark:border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder={t.contact.emailPlaceholder} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">{t.contact.messageLabel}</label>
            <textarea rows={5} className="w-full bg-slate-100 dark:bg-bg-dark border border-slate-200 dark:border-primary/20 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors" placeholder={t.contact.messagePlaceholder} />
          </div>
          <button className="w-full bg-primary text-bg-dark font-black py-4 rounded-xl text-lg hover:opacity-90 transition-opacity">
            {t.contact.sendButton}
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
