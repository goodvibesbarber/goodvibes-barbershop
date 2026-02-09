
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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        isScrolled ? 'bg-[#0D0D0D]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-10'
      }`}
    >
      <div className="container mx-auto px-8 lg:px-24 flex justify-between items-center">
        <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] transition-all">
            <span className="text-[10px] font-bold text-[#D4AF37] group-hover:text-black">GV</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold leading-none tracking-tighter group-hover:text-[#D4AF37] transition-colors uppercase">
              Good Vibes
            </span>
            <span className="text-[8px] tracking-[0.6em] font-bold text-[#D4AF37] mt-1 uppercase">
              Singapore
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-16">
          {['ABOUT', 'SERVICES', 'LOCATION'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] font-bold tracking-[0.5em] text-white/40 hover:text-[#D4AF37] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button 
            onClick={onBookClick}
            className="bg-white text-black px-12 py-4 text-[10px] font-bold tracking-[0.4em] hover:bg-[#D4AF37] hover:text-white transition-all uppercase"
          >
            RESERVE
          </button>
        </div>

        {/* Mobile Mini Button */}
        <div className="lg:hidden">
           <button 
            onClick={onBookClick}
            className="bg-[#D4AF37] text-black px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            BOOK
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
