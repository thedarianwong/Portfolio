'use client';

import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  HiHome, 
  HiUser, 
  HiCode, 
  HiBriefcase, 
  HiCollection 
} from 'react-icons/hi';

const pages = [
  { id: 'about', name: 'About Me', icon: HiUser, path: '/about' },
  { id: 'skills', name: 'Skills', icon: HiCode, path: '/skills' },
  { id: 'home', name: 'Home', icon: HiHome, path: '/home' },
  { id: 'experience', name: 'Experience', icon: HiBriefcase, path: '/experience' },
  { id: 'projects', name: 'Projects', icon: HiCollection, path: '/projects' },
];

const PageNavigator = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-4 border border-white/20">
        <div className="flex items-center space-x-6">
          {pages.map((page, index) => {
            const Icon = page.icon;
            const isActive = pathname === page.path;
            const isCenter = index === 2; // Home is in the center
            
            return (
              <motion.button
                key={page.id}
                onClick={() => handleNavigation(page.path)}
                className={`relative p-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-white text-black' 
                    : 'hover:bg-white/20 text-white'
                } ${isCenter ? 'scale-110' : ''}`}
                whileHover={{ scale: isCenter ? 1.2 : 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={isCenter ? 28 : 24} />
                
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 
                           bg-black/80 text-white text-xs px-2 py-1 rounded 
                           whitespace-nowrap pointer-events-none"
                >
                  {page.name}
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default PageNavigator;
