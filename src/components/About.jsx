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
      date: '2022 - 2026',
      skills: [],
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
    <section id="about" className="py-20 bg-white">
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
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Experience & Education
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{exp.company}</p>
                    <div className="flex items-center gap-2 text-gray-500 mt-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.date}</span>
                    </div>
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm"
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