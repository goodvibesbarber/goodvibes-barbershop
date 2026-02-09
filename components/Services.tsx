
import React from 'react';
import { SERVICES } from '../constants.tsx';
import { Service } from '../types.ts';

interface ServicesProps {
  onBookClick: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onBookClick }) => {
  return (
    <section id="services" className="py-48 bg-[#0D0D0D] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-32 border-b border-white/5 pb-16">
          <div className="max-w-2xl">
            <span className="text-[#D4AF37] font-bold tracking-[0.8em] text-[10px] uppercase mb-8 block">The Catalog</span>
            <h2 className="font-serif text-7xl md:text-9xl leading-none font-bold italic tracking-tighter">The Menu.</h2>
          </div>
          <div className="mt-8 lg:mt-0 lg:text-right">
             <p className="text-gray-500 text-lg max-w-sm font-light italic leading-relaxed">
               All sessions include an in-depth aesthetic consultation and signature hot towel finish.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-24">
          {SERVICES.filter(s => s.category !== 'package').map((service) => (
            <div 
              key={service.id} 
              onClick={() => onBookClick(service)}
              className="group cursor-pointer relative"
            >
              <div className="mb-8 flex justify-between items-end border-b border-white/10 pb-6 transition-colors group-hover:border-[#D4AF37]">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    Selected Category: {service.category}
                  </span>
                  <h4 className="text-3xl font-bold uppercase tracking-tighter transition-all group-hover:translate-x-2">{service.name}</h4>
                </div>
                <span className="font-serif text-4xl text-[#D4AF37] group-hover:scale-110 transition-transform">${service.price}</span>
              </div>
              
              <div className="flex justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em] mb-8">
                <span>DURATION: {service.duration}</span>
                <span className="text-[#D4AF37] group-hover:underline cursor-pointer">BOOK NOW</span>
              </div>

              <p className="text-gray-500 text-sm font-light leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                {service.description || "A standard-defining session tailored to your individual profile."}
              </p>
            </div>
          ))}
        </div>

        {/* Signature Packages: Fashion Spread Style */}
        <div className="mt-48 grid lg:grid-cols-2 gap-12">
          {SERVICES.filter(s => s.category === 'package').map((pkg) => (
            <div 
              key={pkg.id}
              onClick={() => onBookClick(pkg)}
              className="group relative p-16 bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-700 cursor-pointer overflow-hidden"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                   <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.6em] uppercase">Signature Experience</span>
                   <span className="font-serif text-5xl text-[#D4AF37] group-hover:italic transition-all">${pkg.price}</span>
                </div>
                
                <h3 className="font-serif text-5xl md:text-7xl mb-8 leading-none tracking-tighter group-hover:text-[#D4AF37] transition-colors">{pkg.name}</h3>
                <p className="text-gray-400 font-light text-xl mb-12 max-w-md leading-relaxed italic">{pkg.description}</p>
                
                <div className="mt-auto pt-12 border-t border-white/10 flex justify-between items-center">
                  <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">Duration: {pkg.duration}</span>
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
                  </div>
                </div>
              </div>
              
              {/* Massive background text */}
              <div className="absolute -bottom-10 -right-10 text-[12rem] font-bold text-white/5 select-none pointer-events-none group-hover:text-[#D4AF37]/5 transition-colors">
                {pkg.name.split(' ')[0].toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
