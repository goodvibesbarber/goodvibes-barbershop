import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import About from './components/About.tsx';
import BookingModal from './components/BookingModal.tsx';
import Location from './components/Location.tsx';
import Footer from './components/Footer.tsx';
import GroomingAssistant from './components/GroomingAssistant.tsx';
import { Service } from './types.ts';
// This line links your design to the email sender
import { sendNotification } from './notifier.ts';

const EditorialMarquee = () => (
  <div className="bg-[#D4AF37] py-8 overflow-hidden whitespace-nowrap border-y border-black/10">
    <div className="animate-marquee inline-block">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="text-black font-serif text-5xl font-bold uppercase italic mx-12 select-none tracking-tighter">
          Zero Stress • Perfect Fades • Elite Grooming • Singapore Studio • Zero Stress • Perfect Fades •
        </span>
      ))}
    </div>
  </div>
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

  // NEW FUNCTION: This sends the email when the user confirms their booking
  const handleFinalBooking = async (data: any) => {
    const success = await sendNotification(data);
    if (success) {
      alert("Booking notification sent to the owner!");
    } else {
      alert("Booking recorded, but email notification failed. Please check connection.");
    }
    handleCloseBooking();
  };

  return (
    <div className="min-h-screen selection:bg-[#D4AF37] selection:text-black">
      <Navbar onBookClick={() => handleOpenBooking()} />
      
      <main>
        <Hero onBookClick={() => handleOpenBooking()} />
        <About />
        <EditorialMarquee />
        <Services onBookClick={handleOpenBooking} />
        <GroomingAssistant />
        <Location />
      </main>

      <Footer />

      {isBookingOpen && (
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={handleCloseBooking} 
          initialService={selectedService} 
          // This tells the Modal to run our email function on confirm
          onConfirm={handleFinalBooking}
        />
      )}
    </div>
  );
};

export default App;
