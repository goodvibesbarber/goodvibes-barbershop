import React, { useState } from 'react';
// This line links App.tsx to your notifier file
import { sendNotification } from './notifier';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // This function runs when someone clicks "Confirm Booking"
  const handleFinalBooking = async (data: any) => {
    const success = await sendNotification(data);
    if (success) {
      alert("Booking sent successfully!");
      setIsBookingOpen(false);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Your website content goes here */}
      <button 
        onClick={() => setIsBookingOpen(true)}
        className="bg-yellow-500 text-black px-6 py-2 rounded"
      >
        Book Now
      </button>

      {/* This is a simple example of your booking logic */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white text-black p-8 rounded">
            <h2>Complete your Booking</h2>
            <button onClick={() => handleFinalBooking({ name: 'Guest', service: 'Haircut', date: 'Today' })}>
              Confirm
            </button>
            <button onClick={() => setIsBookingOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
