
import React from 'react';
import { SHOP_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-48 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Massive Background Logo */}
        <div className="absolute top-0 left-0 w-full flex justify-center opacity-[0.02] pointer-events-none select-none -translate-y-1/2">
          <span className="font-serif text-[40vw] font-bold uppercase tracking-tighter leading-none">VIBES</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-24 mb-32 relative z-10">
          <div className="lg:col-span-6">
            <h4 className="font-serif text-5xl md:text-8xl font-bold italic tracking-tighter mb-12">Stay Sharp.</h4>
            <p className="text-gray-400 text-xl font-light max-w-md mb-16 italic leading-relaxed">
              "Every man deserves a sanctuary. A place where precision meets peace, and style is treated as a discipline of character."
            </p>
            <div className="flex space-x-12 items-center">
               <a href="#" className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] hover:text-white transition-colors">INSTAGRAM</a>
               <a href="#" className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] hover:text-white transition-colors">STUDIO DROP</a>
               <a href="#" className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] hover:text-white transition-colors">CONTACT</a>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end">
            <div className="bg-white/5 border border-white/5 p-12 lg:p-16">
              <h4 className="font-bold mb-8 uppercase tracking-[0.6em] text-[10px] text-[#D4AF37]">Join the Inner Circle</h4>
              <p className="text-gray-400 text-sm mb-12 font-light leading-relaxed">
                Receive exclusive editorial content, grooming disciplines, and prioritized session availability.
              </p>
              <form className="flex group border-b border-white/10 focus-within:border-[#D4AF37] transition-all pb-4">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-transparent text-[11px] font-bold tracking-[0.4em] w-full outline-none py-2 placeholder:text-gray-800"
                />
                <button className="text-[11px] font-bold text-[#D4AF37] tracking-[0.4em] hover:text-white transition-colors">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-600 uppercase tracking-[0.6em] font-bold">
          <p>© 2024 GOOD VIBES BARBER STUDIO • SINGAPORE ARCHIVES</p>
          <div className="flex space-x-12 mt-8 md:mt-0">
             <a href="#" className="hover:text-[#D4AF37] transition-colors">PRIVACY</a>
             <a href="#" className="hover:text-[#D4AF37] transition-colors">TERMS OF SERVICE</a>
             <a href="#" className="hover:text-[#D4AF37] transition-colors">ACCESSIBILITY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
