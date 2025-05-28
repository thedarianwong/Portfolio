'use client';

import { motion } from 'framer-motion';
import AudioToggle from '@/components/animations/AudioToggle';

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
              className="text-xl text-gray-300"
            >
              Full Stack Developer & Creative Technologist
            </motion.p>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-gray-300">
              [Your introduction here]
            </p>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project cards will go here */}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Skill items will go here */}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Contact</h2>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Contact form and info will go here */}
            </div>
          </motion.div>
        </section>
      </main>
      <AudioToggle />
    </div>
  );
} 