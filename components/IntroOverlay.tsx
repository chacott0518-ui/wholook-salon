import React from 'react';
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';

interface IntroOverlayProps {
  onAnimationComplete: () => void;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onAnimationComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-wholook-yellow overflow-hidden"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ 
        duration: 1.2, 
        ease: [0.76, 0, 0.24, 1], // Custom bezier for premium feel
        delay: 2.5 
      }}
      onAnimationComplete={onAnimationComplete}
    >
      {/* Icon Sequence */}
      <motion.div
        className="relative flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="p-4 border-2 border-wholook-dark rounded-full">
            <Scissors size={48} className="text-wholook-dark" strokeWidth={1.5} />
          </div>
        </motion.div>

        <motion.h1
          className="mt-6 text-2xl font-bold tracking-[0.2em] text-wholook-dark uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          WhoLook
        </motion.h1>
      </motion.div>

      {/* Optional decorative elements for the loading screen */}
      <motion.div 
        className="absolute bottom-10 text-xs font-medium tracking-widest text-wholook-dark/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        PREMIUM HAIR SALON
      </motion.div>
    </motion.div>
  );
};

export default IntroOverlay;