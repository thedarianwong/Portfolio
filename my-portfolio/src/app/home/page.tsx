'use client';

import { motion } from 'framer-motion';
import AudioToggle from '@/components/animations/AudioToggle';
import PageNavigator from '@/components/navigations/PageNavigator';
import SocialLinks from '@/components/ui/SocialLinks';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function HomePage() {
  return (
    <div className="relative">
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
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
              Welcome to My Portfolio
            </motion.h1>
            <motion.p
              {...fadeInUp}
              className="text-xl text-gray-300 mb-8"
            >
              Full Stack Developer & Creative Technologist
            </motion.p>
            
            {/* Social Media Links */}
            <SocialLinks />
          </motion.div>
        </section>
      </main>
      
      {/* Navigation */}
      <PageNavigator />
      
      {/* Audio Toggle */}
      <AudioToggle />
    </div>
  );
} 