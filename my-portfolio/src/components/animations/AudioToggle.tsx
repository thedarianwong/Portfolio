'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

const AudioToggle = () => {
  const [isMuted, setIsMuted] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('audioMuted');
      return stored ? JSON.parse(stored) : true;
    }
    return true;
  });
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasShownInitialTooltip, setHasShownInitialTooltip] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('hasShownAudioTooltip') === 'true';
    }
    return false;
  });

  useEffect(() => {
    // Check for existing global audio element first
    let audioElement = document.querySelector<HTMLAudioElement>('#global-background-music');
    
    if (!audioElement) {
      // Create new audio element only if it doesn't exist
      audioElement = new Audio('/durara-ost.mp3');
      audioElement.id = 'global-background-music';
      audioElement.loop = true;
      audioElement.volume = 0.7; // Set a comfortable volume
      
      // Attach to document so it persists across route changes
      document.body.appendChild(audioElement);
      
      // Add event listeners for audio state changes
      audioElement.addEventListener('play', () => {
        localStorage.setItem('audioMuted', 'false');
      });
      
      audioElement.addEventListener('pause', () => {
        localStorage.setItem('audioMuted', 'true');
      });
    }

    setAudio(audioElement);

    // Sync UI state with actual audio state
    if (audioElement.paused) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }

    // Show tooltip logic
    if (isMuted && !hasShownInitialTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
        setHasShownInitialTooltip(true);
        localStorage.setItem('hasShownAudioTooltip', 'true');
        setTimeout(() => setShowTooltip(false), 4000);
      }, 2000);
      
      return () => clearTimeout(timer);
    }

    // No cleanup that would interfere with audio playback
    return () => {
      // Don't remove event listeners or pause audio
      // Let it persist across route changes
    };
  }, [hasShownInitialTooltip]);

  // Update audio state when isMuted changes (user interaction)
  useEffect(() => {
    if (audio) {
      if (isMuted) {
        audio.pause();
      } else {
        audio.play().catch((error) => {
          console.log('Audio play failed:', error);
          setIsMuted(true);
        });
      }
    }
  }, [isMuted, audio]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip Bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute bottom-16 right-0 mb-2 w-64"
          >
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-[1px] rounded-lg">
              <div className="bg-black/90 backdrop-blur-sm rounded-lg p-3 relative">
                <p className="text-white text-sm leading-relaxed">
                  🎵 Play music while you browse through my portfolio for an awesome experience! 🎵
                </p>
                <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-black/90 rotate-45"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio Toggle Button */}
      <motion.button
        onClick={toggleMute}
        onHoverStart={() => isMuted && setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMuted ? <HiVolumeOff size={24} /> : <HiVolumeUp size={24} />}
        
        {/* Small pulsing indicator when muted */}
        {isMuted && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>
    </div>
  );
};

export default AudioToggle;
