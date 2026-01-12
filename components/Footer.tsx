import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light tracking-wider">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} WHOLOOK SALON. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/wholook_seongsu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">INSTAGRAM</a>
          <a href="#" className="hover:text-white transition-colors">YOUTUBE</a>
          <a href="#" className="hover:text-white transition-colors">BLOG</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;