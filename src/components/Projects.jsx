import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Database, Brain, Cloud } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const [filter, setFilter] = useState('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = [
    { id: 'all', label: language === 'tr' ? 'Hepsi' : 'All' },
    { id: 'web', label: language === 'tr' ? 'Web Geliştirme' : 'Web Dev' },
    { id: 'data', label: language === 'tr' ? 'Yapay Zeka & Veri' : 'AI & Big Data' },
  ];

  const projectsData = [
    {
      id: 1,
      category: 'data',
      title: language === 'tr' ? 'Büyük Veri İşleme Hattı' : 'Big Data Pipeline',
      description: language === 'tr' 
        ? 'Spark ve Airflow kullanılarak geliştirilmiş, HDFS ve SQL veritabanları arasında büyük veri akışını yöneten ETL mimarisi.'
        : 'ETL architecture developed using Spark and Airflow, managing big data flows between HDFS and SQL databases.',
      tags: ['Spark', 'Airflow', 'Python', 'SQL', 'HDFS'],
      icon: Database,
      github: 'https://github.com/alibakirx',
      demo: 'https://github.com/alibakirx',
    },
    {
      id: 2,
      category: 'data',
      title: language === 'tr' ? 'Yapay Zeka Destekli Analiz' : 'AI-Powered Insights',
      description: language === 'tr'
        ? 'Büyük dil modelleri (LLM) ve NLP teknikleri ile müşteri geri bildirimlerini sınıflandıran ve özetleyen yapay zeka servisi.'
        : 'AI service classifying and summarizing customer feedback using large language models (LLMs) and NLP techniques.',
      tags: ['Python', 'LLM', 'HuggingFace', 'API', 'Docker'],
      icon: Brain,
      github: 'https://github.com/alibakirx',
      demo: 'https://github.com/alibakirx',
    },
    {
      id: 3,
      category: 'web',
      title: language === 'tr' ? 'Modern Portfolyo Sitesi' : 'Modern Portfolio Hub',
      description: language === 'tr'
        ? 'Vite, React, Framer Motion ve TailwindCSS ile geliştirilmiş, 3D etkileşimli elemanlara sahip kişisel portfolyo.'
        : 'Personal portfolio with 3D interactive elements, built using Vite, React, Framer Motion, and TailwindCSS.',
      tags: ['React', 'Vite', 'TailwindCSS', 'Framer Motion'],
      icon: Code,
      github: 'https://github.com/alibakirx',
      demo: 'https://github.com/alibakirx',
    },
    {
      id: 4,
      category: 'web',
      title: language === 'tr' ? 'Bulut Tabanlı REST API' : 'Cloud-Native REST API',
      description: language === 'tr'
        ? 'C# .NET ile geliştirilmiş, AWS Lambda ve DynamoDB entegrasyonu barındıran ölçeklenebilir mikroservis yapısı.'
        : 'Scalable microservice architecture developed with C# .NET, featuring AWS Lambda and DynamoDB integrations.',
      tags: ['C#', '.NET', 'AWS', 'DynamoDB', 'Serverless'],
      icon: Cloud,
      github: 'https://github.com/alibakirx',
      demo: 'https://github.com/alibakirx',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="section bg-slate-900/40 relative overflow-hidden">
      {/* Glow ambient background details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 font-display"
            >
              {language === 'tr' ? 'Projelerim' : 'My Projects'}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full"
            ></motion.div>
          </div>

          {/* Filter Tabs */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center space-x-4 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-slate-800/40 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Grid Layout */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const ProjectIcon = project.icon;
                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="card p-6 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Bar inside Card */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400 group-hover:bg-indigo-500/20 transition-all duration-300">
                          <ProjectIcon size={24} />
                        </div>
                        <div className="flex space-x-3 opacity-60 group-hover:opacity-100 transition-opacity">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-slate-800/50 hover:bg-slate-700 rounded-full text-slate-300 hover:text-white transition-all"
                          >
                            <Github size={18} />
                          </a>
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-slate-800/50 hover:bg-slate-700 rounded-full text-slate-300 hover:text-white transition-all"
                          >
                            <ExternalLink size={18} />
                          </a>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Stack Pills */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 bg-slate-800/60 border border-white/5 rounded-md text-xs font-semibold text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
