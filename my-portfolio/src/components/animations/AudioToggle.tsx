'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

const AudioToggle = () => {
  const [isMuted, setIsMuted] = useState(() => {
    // Try to get stored state, default to true (muted) if not found
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('audioMuted');
      return stored ? JSON.parse(stored) : true;
    }
    return true;
  });
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Check if there's an existing audio element
    let audioElement = document.querySelector<HTMLAudioElement>('#background-music');
    
    if (!audioElement) {
      // Create new audio element if it doesn't exist
      audioElement = new Audio('/durara-ost.mp3');
      audioElement.id = 'background-music';
      audioElement.loop = true;
      document.body.appendChild(audioElement);
    }

    setAudio(audioElement);

    // Set initial state based on stored preference
    if (!isMuted) {
      audioElement.play().catch(() => {
        setIsMuted(true);
        localStorage.setItem('audioMuted', 'true');
      });
    }

    return () => {
      // Don't remove the audio element on cleanup, just pause if muted
      if (isMuted) {
        audioElement.pause();
      }
    };
  }, []);

  // Update localStorage when mute state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('audioMuted', JSON.stringify(isMuted));
    }
    
    if (audio) {
      if (isMuted) {
        audio.pause();
      } else {
        audio.play().catch(() => {
          setIsMuted(true);
          localStorage.setItem('audioMuted', 'true');
        });
      }
    }
  }, [isMuted, audio]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <motion.button
      onClick={toggleMute}
      className="fixed bottom-6 right-6 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isMuted ? <HiVolumeOff size={24} /> : <HiVolumeUp size={24} />}
    </motion.button>
  );
};

export default AudioToggle;
