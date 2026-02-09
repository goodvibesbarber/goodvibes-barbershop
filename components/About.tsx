
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FAFAF9]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#B8860B]/20 rounded-sm transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1599351431247-f10b21ce536a?auto=format&fit=crop&q=80&w=800" 
              alt="Inside Barber Shop" 
              className="relative z-10 w-full rounded-sm shadow-xl"
            />
          </div>
          
          <div>
            <span className="text-[#B8860B] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#18181B] mb-8 leading-tight">
              More Than Just <br /> A Haircut.
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Located at Yung An Road, <span className="font-bold text-[#18181B]">Good Vibes Barber Shop</span> is the go-to spot for premium grooming in Singapore. 
                We specialize in precision fades and a relaxing atmosphere that makes every visit an escape from the daily grind.
              </p>
              <p>
                Whether you're a student looking for a fresh look or you're ready for the full <span className="italic">"Good Vibes Experience,"</span> our goal is to make sure you leave looking sharp and feeling stress-free.
              </p>
              <p className="font-medium text-[#18181B]">
                Your best look starts here.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif text-[#B8860B] font-bold">100%</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Precision Focused</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-[#B8860B] font-bold">0</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Stress Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
