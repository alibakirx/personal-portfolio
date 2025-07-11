import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';
import { LanguageContext } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { language, toggleLanguage } = useContext(LanguageContext);

  const navItems = [
    language === 'tr' ? 'Anasayfa' : 'Home',
    language === 'tr' ? 'Hakkımda' : 'About',
    language === 'tr' ? 'İletişim' : 'Contact',
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-secondary-200"
    >
      <div className="w-full px-6 py-4 flex items-center justify-center">
        <div className="flex items-center w-full max-w-5xl justify-between">
          {/* Logo - Sol */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-secondary-900 font-display flex-shrink-0"
            style={{ minWidth: 48 }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-14 w-auto"
            />
          </motion.div>

          {/* Menü - Orta */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navItems.map((item, idx) => (
              <motion.a
                key={item}
                href={`#${['home','about','contact'][idx]}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`font-medium transition-colors duration-200 text-secondary-700 hover:text-primary-600`}
              >
                {item}
              </motion.a>
            ))}
            <button
              onClick={toggleLanguage}
              className="ml-4 px-2 py-1 rounded border text-xs font-semibold transition-colors duration-200 border-secondary-400 text-secondary-700 hover:bg-secondary-100"
            >
              {language === 'tr' ? 'ENG' : 'TR'}
            </button>
          </div>

          {/* Mobile Menu Button - Sağ */}
          <button
            className="md:hidden flex-shrink-0 ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className={'text-secondary-700'} />
            ) : (
              <Menu size={24} className={'text-secondary-700'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-lg"
          >
            {navItems.map((item, idx) => (
              <a
                key={item}
                href={`#${['home','about','contact'][idx]}`}
                className="block text-secondary-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-4 px-4 py-2 rounded border text-sm font-semibold transition-colors duration-200 border-secondary-400 text-secondary-700 hover:bg-secondary-100"
            >
              {language === 'tr' ? 'ENG' : 'TR'}
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 