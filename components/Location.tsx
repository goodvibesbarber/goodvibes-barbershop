
import React from 'react';
import { SHOP_INFO } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#FAFAF9]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="order-2 lg:order-1">
             <div className="h-[450px] w-full rounded-sm overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
               <iframe 
                title="Google Maps"
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=BLK%20360%20YUNG%20AN%20ROAD%20%2304-101,%20SINGAPORE%20610360+(Good%20Vibes%20Barber%20Shop)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
               ></iframe>
             </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <span className="text-[#B8860B] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Find Us</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#18181B] mb-10">Where Perfection <br /> Meets Peace.</h2>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="bg-[#18181B] p-3 rounded-sm text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#18181B] text-lg mb-1">Location</h4>
                  <p className="text-gray-600 leading-relaxed uppercase">{SHOP_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-[#18181B] p-3 rounded-sm text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#18181B] text-lg mb-1">Hours</h4>
                  <p className="text-gray-600 leading-relaxed">{SHOP_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-[#18181B] p-3 rounded-sm text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#18181B] text-lg mb-1">Contact</h4>
                  <p className="text-gray-600 leading-relaxed">{SHOP_INFO.phone}</p>
                  <p className="text-[#B8860B] font-medium">{SHOP_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
