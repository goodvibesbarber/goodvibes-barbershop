
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import About from './components/About.tsx';
import Barbers from './components/Barbers.tsx';
import BookingModal from './components/BookingModal.tsx';
import InstagramFeed from './components/InstagramFeed.tsx';
import Location from './components/Location.tsx';
import Footer from './components/Footer.tsx';
import GroomingAssistant from './components/GroomingAssistant.tsx';
import { Service } from './types.ts';

const Testimonials = () => (
  <section className="py-24 bg-[#FAFAF9] border-y border-gray-100">
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <svg className="w-12 h-12 text-[#B8860B] opacity-20 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L20.017 3C21.1216 3 22.017 3.89543 22.017 5V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3L9.017 3C10.1216 3 11.017 3.89543 11.017 5V15C11.017 18.3137 8.33071 21 5.017 21H3.017Z" />
        </svg>
        <p className="font-serif text-3xl md:text-4xl text-[#18181B] italic leading-snug mb-8">
          "The best fade in Singapore. The atmosphere is calm, industrial-chic, and truly stress-free. Marcus is a master of his craft."
        </p>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div className="text-left">
            <p className="font-bold text-sm tracking-widest uppercase">David Chen</p>
            <p className="text-[10px] text-[#B8860B] font-bold">LOYAL CUSTOMER SINCE 2024</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenBooking = (service?: Service) => {
    if (service) setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen selection:bg-[#B8860B] selection:text-white">
      <Navbar onBookClick={() => handleOpenBooking()} />
      
      <main>
        <Hero onBookClick={() => handleOpenBooking()} />
        <About />
        <Services onBookClick={handleOpenBooking} />
        <Testimonials />
        <Barbers />
        <GroomingAssistant />
        <InstagramFeed />
        <Location />
      </main>

      <Footer />

      {isBookingOpen && (
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={handleCloseBooking} 
          initialService={selectedService} 
        />
      )}
    </div>
  );
};

export default App;
