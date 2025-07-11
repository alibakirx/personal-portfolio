import React from 'react';
import { motion } from 'framer-motion';

const SkillsCube = () => {
  const skillsCube1 = ['JavaScript', 'API', 'Git', 'Python', 'SQL', 'React'];
  const skillsCube2 = ['C', 'C#', 'Cloud', 'Airflow', 'Spark', 'HDFS'];

  const CubeComponent = ({ skills, rotationAnimation, glowColor, gradientColors }) => {
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
          className="absolute inset-0 rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{
            background: glowColor,
            transform: 'scale(1.8)',
          }}
        />
        
        <motion.div
          animate={rotationAnimation}
          transition={{ 
            duration: 20, 
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
                backdrop-blur-sm border-2 border-white/40 rounded-lg
                shadow-2xl text-white font-bold text-lg"
              style={{
                transform: face.transform,
                backfaceVisibility: 'hidden',
                background: gradientColors,
                boxShadow: `
                  0 12px 40px rgba(0, 0, 0, 0.3),
                  inset 0 2px 8px rgba(255, 255, 255, 0.3)
                `
              }}
            >
              <span 
                className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-white pointer-events-none select-none font-display"
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
          glowColor="radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent)"
          gradientColors="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)"
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
          glowColor="radial-gradient(circle, rgba(14, 165, 233, 0.6), transparent)"
          gradientColors="linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)"
        />
      </motion.div>
    </div>
  );
};

export default SkillsCube;