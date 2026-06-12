import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';
import { LanguageContext } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { language, toggleLanguage } = useContext(LanguageContext);

  const navItems = [
    { name: language === 'tr' ? 'Anasayfa' : 'Home', id: 'home' },
    { name: language === 'tr' ? 'Hakkımda' : 'About', id: 'about' },
    { name: language === 'tr' ? 'İletişim' : 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-6 flex items-center justify-center">
        <div className="flex items-center w-full max-w-5xl justify-between">
          {/* Logo - Sol */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold flex-shrink-0 cursor-pointer"
            style={{ minWidth: 48 }}
          >
            <a href="#home">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-12 w-auto invert brightness-0 hover:opacity-85 transition-opacity"
              />
            </a>
          </motion.div>

          {/* Menü - Orta */}
          <div className="hidden md:flex flex-1 justify-end items-center space-x-8">
            <div className="flex items-center space-x-8 mr-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  whileHover={{ y: -2 }}
                  className="font-medium text-sm transition-colors duration-300 text-slate-300 hover:text-indigo-400"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full border text-xs font-semibold transition-all duration-300 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400 active:scale-95"
            >
              {language === 'tr' ? 'ENG' : 'TR'}
            </button>
          </div>

          {/* Mobile Menu Button - Sağ */}
          <button
            className="md:hidden flex-shrink-0 ml-2 p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col items-center">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-lg text-slate-300 hover:text-indigo-400 transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className="w-24 mt-4 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10"
              >
                {language === 'tr' ? 'ENG' : 'TR'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 