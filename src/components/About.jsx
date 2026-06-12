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
      date: language === 'tr' ? '2021 - 2026' : '2021 - 2026',
      skills: ['C', 'C#', 'Python', 'SQL', language === 'tr' ? 'Veritabanı' : 'Database', language === 'tr' ? 'Algoritmalar' : 'Algorithms'],
      icon: GraduationCap,
    },
  ];

  const experiences = [
    {
      type: 'work',
      title: 'Jr. AI Specialist',
      company: 'ONO',
      date: language === 'tr' ? 'Haziran 2025 - Haziran 2026 (1 Yıl)' : 'June 2025 - June 2026 (1 Year)',
      skills: ['Python', 'SQL', 'API', 'AI', [language === 'tr' ? 'Veri Mühendisliği' : 'Data Engineering']],
      icon: Briefcase,
    },
    {
      type: 'work',
      title: 'Intern Data Engineer',
      company: 'ONO',
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
    <section id="about" className="section bg-slate-950 relative overflow-hidden">
      {/* Background ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-display"
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
                  <div className="p-3 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/5 rounded-xl">
                    <edu.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">
                      {edu.title}
                    </h3>
                    <p className="text-indigo-400 mt-1 font-medium">{edu.company}</p>
                    <div className="flex items-center gap-2 text-slate-400 mt-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.date}</span>
                    </div>
                    {edu.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {edu.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/20"
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
            className="text-4xl font-bold text-center mb-12 mt-20 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-display"
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
                  <div className="p-3 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/5 rounded-xl">
                    <exp.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-indigo-400 mt-1 font-medium">{exp.company}</p>
                    <div className="flex items-center gap-2 text-slate-400 mt-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.date}</span>
                    </div>
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/20"
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