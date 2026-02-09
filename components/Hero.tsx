
import React from 'react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row bg-[#0D0D0D] overflow-hidden">
      {/* Left: Massive Typography Section */}
      <div className="w-full lg:w-[60%] px-8 lg:px-24 pt-40 pb-20 lg:py-0 flex flex-col justify-center relative z-10">
        <div className="mb-8 overflow-hidden">
          <span className="block text-[#D4AF37] font-bold tracking-[1em] text-[10px] uppercase opacity-60">
            PREMIUM GROOMING STUDIO • EST. 2024
          </span>
        </div>
        
        <h1 className="font-serif text-[18vw] lg:text-[14rem] leading-[0.75] font-bold tracking-tighter mb-12">
          GOOD <br />
          <span className="italic text-[#D4AF37] font-normal">VIBES</span> <br />
          <span className="text-[12vw] lg:text-[9rem]">STUDIO.</span>
        </h1>
        
        <div className="max-w-md ml-1 lg:ml-4">
          <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed mb-16 italic border-l border-[#D4AF37]/30 pl-8">
            Zero stress. Perfect fades. <br />
            More than a haircut, it is an elevated discipline of the self.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-8 sm:space-y-0 sm:space-x-12">
            <button 
              onClick={onBookClick}
              className="group relative bg-[#D4AF37] text-black px-16 py-6 text-[11px] font-bold tracking-[0.4em] overflow-hidden transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(212,175,55,0.1)]"
            >
              BOOK SESSION
            </button>
            <a href="#services" className="text-[10px] font-bold tracking-[0.5em] text-white/40 hover:text-[#D4AF37] transition-all border-b border-white/5 hover:border-[#D4AF37] pb-1 uppercase">
              The Menu
            </a>
          </div>
        </div>

        {/* Floating Abstract Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10 rotate-[-15deg]"></div>
      </div>

      {/* Right: Cinematic Imagery Section */}
      <div className="w-full lg:w-[40%] h-[60vh] lg:h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 hidden lg:block"></div>
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000" 
          alt="Barber Craft" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100 brightness-[0.6] hover:brightness-100"
        />
        
        {/* Boutique Coordinate Label */}
        <div className="absolute bottom-12 right-12 text-right z-20">
          <div className="w-12 h-[1px] bg-[#D4AF37] ml-auto mb-4"></div>
          <p className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-1">SINGAPORE STUDIO</p>
          <p className="text-white/20 text-[9px] font-mono tracking-tighter">1.3340° N, 103.7175° E • YUNG AN RD</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
