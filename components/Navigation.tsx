import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'HERITAGE', href: '#heritage' },
    { name: 'ARTISTS', href: '#artists' },
    { name: 'STYLE', href: '#style' },
    { name: 'REVIEW', href: '#review' },
    { name: 'SIGNATURE', href: '#signature' },
    { name: 'BOOKING', href: '#booking' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-5 flex justify-between items-center ${
          // Remove background if menu is open, otherwise apply scroll styles
          isMobileMenuOpen 
            ? 'bg-transparent' 
            : (isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100/50' : 'bg-transparent')
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2.2, duration: 0.8, ease: "circOut" }}
      >
        <div className={`text-2xl font-bold tracking-tighter cursor-pointer z-50 transition-colors duration-300 ${
          // Ensure logo is white when menu is open (on dark background)
          isMobileMenuOpen ? 'text-white' : (isScrolled ? 'text-wholook-dark' : 'text-white')
        }`}>
          <a href="#" onClick={(e) => scrollToSection(e, '#root')}>WhoLook</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm tracking-widest font-medium hover:opacity-50 transition-all duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 transition-colors duration-300 ${
              isMobileMenuOpen ? 'text-white' : (isScrolled ? 'text-wholook-dark' : 'text-white')
            }`}
          >
            {isMobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-wholook-dark text-white flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col space-y-10 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-3xl font-light tracking-[0.2em] hover:text-wholook-yellow transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Optional: Additional Info in Menu */}
            <div className="absolute bottom-12 text-xs text-white/40 tracking-widest">
              EST. 2024 WHOLOOK SALON
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;