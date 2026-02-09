
import React from 'react';
import { SHOP_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#18181B] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex flex-col mb-8">
              <span className="font-serif text-3xl font-bold leading-none">GOOD VIBES</span>
              <span className="text-xs tracking-[0.2em] font-medium text-[#B8860B]">BARBER SHOP</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Premium grooming at Yung An Road, Singapore. We specialize in precision fades and a relaxing atmosphere. Experience the vibe.
            </p>
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'TikTok'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#B8860B] hover:border-[#B8860B] transition-all"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-[#B8860B]">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Booking Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-[#B8860B]">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>BLK 360 YUNG AN ROAD #04-101</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{SHOP_INFO.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <p>© 2024 GOOD VIBES BARBER SHOP. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
