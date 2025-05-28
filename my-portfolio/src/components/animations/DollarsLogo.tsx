'use client';

import { motion } from 'framer-motion';

const DollarsLogo = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2, duration: 1 }}
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <img
      src="/darian-logo.svg"
      alt="DARIAN logo"
      style={{ 
        display: 'block',
        width: '80%',      
        height: 'auto',    
      }}
    />
  </motion.div>
);

export default DollarsLogo; 