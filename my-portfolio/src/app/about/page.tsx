'use client';

import { motion } from 'framer-motion';
import AudioToggle from '@/components/animations/AudioToggle';
import PageNavigator from '@/components/navigations/PageNavigator';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function AboutPage() {
  return (
    <div className="relative">
      <main className="min-h-screen bg-black text-white">
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center z-10"
          >
            <motion.h1
              {...fadeInUp}
              className="text-6xl font-bold mb-4"
            >
              About Me
            </motion.h1>
            <motion.p
              {...fadeInUp}
              className="text-xl text-gray-300"
            >
              Learn more about my background and journey
            </motion.p>
          </motion.div>
        </section>
      </main>
      
      <PageNavigator />
      <AudioToggle />
    </div>
  );
}
