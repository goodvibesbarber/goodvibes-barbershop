
import React from 'react';
import { BARBERS } from '../constants';

const Barbers: React.FC = () => {
  return (
    <section id="barbers" className="py-24 bg-[#FAFAF9]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#B8860B] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Meet the Tribe</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#18181B] mb-4">Our Master Barbers</h2>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto"></div>
          <p className="mt-6 text-gray-500 max-w-xl mx-auto italic">
            "More than just experts with clippers, our barbers are curators of confidence."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {BARBERS.map((barber) => (
            <div key={barber.id} className="group relative">
              <div className="relative overflow-hidden aspect-[4/5] rounded-sm bg-gray-200">
                <img 
                  src={barber.imageUrl} 
                  alt={barber.name} 
                  className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Social Floating Label */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  {barber.instagram}
                </div>
              </div>

              <div className="mt-8 text-center md:text-left">
                <h3 className="font-serif text-2xl font-bold text-[#18181B] mb-1">{barber.name}</h3>
                <span className="text-[#B8860B] text-xs font-bold uppercase tracking-widest block mb-4">{barber.specialty}</span>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-900 transition-colors">
                  {barber.bio}
                </p>
                <div className="w-8 h-[2px] bg-gray-200 group-hover:w-full group-hover:bg-[#B8860B] transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers;
