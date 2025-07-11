import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const About = () => {
  const { language } = useContext(LanguageContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education = [
    {
      type: 'education',
      title: language === 'tr' ? 'Bilgisayar Bilimleri Lisans' : "Bachelor's in Computer Science",
      company: language === 'tr' ? 'Dokuz Eylül Üniversitesi' : 'Dokuz Eylül University',
      date: language === 'tr' ? '2021 - 2025' : '2021 - 2025',
      skills: ['C', 'C#', language === 'tr' ? 'Veritabanı' : 'Database', language === 'tr' ? 'Algoritmalar' : 'Algorithms'],
      icon: GraduationCap,
    },
  ];

  const experiences = [
    {
      type: 'work',
      title: 'Jr. AI Specialist',
      company: 'OneNewOne',
      date: language === 'tr' ? 'Haziran 2025 - Devam Ediyor' : 'June 2025 - Present',
      skills: ['Python', 'SQL', 'API'],
      icon: Briefcase,
    },
    {
      type: 'work',
      title: 'Intern Data Engineer',
      company: 'OneNewOne',
      date: language === 'tr' ? 'Aralık 2024 - Haziran 2025 (6 Ay)' : 'Dec 2024 - June 2025 (6 Month)',
      skills: [language === 'tr' ? 'Veri Analizi' : 'Data Analysis'],
      icon: Briefcase,
    },
    {
      type: 'work',
      title: 'Intern Big Data Engineer',
      company: 'Doğuş Teknoloji',
      date: language === 'tr' ? 'Aralık 2023 - Mayıs 2024 (6 Ay)' : 'Dec 2023 - May 2024 (6 Month)',
      skills: ['Python', 'SQL', 'Airflow', 'Spark', 'HDFS', 'API'],
      icon: Briefcase,
    },
    {
      type: 'work',
      title: 'Intern Front-End Developer',
      company: 'Doğuş Teknoloji',
      date: language === 'tr' ? 'Temmuz 2023 - Aralık 2023 (6 Ay)' : 'Jul 2023 - Dec 2023 (6 Month)',
      skills: ['ReactJS', 'JavaScript', 'CSS', 'API'],
      icon: Briefcase,
    },
    
    
  ];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section id="about" className="section bg-gradient-to-br from-[#6100cf] via-[#6f5d83] to-[#1e293b]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-8 text-secondary-900 font-display"
          >
            {language === 'tr' ? 'Eğitim' : 'Education'}
          </motion.h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 hover:shadow-lg transition-all duration-300"
               >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg">
                    <edu.icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary-900">
                      {edu.title}
                    </h3>
                    <p className="text-secondary-600 mt-1 font-medium">{edu.company}</p>
                    <div className="flex items-center gap-2 text-secondary-500 mt-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.date}</span>
                    </div>
                    {edu.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {edu.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-12 mt-12 text-secondary-900 font-display"
          >
            {language === 'tr' ? 'Deneyim' : 'Experience'}
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg">
                    <exp.icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary-900">
                      {exp.title}
                    </h3>
                    <p className="text-secondary-600 mt-1 font-medium">{exp.company}</p>
                    <div className="flex items-center gap-2 text-secondary-500 mt-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.date}</span>
                    </div>
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 