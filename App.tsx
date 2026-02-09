
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import BookingModal from './components/BookingModal';
import InstagramFeed from './components/InstagramFeed';
import Location from './components/Location';
import Footer from './components/Footer';
import GroomingAssistant from './components/GroomingAssistant';
import { Service } from './types';

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
