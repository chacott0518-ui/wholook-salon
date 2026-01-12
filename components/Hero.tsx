import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  // The image moves slightly slower than scroll to create depth
  const yBg = useTransform(scrollY, [0, 1000], [0, 150]); 
  const scaleBg = useTransform(scrollY, [0, 1000], [1, 1.1]);
  
  // Text fade out on scroll
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const yText = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image Container */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ y: yBg, scale: scaleBg }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay for text readability */}
        {/* Restored: The specific moody salon interior image fitting the aesthetic */}
        <img 
          src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2070&auto=format&fit=crop" 
          alt="WhoLook Salon Interior"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div style={{ opacity: opacityText, y: yText }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3, ease: "easeOut" }} // Delay matches the intro overlay
          >
            <span className="block text-wholook-yellow text-sm md:text-base tracking-[0.3em] mb-4 font-medium uppercase">
              Private Hair Design
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-6 font-serif">
              WhoLook
            </h1>
            <p className="text-white/95 max-w-xl mx-auto text-lg leading-relaxed font-normal">
              본연의 나를 마주하는 시간. <br className="hidden md:block"/>
              당신의 고유한 분위기를 찾아드립니다.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
          style={{ opacity: opacityText }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
          <span className="text-[10px] uppercase tracking-widest mt-2 block font-medium">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;