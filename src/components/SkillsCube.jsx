import React from 'react';
import { motion } from 'framer-motion';

const SkillsCube = () => {
  const skillsCube1 = ['JavaScript', 'API', 'Git', 'Python', 'SQL', 'React'];
  const skillsCube2 = ['C', 'C#', 'Cloud', 'Airflow', 'Spark', 'HDFS'];

  const CubeComponent = ({ skills, rotationAnimation, glowColor }) => {
    const faces = [
      { transform: 'translateZ(100px)', skill: skills[0] },
      { transform: 'rotateY(180deg) translateZ(100px)', skill: skills[1] },
      { transform: 'rotateY(-90deg) translateZ(100px)', skill: skills[2] },
      { transform: 'rotateY(90deg) translateZ(100px)', skill: skills[3] },
      { transform: 'rotateX(90deg) translateZ(100px)', skill: skills[4] },
      { transform: 'rotateX(-90deg) translateZ(100px)', skill: skills[5] },
    ];

    return (
      <div className="relative">
        {/* Ambient light effect */}
        <div 
          className="absolute inset-0 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{
            background: glowColor,
            transform: 'scale(1.8)',
          }}
        />
        
        <motion.div
          animate={rotationAnimation}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="relative w-[200px] h-[200px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {faces.map((face, index) => (
            <div
              key={index}
              className="absolute w-full h-full flex items-center justify-center
                backdrop-blur-sm border-2 border-white/30 rounded-lg
                shadow-xl text-white font-bold text-lg"
              style={{
                transform: face.transform,
                backfaceVisibility: 'hidden',
                background: `linear-gradient(135deg, 
                  rgba(59, 130, 246, 0.4) 0%, 
                  rgba(147, 51, 234, 0.4) 100%)`,
                boxShadow: `
                  0 8px 32px rgba(59, 130, 246, 0.3),
                  inset 0 2px 8px rgba(255, 255, 255, 0.2)
                `
              }}
            >
              <span 
                className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-white pointer-events-none select-none"
              >
                {face.skill}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center gap-32 md:gap-40 flex-wrap py-12">
      {/* First Cube */}
      <motion.div 
        className="perspective-[1200px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <CubeComponent 
          skills={skillsCube1} 
          rotationAnimation={{ 
            rotateX: [0, 360], 
            rotateY: [0, 360]
          }}
          glowColor="radial-gradient(circle, rgba(59, 130, 246, 0.5), transparent)"
        />
      </motion.div>

      {/* Second Cube */}
      <motion.div 
        className="perspective-[1200px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <CubeComponent 
          skills={skillsCube2} 
          rotationAnimation={{ 
            rotateX: [360, 0], 
            rotateY: [0, -360]
          }}
          glowColor="radial-gradient(circle, rgba(147, 51, 234, 0.5), transparent)"
        />
      </motion.div>
    </div>
  );
};

export default SkillsCube;