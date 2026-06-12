import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, FileText, Download } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';
import cvFileEN from '../assets/cv-eng.pdf';
import cvFileTR from '../assets/cv-tr.pdf';

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:your.alibakirx@gmail.com',
      color: 'from-accent-500 to-accent-600',
      hoverColor: 'from-accent-600 to-accent-700',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/alibakirx',
      color: 'from-secondary-600 to-secondary-700',
      hoverColor: 'from-secondary-700 to-secondary-800',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/muhammedalibakir',
      color: 'from-primary-500 to-primary-600',
      hoverColor: 'from-primary-600 to-primary-700',
    },
  ];

  const cvLinks = [
    {
      name: language === 'tr' ? 'CV Görüntüle' : 'View CV',
      icon: FileText,
      href: language === 'tr' ? cvFileTR : cvFileEN,
      color: 'from-green-500 to-green-600',
      hoverColor: 'from-green-600 to-green-700',
      action: 'view'
    },
    {
      name: language === 'tr' ? 'CV İndir' : 'Download CV',
      icon: Download,
      href: language === 'tr' ? cvFileTR : cvFileEN,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'from-purple-600 to-purple-700',
      action: 'download'
    },
  ];

  return (
    <section id="contact" className="section bg-slate-950 relative overflow-hidden">
      {/* Background ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-display"
          >
            {language === 'tr' ? 'İletişim' : 'Contact Me'}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 mb-12 font-medium"
          >
            {language === 'tr' ? 'Sosyal medya hesaplarım üzerinden bana ulaşabilirsiniz' : 'Feel free to connect with me on social platforms'}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8 md:space-x-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center space-y-3 text-slate-300 hover:text-indigo-400 transition-all duration-300 group"
              >
                <div className={`p-4 bg-gradient-to-br ${link.color} group-hover:${link.hoverColor} rounded-2xl shadow-lg transition-all duration-300 border border-white/5`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-white/5 max-w-lg mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-display">
              {language === 'tr' ? 'Özgeçmiş' : 'Resume'}
            </h3>
            <div className="flex justify-center space-x-6">
              {cvLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.action === 'view' ? '_blank' : undefined}
                  download={link.action === 'download' ? 'MuhammedAliBakır_CV.pdf' : undefined}
                  rel={link.action === 'view' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${link.action === 'view'
                    ? 'border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400'
                    : 'border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400'
                    }`}
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 