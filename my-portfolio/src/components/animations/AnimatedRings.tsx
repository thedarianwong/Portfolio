'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const AnimatedRings = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Initial 10-second animation
    controls.start({
      rotate: [0, 360, 720, 1080], // Three full rotations
      scale: [1, 1.1, 0.9, 1],     // Add scale for more dynamic movement
      transition: {
        duration: 5,
        ease: "easeInOut",
        times: [0, 0.33, 0.66, 1]  // Distribute the rotations over the 10 seconds
      }
    }).then(() => {
      // Continuous rotation after initial animation
      controls.start({
        rotate: 360,
        transition: {
          duration: 2,
          ease: "linear",
          repeat: Infinity
        }
      });
    });
  }, [controls]);

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 520 520"
      animate={controls}
      initial={{ rotate: 0, scale: 1 }}
      style={{ display: 'block' }}
    >
      <circle 
        cx="260" 
        cy="260" 
        r="170" 
        stroke="white" 
        strokeWidth="16" 
        fill="none"
      />
      <circle 
        cx="260" 
        cy="260" 
        r="200" 
        stroke="white" 
        strokeWidth="8" 
        fill="none"
      />
    </motion.svg>
  );
};

export default AnimatedRings; 