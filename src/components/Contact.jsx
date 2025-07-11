import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
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

  return (
    <section id="contact" className="section section-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-8 text-secondary-900 font-display"
          >
            Contact Me
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary-600 mb-12 font-light"
          >
            My social media accounts
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center space-y-3 text-secondary-700 hover:text-secondary-900 transition-all duration-300 group"
              >
                <div className={`p-4 bg-gradient-to-br ${link.color} group-hover:${link.hoverColor} rounded-full shadow-lg transition-all duration-300`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 