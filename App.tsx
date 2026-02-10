
     import React, { useState } from 'react';
// ... your other imports ...
import { sendNotification } from './notifier.ts'; // <--- ADD THIS

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // ... your existing handleOpen/Close functions ...

  // ADD THIS NEW FUNCTION
  const handleFinalBooking = async (data: any) => {
    const success = await sendNotification(data);
    if (success) {
      alert("Booking notification sent to the owner!");
    }
    handleCloseBooking();
  };

  return (
    <div className="min-h-screen selection:bg-[#D4AF37] selection:text-black">
      {/* ... your existing Navbar and Main components ... */}

      {isBookingOpen && (
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={handleCloseBooking} 
          initialService={selectedService} 
          // PASS THE NOTIFICATION FUNCTION HERE
          onConfirm={handleFinalBooking} 
        />
      )}
    </div>
  );
};
