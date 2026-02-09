
import React from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface ServicesProps {
  onBookClick: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onBookClick }) => {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Header Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <span className="text-[#B8860B] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">The Services</span>
            <h2 className="font-serif text-5xl md:text-6xl text-[#18181B] mb-8 leading-tight">Grooming & Wellness.</h2>
            <div className="w-16 h-[2px] bg-[#B8860B] mb-8"></div>
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-12">
              Every appointment includes a professional consultation and hot towel finish. 
              We don't just cut hair; we curate your look.
            </p>
            <button 
              onClick={() => onBookClick(SERVICES[0])}
              className="hidden lg:block border border-[#18181B] text-[#18181B] px-10 py-4 text-xs font-bold tracking-widest hover:bg-[#18181B] hover:text-white transition-all"
            >
              BOOK NOW
            </button>
          </div>

          {/* Menu Column */}
          <div className="lg:col-span-8 space-y-20">
            {/* Hair & Beard */}
            <div>
               <div className="flex items-center space-x-6 mb-12">
                 <h3 className="text-xl font-serif font-bold italic">Classic Services</h3>
                 <div className="flex-1 h-[1px] bg-gray-100"></div>
               </div>
               <div className="space-y-10">
                 {SERVICES.filter(s => s.category === 'hair' || s.category === 'beard').map(service => (
                   <div 
                    key={service.id} 
                    className="group cursor-pointer flex justify-between items-end pb-4 border-b border-gray-50 hover:border-[#B8860B]/30 transition-all"
                    onClick={() => onBookClick(service)}
                   >
                     <div className="flex-1 pr-8">
                       <h4 className="text-lg font-bold text-[#18181B] group-hover:text-[#B8860B] transition-colors uppercase tracking-tight">{service.name}</h4>
                       <p className="text-gray-400 text-xs font-light mt-1 italic">{service.description}</p>
                     </div>
                     <div className="text-right flex items-center space-x-6">
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{service.duration}</span>
                        <span className="text-xl font-serif font-bold text-[#18181B]">${service.price}</span>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* The Experiences */}
            <div>
               <div className="flex items-center space-x-6 mb-12">
                 <h3 className="text-xl font-serif font-bold italic">The Experiences</h3>
                 <div className="flex-1 h-[1px] bg-gray-100"></div>
               </div>
               <div className="grid md:grid-cols-2 gap-8">
                 {SERVICES.filter(s => s.category === 'package').map(service => (
                   <div 
                    key={service.id} 
                    className="group p-8 bg-[#FAFAF9] border border-gray-100 hover:border-[#B8860B] transition-all cursor-pointer relative"
                    onClick={() => onBookClick(service)}
                   >
                     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
                     </div>
                     <h4 className="text-xl font-bold mb-2 uppercase">{service.name}</h4>
                     <p className="text-gray-500 text-sm mb-6 leading-relaxed italic">{service.description}</p>
                     <div className="flex justify-between items-center border-t border-gray-200 pt-6">
                        <span className="text-lg font-serif font-bold text-[#B8860B]">${service.price}</span>
                        <span className="text-[10px] font-bold text-[#18181B] group-hover:tracking-[0.2em] transition-all">SELECT SESSION</span>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
