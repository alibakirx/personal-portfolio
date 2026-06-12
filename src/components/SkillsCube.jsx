import React from 'react';
import { motion } from 'framer-motion';

const SkillsCube = () => {
  const skillsCube1 = ['Data', 'Big Data', 'Python', 'SQL', 'AI', 'Cloud'];

  // Vibrant gradients for each face of the single cube
  const cube1Gradients = [
    'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)', // Data - Indigo
    'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)', // Big Data - Sky Blue
    'linear-gradient(135deg, #10b981 0%, #047857 100%)', // Python - Emerald
    'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)', // SQL - Amber
    'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)', // AI - Purple
    'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', // Cloud - Pink
  ];

  const CubeComponent = ({ skills, rotationAnimation, glowColor, gradients }) => {
    const faces = [
      { transform: 'translateZ(110px)', skill: skills[0] },
      { transform: 'rotateY(180deg) translateZ(110px)', skill: skills[1] },
      { transform: 'rotateY(-90deg) translateZ(110px)', skill: skills[2] },
      { transform: 'rotateY(90deg) translateZ(110px)', skill: skills[3] },
      { transform: 'rotateX(90deg) translateZ(110px)', skill: skills[4] },
      { transform: 'rotateX(-90deg) translateZ(110px)', skill: skills[5] },
    ];

    return (
      <div className="relative flex items-center justify-center w-[250px] h-[250px]">
        {/* Ambient light effect */}
        <div 
          className="absolute inset-0 rounded-full blur-3xl opacity-35 pointer-events-none"
          style={{
            background: glowColor,
            transform: 'scale(1.6)',
          }}
        />
        
        <motion.div
          animate={rotationAnimation}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "linear"
          }}
          className="relative w-[220px] h-[220px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {faces.map((face, index) => (
            <div
              key={index}
              className="absolute w-full h-full flex items-center justify-center
                backdrop-blur-md border border-white/20 rounded-2xl
                shadow-2xl text-white font-bold text-lg"
              style={{
                transform: face.transform,
                backfaceVisibility: 'hidden',
                background: gradients[index],
                boxShadow: `
                  0 15px 35px rgba(0, 0, 0, 0.45),
                  inset 0 2px 10px rgba(255, 255, 255, 0.25)
                `
              }}
            >
              <span 
                className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-white pointer-events-none select-none font-display text-xl tracking-wide"
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
    <div className="flex items-center justify-center py-4">
      {/* Single Central Cube */}
      <motion.div 
        className="perspective-[1200px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <CubeComponent 
          skills={skillsCube1} 
          rotationAnimation={{ 
            rotateX: [0, 360], 
            rotateY: [0, 360]
          }}
          glowColor="radial-gradient(circle, rgba(99, 102, 241, 0.5), transparent)"
          gradients={cube1Gradients}
        />
      </motion.div>
    </div>
  );
};

export default SkillsCube;