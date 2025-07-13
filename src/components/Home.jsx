import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillsCube from './SkillsCube';
import { ArrowDown } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';
import aiportre from '../assets/aiportre.png';

const Home = () => {
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
        delayChildren: 0.3,
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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#6100cf] via-[#6f5d83] to-[#1e293b]"
    >
      {/* Professional overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/70 via-secondary-800/60 to-primary-900/50"></div>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6 py-20 relative z-10"
      >
        {/* İsim - Tam Ekran */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-yellow-500 mb-12 mt-4 drop-shadow-2xl font-display text-center w-full"
        >
          Muhammed Ali Bakır 
        </motion.h1>

        <motion.p
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl text-white/90 mb-8 drop-shadow-lg font-light text-center w-full"
            >
              {language === 'tr' ? 'Jr. Yazılım Geliştirici' : 'Jr. Software Developer'}
            </motion.p>


        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Resim - Sol Taraf */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <img 
              src={aiportre} 
              alt="Muhammed Ali Bakır" 
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] drop-shadow-2xl"
            />
          </motion.div>

          {/* Yazılar - Sağ Taraf */}
          <div className="text-center lg:text-left flex-1 mt-8 max-w-2xl flex flex-col justify-center">
            

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl text-white/90 mt-4 drop-shadow-lg font-light"
            >
              {language === 'tr'
                ? (
                  <>
                    Dokuz Eylül Üniversitesi Bilgisayar Bilimleri son sınıf öğrencisiyim.<br />
                    Web Geliştirme, Veri, Büyük Veri, Yapay Zeka ve Bulut Bilişim alanlarına ilgi duyuyorum.<br />
                    Bu alanlarda kendimi sürekli geliştirmeye çalışıyorum.<br />
                  </>
                ) : (
                  <>
                    As a senior in Computer Science
                    at Dokuz Eylül University,<br />
                    I've developed a deep interest in
                    Web Development, Data, Big Data,
                    AI, and Cloud Computing.<br />
                    I'm constantly striving to improve my skills
                    in these areas.<br />
                  </>
                )}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-4 mt-4"
            >
              <SkillsCube />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-xl border border-white/20 backdrop-blur-sm"
              >
                {language === 'tr' ? 'İletişime Geç' : 'Contact Me'}
              </motion.a>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-8"
              >
                <ArrowDown className="mx-auto text-white/80 drop-shadow-lg" size={32} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home; 