import React from 'react';
import { motion } from 'framer-motion';

const SkillsCube = () => {
  const skillsCube1 = ['JavaScript', 'API', 'Git', 'Python', 'SQL', 'React'];
  const skillsCube2 = ['C', 'C#', 'Cloud', 'Airflow', 'Spark', 'AI'];

  // Her yüz için farklı gradient renkler
  const cube1Gradients = [
    'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)', // JavaScript - Mavi
    'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)', // API - Yeşil
    'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)', // Git - Turuncu
    'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)', // Python - Mor
    'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)', // SQL - Kırmızı
    'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)', // React - Cyan
  ];

  const cube2Gradients = [
    'linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%)', // C - İndigo
    'linear-gradient(135deg, #ec4899 0%, #db2777 50%, #be185d 100%)', // C# - Pembe
    'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)', // Cloud - Turuncu
    'linear-gradient(135deg, #84cc16 0%, #65a30d 50%, #4d7c0f 100%)', // Airflow - Lime
    'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #7c3aed 100%)', // Spark - Mor
    'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)', // AI - Teal
  ];

  const CubeComponent = ({ skills, rotationAnimation, glowColor, gradients }) => {
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
                background: gradients[index],
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
          gradients={cube1Gradients}
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
          gradients={cube2Gradients}
        />
      </motion.div>
    </div>
  );
};

export default SkillsCube;