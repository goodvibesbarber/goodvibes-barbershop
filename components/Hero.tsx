
import React from 'react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000" 
          alt="Barber Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#18181B]/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-[#B8860B] font-bold tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-in-up">
          ESTABLISHED 2024
        </h2>
        <h1 className="font-serif text-5xl md:text-8xl text-white mb-6 leading-tight animate-fade-in-up delay-100">
          Zero Stress. <br /> <span className="italic text-[#B8860B]">Perfect Fades.</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light animate-fade-in-up delay-200">
          More than a haircut, it’s a vibe. Experience Singapore's premium grooming destination at Yung An Road.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 animate-fade-in-up delay-300">
          <button 
            onClick={onBookClick}
            className="bg-[#B8860B] text-white px-10 py-4 rounded-sm text-lg font-bold hover:bg-[#9A6E09] transition-all w-full md:w-auto shadow-2xl"
          >
            BOOK AN APPOINTMENT
          </button>
          <a 
            href="#services"
            className="text-white border border-white/30 px-10 py-4 rounded-sm text-lg font-medium hover:bg-white/10 transition-all w-full md:w-auto backdrop-blur-sm"
          >
            VIEW SERVICES
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
