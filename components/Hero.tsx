
import React from 'react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with cinematic zoom */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000" 
          alt="Barber Background" 
          className="w-full h-full object-cover scale-105 animate-[slowZoom_30s_linear_infinite]"
        />
        <style>{`
          @keyframes slowZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.15); }
          }
        `}</style>
        <div className="absolute inset-0 bg-[#18181B]/75 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-block mb-10 opacity-0 animate-fade-in-up">
           <span className="text-[#B8860B] font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase bg-[#B8860B]/10 px-4 py-2 rounded-full border border-[#B8860B]/20">
            SINGAPORE • EST. 2024
          </span>
        </div>
        
        <h1 className="font-serif text-6xl md:text-9xl text-white mb-8 leading-[0.85] opacity-0 animate-fade-in-up delay-100 font-bold">
          Zero Stress.<br /> 
          <span className="italic text-[#B8860B]">Perfect Fades.</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in-up delay-200">
          More than a haircut, it’s a vibe. Experience precision grooming in a premium, modern-industrial setting.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 opacity-0 animate-fade-in-up delay-300">
          <button 
            onClick={onBookClick}
            className="group relative bg-[#B8860B] text-white px-12 py-5 rounded-sm text-sm font-bold tracking-[0.2em] overflow-hidden transition-all hover:bg-[#9A6E09] w-full sm:w-auto shadow-2xl active:scale-95"
          >
            <span className="relative z-10">BOOK APPOINTMENT</span>
            <div className="absolute top-0 -left-full w-full h-full bg-white/10 group-hover:left-0 transition-all duration-300"></div>
          </button>
          
          <a 
            href="#services"
            className="text-white border border-white/20 px-12 py-5 rounded-sm text-sm font-bold tracking-[0.2em] hover:bg-white hover:text-[#18181B] transition-all w-full sm:w-auto backdrop-blur-md"
          >
            VIEW THE MENU
          </a>
        </div>
      </div>

      {/* Floating Status Indicator */}
      <div className="absolute bottom-12 left-12 hidden lg:flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-white text-[10px] font-bold tracking-widest uppercase opacity-80">Now Accepting Walk-ins</span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-12 hidden lg:block animate-bounce">
         <div className="w-[1px] h-20 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
