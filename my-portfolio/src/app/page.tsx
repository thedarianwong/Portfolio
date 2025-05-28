'use client';

import { motion } from 'framer-motion';
import DollarsLogo from '@/components/animations/DollarsLogo';
import FloatingCircle from '@/components/animations/FloatingCircle';
import AnimatedRings from '@/components/animations/AnimatedRings';
import { useRouter } from 'next/navigation';
import AudioToggle from '@/components/animations/AudioToggle';

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Centered visual stack: FloatingCircle, Rings, Logo */}
      <div className="relative flex items-center justify-center w-full max-w-[520px] aspect-square mx-auto z-10">
        {/* Floating circle background */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none">
          <FloatingCircle />
        </div>
        {/* Animated rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10 pointer-events-none">
          <AnimatedRings />
        </div>
        {/* DOLLARS logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[30%] flex items-center justify-center z-20">
          <DollarsLogo />
        </div>
      </div>
      {/* Enter button below */}
      <motion.button
        onClick={() => router.push('/home')}
        className="mt-10 px-10 py-4 bg-transparent border-2 border-white rounded-full
                   hover:bg-white hover:text-black transition-colors duration-300
                   text-xl font-medium z-20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ENTER
      </motion.button>
      <AudioToggle />
    </main>
  );
}
