import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillsCube from './SkillsCube';
import { ArrowDown } from 'lucide-react';

const Home = () => {
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/forest-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6 py-20 text-center relative z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl"
        >
          Muhammed Ali Bakır
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-white/90 mb-12 drop-shadow-lg"
        >
          Jr. Software Developer
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-12"
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
            className="inline-block bg-primary/90 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/80 transition-colors shadow-xl border border-white/20"
          >
            Contact Me
          </motion.a>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-8"
          >
            <ArrowDown className="mx-auto text-white/80 drop-shadow-lg" size={32} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home; 