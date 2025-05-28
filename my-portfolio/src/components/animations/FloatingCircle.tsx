'use client';

import { motion } from 'framer-motion';

const FloatingCircle = () => {
  return (
    <motion.div
      className="absolute inset-0 m-auto w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] opacity-0 blur-3xl"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.3, 0, 0.3, 0, 0.2],
        backgroundImage: [
          'linear-gradient(to right, #00FFFF, #FF00FF)',
          'linear-gradient(to right, #FF00FF, #00FFFF)',
          'linear-gradient(to right, #00FFFF, #FF00FF)'
        ],
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
      }}
    />
  );
};

export default FloatingCircle; 