
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-48 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative z-10 aspect-[3/4] overflow-hidden grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000">
               <img 
                src="https://images.unsplash.com/photo-1599351431247-f10b21ce536a?auto=format&fit=crop&q=80&w=1200" 
                alt="Studio Interior" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
               />
            </div>
            {/* Design Arena Decorative Grid */}
            <div className="absolute -top-12 -left-12 w-64 h-64 border-l border-t border-[#D4AF37]/20 -z-10 pointer-events-none"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 border-r border-b border-[#D4AF37]/20 -z-10 pointer-events-none"></div>
          </div>

          <div className="lg:col-span-7 lg:pl-24 order-1 lg:order-2 space-y-16">
            <div className="space-y-6">
              <span className="text-[#D4AF37] font-bold tracking-[0.6em] text-[10px] uppercase block">The Philosophy</span>
              <h2 className="font-serif text-6xl md:text-8xl leading-[0.9] font-bold tracking-tighter">
                Crafting <br /> 
                <span className="italic font-normal text-[#D4AF37]">Identity.</span>
              </h2>
            </div>
            
            <div className="space-y-10 text-gray-400 text-xl font-light leading-relaxed max-w-xl">
              <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-[#D4AF37] first-letter:mr-3 first-letter:float-left">
                Located in the heart of Yung An Road, <span className="text-white font-medium">Good Vibes Barber Shop</span> is a deliberate departure from the noise of the city. We operate with a "Zero Stress" mandate, treating every fade as a piece of architectural sculpture.
              </p>
              <p className="italic">
                "Whether you're a student or a professional, we ensure you leave looking sharp and feeling recalibrated. Your best look starts with the right environment."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
              <div>
                <p className="text-[#D4AF37] font-serif text-5xl italic mb-3">100%</p>
                <p className="text-[11px] text-gray-500 uppercase tracking-[0.4em] font-bold">Consistency Rate</p>
              </div>
              <div>
                <p className="text-[#D4AF37] font-serif text-5xl italic mb-3">0</p>
                <p className="text-[11px] text-gray-500 uppercase tracking-[0.4em] font-bold">Compromise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical text */}
      <div className="absolute right-12 top-1/2 -rotate-90 origin-right hidden lg:block">
        <span className="text-white/5 text-[10rem] font-bold uppercase tracking-tighter select-none">ARCHITECTURE</span>
      </div>
    </section>
  );
};

export default About;
