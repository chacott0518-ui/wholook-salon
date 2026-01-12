import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroOverlay from './components/IntroOverlay';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import { Heritage, Artists, Styles, Signature, Booking, Reviews } from './components/Sections';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll when loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  const handleAnimationComplete = () => {
    setLoading(false);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-wholook-yellow selection:text-wholook-dark">
      <AnimatePresence>
        {loading && <IntroOverlay onAnimationComplete={handleAnimationComplete} />}
      </AnimatePresence>

      {/* Main Content - Always rendered but revealed by overlay slide-up */}
      <main className="relative">
        <Navigation />
        <Hero />
        
        <Heritage />
        
        <Artists />
        
        <Styles />
        
        <Reviews />

        <Signature />
        <Booking />
        <Footer />
      </main>
    </div>
  );
};

export default App;