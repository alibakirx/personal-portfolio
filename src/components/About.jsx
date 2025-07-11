import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      type: 'education',
      title: "Bachelor's in Computer Science",
      company: 'Dokuz Eylül University',
      date: '2021 - 2025',
      skills: ['C', 'C#', 'Database', 'Algorithms'],
      icon: GraduationCap,
    },
    {
      type: 'work',
      title: 'Intern Big Data Engineer',
      company: 'Doğuş Teknoloji',
      date: 'May 2024 - Dec 2024',
      skills: ['Python', 'SQL', 'Airflow', 'Spark', 'HDFS', 'API'],
      icon: Briefcase,
    },
    {
      type: 'work',
      title: 'Intern Front-End Developer',
      company: 'Doğuş Teknoloji',
      date: 'Jul 2023 - Dec 2023',
      skills: ['ReactJS', 'JavaScript', 'CSS', 'API'],
      icon: Briefcase,
    },
    {
      type: 'work',
      title: 'Intern Data Engineer',
      company: 'OneNewOne',
      date: 'Dec 2023 - Present',
      skills: ['Data Analysis'],
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
    <section id="about" className="section section-light">
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
            className="text-4xl font-bold text-center mb-12 text-secondary-900 font-display"
          >
            Experience & Education
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