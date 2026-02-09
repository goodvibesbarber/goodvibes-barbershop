
import React, { useState } from 'react';
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

  const timeSlots = ['11:00 AM', '12:00 PM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM', '7:00 PM'];

  if (!isOpen) return null;

  const selectedService = SERVICES.find(s => s.id === booking.serviceId);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#18181B]/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-[#FAFAF9] w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden animate-scale-in">
        <div className="bg-[#18181B] text-white p-8">
          <div className="flex justify-between items-center">
            <h3 className="font-serif text-2xl uppercase tracking-widest">Reserve Your Seat</h3>
            <button onClick={onClose} className="hover:rotate-90 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <div className="mt-4 flex space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-1 flex-1 transition-all ${step >= i ? 'bg-[#B8860B]' : 'bg-white/10'}`}></div>
            ))}
          </div>
        </div>

        <div className="p-10 max-h-[70vh] overflow-y-auto">
          {step === 1 && (
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#B8860B] mb-8">1. Select Service</h4>
              <div className="space-y-3">
                {SERVICES.map(s => (
                  <div 
                    key={s.id} 
                    onClick={() => setBooking({...booking, serviceId: s.id})}
                    className={`p-5 border cursor-pointer transition-all flex justify-between items-center ${
                      booking.serviceId === s.id ? 'border-[#B8860B] bg-[#B8860B]/5' : 'border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <div>
                      <span className="font-bold block uppercase tracking-tight">{s.name}</span>
                      <span className="text-[10px] text-gray-400">{s.duration}</span>
                    </div>
                    <span className="font-serif font-bold text-lg">${s.price}</span>
                  </div>
                ))}
              </div>
              <button 
                disabled={!booking.serviceId}
                onClick={() => setStep(2)}
                className="w-full bg-[#18181B] text-white py-5 mt-10 text-xs font-bold tracking-widest hover:bg-[#B8860B] transition-all disabled:opacity-30"
              >
                CHOOSE DATE & TIME
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#B8860B] mb-8">2. Schedule</h4>
              <div className="grid md:grid-cols-2 gap-12">
                <input 
                  type="date" 
                  className="w-full p-4 bg-white border border-gray-100 focus:border-[#B8860B] outline-none font-bold"
                  value={booking.date}
                  onChange={(e) => setBooking({...booking, date: e.target.value})}
                />
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map(t => (
                    <button 
                      key={t}
                      onClick={() => setBooking({...booking, time: t})}
                      className={`py-3 px-4 text-[10px] font-bold border transition-all ${
                        booking.time === t ? 'bg-[#18181B] text-white' : 'bg-white border-gray-100 hover:border-[#18181B]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <button onClick={() => setStep(1)} className="flex-1 py-5 text-xs font-bold border border-gray-200 uppercase tracking-widest">Back</button>
                <button 
                  disabled={!booking.time}
                  onClick={() => setStep(3)}
                  className="flex-[2] bg-[#18181B] text-white py-5 text-xs font-bold tracking-widest hover:bg-[#B8860B] transition-all disabled:opacity-30"
                >
                  FINAL DETAILS
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#B8860B] mb-8">3. Guest Info</h4>
              <div className="p-6 bg-[#FAFAF9] border-l-4 border-[#B8860B] mb-8">
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Appointment Summary</p>
                 <p className="font-bold uppercase">{selectedService?.name} — {booking.date} @ {booking.time}</p>
              </div>
              <div className="grid gap-6">
                <input required type="text" placeholder="Full Name" className="w-full p-4 bg-white border border-gray-100 focus:border-[#B8860B] outline-none" onChange={(e) => setBooking({...booking, customerName: e.target.value})} />
                <input required type="tel" placeholder="Mobile Number (+65...)" className="w-full p-4 bg-white border border-gray-100 focus:border-[#B8860B] outline-none" onChange={(e) => setBooking({...booking, customerPhone: e.target.value})} />
                <input required type="email" placeholder="Email Address" className="w-full p-4 bg-white border border-gray-100 focus:border-[#B8860B] outline-none" onChange={(e) => setBooking({...booking, customerEmail: e.target.value})} />
              </div>
              <button 
                onClick={() => setStep(4)}
                className="w-full bg-[#B8860B] text-white py-6 text-xs font-bold tracking-[0.3em] hover:bg-[#9A6E09] transition-all"
              >
                CONFIRM RESERVATION
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="font-serif text-3xl mb-4">You're Booked.</h3>
              <p className="text-gray-500 max-w-sm mx-auto mb-10 text-sm leading-relaxed">
                Confirmation sent to your mobile. We're looking forward to your visit to Good Vibes.
              </p>
              <button onClick={onClose} className="bg-[#18181B] text-white px-12 py-4 text-xs font-bold tracking-widest hover:bg-black">CLOSE</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
