
import React, { useState, useEffect } from 'react';
import { SERVICES } from '../constants';
import { Service, BookingDetails } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService: Service | null;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<Partial<BookingDetails>>({
    serviceId: initialService?.id || '',
    date: new Date().toISOString().split('T')[0],
  });

  const timeSlots = [
    '11:00 AM', '11:45 AM', '12:30 PM', '1:15 PM', '2:00 PM', 
    '3:30 PM', '4:15 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Success step
    // Simulate API call
    console.log('Booking submitted:', booking);
  };

  const selectedService = SERVICES.find(s => s.id === booking.serviceId);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[#18181B]/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-[#FAFAF9] w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="bg-[#18181B] text-white p-6 flex justify-between items-center">
          <div>
            <h3 className="font-serif text-xl">Book Your Vibe</h3>
            <p className="text-xs text-gray-400">Step {step} of 3</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8">
          {step === 1 && (
            <div className="animate-fade-in">
              <h4 className="font-bold text-lg mb-6 text-[#18181B]">Choose a Service</h4>
              <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-2">
                {SERVICES.map(service => (
                  <label 
                    key={service.id} 
                    className={`flex items-center justify-between p-4 border rounded-sm cursor-pointer transition-all ${
                      booking.serviceId === service.id ? 'border-[#B8860B] bg-[#B8860B]/5' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input 
                        type="radio" 
                        name="service" 
                        value={service.id} 
                        checked={booking.serviceId === service.id}
                        onChange={() => setBooking({...booking, serviceId: service.id})}
                        className="accent-[#B8860B]"
                      />
                      <div>
                        <span className="font-bold block text-sm">{service.name}</span>
                        <span className="text-[10px] text-gray-500">{service.duration}</span>
                      </div>
                    </div>
                    <span className="font-serif font-bold">${service.price}</span>
                  </label>
                ))}
              </div>
              <button 
                disabled={!booking.serviceId}
                onClick={handleNext}
                className="w-full bg-[#B8860B] text-white py-4 rounded-sm font-bold mt-8 hover:bg-[#9A6E09] disabled:opacity-50"
              >
                SELECT DATE & TIME
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h4 className="font-bold text-lg mb-6 text-[#18181B]">Pick Your Slot</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Select Date</label>
                  <input 
                    type="date" 
                    min={new Date().toISOString().split('T')[0]}
                    value={booking.date}
                    onChange={(e) => setBooking({...booking, date: e.target.value})}
                    className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#B8860B]"
                  />
                  <p className="text-[10px] text-gray-400 mt-2">Open Mon–Sat: 11:00 AM – 8:00 PM</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Select Time</label>
                  <div className="grid grid-cols-2 gap-2 max-h-[30vh] overflow-y-auto pr-1">
                    {timeSlots.map(slot => (
                      <button
                        key={slot}
                        onClick={() => setBooking({...booking, time: slot})}
                        className={`py-2 px-3 text-xs font-bold rounded-sm border transition-all ${
                          booking.time === slot ? 'bg-[#18181B] text-white border-[#18181B]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#18181B]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <button onClick={handleBack} className="flex-1 border border-gray-200 py-4 rounded-sm font-bold text-gray-500 hover:bg-gray-50">BACK</button>
                <button 
                  disabled={!booking.date || !booking.time}
                  onClick={handleNext}
                  className="flex-[2] bg-[#B8860B] text-white py-4 rounded-sm font-bold hover:bg-[#9A6E09] disabled:opacity-50"
                >
                  CONTACT DETAILS
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="animate-fade-in">
              <h4 className="font-bold text-lg mb-6 text-[#18181B]">Your Information</h4>
              <div className="bg-white p-4 border border-gray-100 mb-6 rounded-sm">
                 <p className="text-xs text-gray-500 uppercase font-bold mb-1">Appointment Summary</p>
                 <p className="text-sm font-bold text-[#18181B]">
                  {selectedService?.name} • ${selectedService?.price}
                 </p>
                 <p className="text-xs text-gray-600">
                  {booking.date} at {booking.time}
                 </p>
              </div>

              <div className="space-y-4">
                <input 
                  required
                  type="text" 
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#B8860B]"
                  onChange={(e) => setBooking({...booking, customerName: e.target.value})}
                />
                <input 
                  required
                  type="tel" 
                  placeholder="Phone Number (+65 ...)"
                  className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#B8860B]"
                  onChange={(e) => setBooking({...booking, customerPhone: e.target.value})}
                />
                <input 
                  required
                  type="email" 
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#B8860B]"
                  onChange={(e) => setBooking({...booking, customerEmail: e.target.value})}
                />
              </div>

              <div className="flex space-x-4 mt-8">
                <button type="button" onClick={handleBack} className="flex-1 border border-gray-200 py-4 rounded-sm font-bold text-gray-500 hover:bg-gray-50">BACK</button>
                <button 
                  type="submit"
                  className="flex-[2] bg-[#18181B] text-white py-4 rounded-sm font-bold hover:bg-black shadow-lg"
                >
                  CONFIRM APPOINTMENT
                </button>
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-4">By booking, you agree to receive SMS/Email reminders.</p>
            </form>
          )}

          {step === 4 && (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                 </svg>
              </div>
              <h3 className="font-serif text-3xl text-[#18181B] mb-2">Vibes Secured!</h3>
              <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                Thanks, {booking.customerName}! We've sent a confirmation to {booking.customerEmail}. See you on {booking.date}.
              </p>
              <button 
                onClick={onClose}
                className="bg-[#B8860B] text-white px-10 py-3 rounded-sm font-bold hover:bg-[#9A6E09]"
              >
                CLOSE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
