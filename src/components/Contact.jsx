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
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/alibakirx',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/muhammedalibakir',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            className="text-4xl font-bold mb-8 text-gray-800"
          >
            Contact Me
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-12"
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center space-y-2 text-gray-600 hover:text-primary transition-colors"
              >
                <div className="p-4 bg-white rounded-full shadow-md">
                  <link.icon className="w-6 h-6" />
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