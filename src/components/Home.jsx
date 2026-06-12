import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillsCube from './SkillsCube';
import { ArrowDown } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Premium ambient light blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6 relative z-10 text-center max-w-4xl"
      >
        {/* Name Header */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 mb-6 tracking-tight font-display"
        >
          Muhammed Ali Bakır
        </motion.h1>

        {/* Title Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-10"
        >
          {language === 'tr' ? 'Jr. Yazılım Geliştirici & Veri Mühendisi' : 'Jr. Software Developer & Data Engineer'}
        </motion.p>

        {/* Description Bio */}
        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto mb-12 bg-white/[0.02] backdrop-blur-md rounded-2xl border border-white/5 p-6 md:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] text-center"
        >
          <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed">
            {language === 'tr' ? (
              <>
                <span className="text-white font-semibold underline decoration-indigo-500/50 decoration-2 underline-offset-4">Dokuz Eylül Üniversitesi Bilgisayar Bilimleri</span> bölümünde son sınıf öğrencisiyim.
                <br /><br />
                Profesyonel ve kişisel olarak{' '}
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent font-bold">Front-End</span>,{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">Data</span>,{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-bold">Big Data</span>,{' '}
                <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent font-bold">Cloud</span> ve{' '}
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent font-bold">AI</span> konularında çalışma ve proje geliştirme fırsatım oldu.
              </>
            ) : (
              <>
                I am currently a senior undergraduate student in the{' '}
                <span className="text-white font-semibold underline decoration-indigo-500/50 decoration-2 underline-offset-4">Computer Science Department at Dokuz Eylül University</span>.
                <br /><br />
                I have had the opportunity to work on and develop projects in the fields of{' '}
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent font-bold">Front-End</span>,{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">Data</span>,{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-bold">Big Data</span>,{' '}
                <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent font-bold">Cloud</span>, and{' '}
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent font-bold">AI</span>.
              </>
            )}
          </p>
        </motion.div>

          {/* Interactive SkillsCube in center */}
          <motion.div
            variants={itemVariants}
            className="my-12 flex justify-center"
          >
            <SkillsCube />
          </motion.div>

          {/* Buttons & Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-6"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary px-10 py-4 font-semibold text-lg"
            >
              {language === 'tr' ? 'İletişime Geç' : 'Contact Me'}
            </motion.a>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-6"
            >
              <ArrowDown className="text-slate-500 hover:text-indigo-400 transition-colors" size={28} />
            </motion.div>
          </motion.div>
      </motion.div>
    </section>
  );
};

export default Home; 