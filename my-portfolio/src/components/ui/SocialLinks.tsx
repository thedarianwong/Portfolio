'use client';

import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaEnvelope 
} from 'react-icons/fa';

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: FaGithub, 
    url: 'https://github.com/thedarianwong',
    color: 'hover:text-gray-400'
  },
  { 
    name: 'LinkedIn', 
    icon: FaLinkedin, 
    url: 'https://linkedin.com/in/thedarianwong',
    color: 'hover:text-blue-400'
  },
  { 
    name: 'Gmail', 
    icon: FaEnvelope, 
    url: 'mailto:thedarianwong@gmail.com',
    color: 'hover:text-pink-400'
  },
  { 
    name: 'Facebook', 
    icon: FaFacebook, 
    url: 'https://facebook.com/darianwtr',
    color: 'hover:text-blue-300'
  },
];

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex space-x-6 justify-center mt-8"
    >
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white ${social.color} transition-colors duration-300`}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Icon size={32} />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;
