
import React from 'react';
import { BARBERS } from '../constants';

const Barbers: React.FC = () => {
  return (
    <section id="barbers" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#B8860B] font-bold tracking-[0.5em] text-[10px] uppercase mb-4 block">The Artisans</span>
          <h2 className="font-serif text-5xl text-[#18181B] mb-8">Crafting Your Identity.</h2>
          <div className="w-16 h-[2px] bg-[#B8860B]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {BARBERS.map((barber) => (
            <div key={barber.id} className="group relative">
              <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
                <img 
                  src={barber.imageUrl} 
                  alt={barber.name} 
                  className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Minimalist IG Label */}
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                  <p className="text-[10px] text-[#B8860B] font-bold tracking-[0.3em] uppercase mb-1">Portfolio</p>
                  <p className="text-white text-xs font-medium tracking-widest">{barber.instagram}</p>
                </div>
              </div>

              <div className="mt-10">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-serif text-3xl font-bold text-[#18181B]">{barber.name.split(' ')[0]}</h3>
                  <span className="text-[#B8860B] text-[9px] font-bold uppercase tracking-[0.4em]">Expert</span>
                </div>
                <p className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{barber.specialty}</p>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">
                  {barber.bio}
                </p>
                <div className="h-[1px] bg-gray-100 w-full relative">
                  <div className="absolute top-0 left-0 h-full w-0 group-hover:w-full bg-[#B8860B] transition-all duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers;
