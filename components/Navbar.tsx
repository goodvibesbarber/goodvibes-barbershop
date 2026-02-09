
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onBookClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`font-serif text-2xl font-bold leading-none ${isScrolled ? 'text-[#18181B]' : 'text-white'}`}>
            GOOD VIBES
          </span>
          <span className={`text-[10px] tracking-[0.2em] font-medium ${isScrolled ? 'text-[#B8860B]' : 'text-gray-300'}`}>
            BARBER SHOP
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className={`text-sm font-medium hover:text-[#B8860B] transition-colors ${isScrolled ? 'text-[#18181B]' : 'text-white'}`}>ABOUT</a>
          <a href="#services" className={`text-sm font-medium hover:text-[#B8860B] transition-colors ${isScrolled ? 'text-[#18181B]' : 'text-white'}`}>SERVICES</a>
          <a href="#location" className={`text-sm font-medium hover:text-[#B8860B] transition-colors ${isScrolled ? 'text-[#18181B]' : 'text-white'}`}>LOCATION</a>
          <button 
            onClick={onBookClick}
            className="bg-[#B8860B] text-white px-6 py-2 rounded-sm text-sm font-bold hover:bg-[#9A6E09] transition-all transform active:scale-95 shadow-lg"
          >
            BOOK NOW
          </button>
        </div>

        <div className="md:hidden">
           <button 
            onClick={onBookClick}
            className="bg-[#B8860B] text-white px-4 py-2 rounded-sm text-xs font-bold shadow-lg"
          >
            BOOK
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
