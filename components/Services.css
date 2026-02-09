
import React from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface ServicesProps {
  onBookClick: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onBookClick }) => {
  const categories = ['hair', 'beard', 'package', 'wax'];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#B8860B] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Menu</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#18181B] mb-4">Grooming & Services</h2>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* Main Services */}
          <div>
             <h3 className="text-xl font-serif font-bold mb-8 border-b border-gray-100 pb-2">Hair & Beard</h3>
             <div className="space-y-8">
               {SERVICES.filter(s => s.category === 'hair' || s.category === 'beard').map(service => (
                 <div key={service.id} className="group flex justify-between items-start cursor-pointer" onClick={() => onBookClick(service)}>
                   <div className="flex-1 pr-4">
                     <div className="flex items-center space-x-2">
                       <h4 className="text-lg font-bold text-[#18181B] group-hover:text-[#B8860B] transition-colors">{service.name}</h4>
                       <span className="text-[10px] text-gray-400 font-medium px-2 py-0.5 border border-gray-100 rounded-full">{service.duration}</span>
                     </div>
                     <p className="text-gray-500 text-sm mt-1">{service.description}</p>
                   </div>
                   <div className="text-right">
                     <span className="text-xl font-serif font-bold text-[#18181B]">${service.price}</span>
                     <button className="block text-[10px] font-bold text-[#B8860B] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">BOOK NOW</button>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Experiences & Waxing */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-8 border-b border-gray-100 pb-2">The Experiences</h3>
            <div className="space-y-8 mb-12">
               {SERVICES.filter(s => s.category === 'package').map(service => (
                 <div key={service.id} className="group p-6 border-2 border-[#18181B]/5 hover:border-[#B8860B]/30 rounded-sm transition-all bg-[#FAFAF9]" onClick={() => onBookClick(service)}>
                   <div className="flex justify-between items-center mb-2">
                     <h4 className="text-xl font-bold text-[#18181B]">{service.name}</h4>
                     <span className="text-2xl font-serif font-bold text-[#B8860B]">${service.price}</span>
                   </div>
                   <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                   <div className="flex justify-between items-center">
                     <span className="text-xs text-gray-400 font-medium italic">{service.duration}</span>
                     <span className="text-sm font-bold text-[#18181B] group-hover:translate-x-1 transition-transform">Book Experience →</span>
                   </div>
                 </div>
               ))}
            </div>

            <h3 className="text-xl font-serif font-bold mb-8 border-b border-gray-100 pb-2">Grooming Details</h3>
            <div className="grid grid-cols-2 gap-6">
               {SERVICES.filter(s => s.category === 'wax').map(service => (
                 <div key={service.id} className="flex justify-between items-center p-4 bg-[#FAFAF9] rounded-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => onBookClick(service)}>
                   <span className="font-bold text-[#18181B]">{service.name}</span>
                   <span className="font-serif font-bold text-[#B8860B]">${service.price}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
