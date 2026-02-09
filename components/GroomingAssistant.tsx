
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const GroomingAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAdvice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `As an elite grooming consultant from Good Vibes Barber Shop, handle this query: "${query}". Keep it brief, sophisticated, and focused on luxury standards.`,
        config: {
          systemInstruction: "You are a world-class grooming concierge. Your tone is elegant, direct, and incredibly refined. You offer high-end advice as if speaking to a VVIP client."
        }
      });
      setResponse(result.text || "Pardon, I'm currently attending to a client. Please try again in a moment.");
    } catch (error) {
      console.error(error);
      setResponse("A brief recalibration of our digital systems is underway.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-40 bg-[#0D0D0D] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-[#D4AF37] font-bold tracking-[0.6em] text-[10px] uppercase mb-6 block">Concierge AI</span>
          <h2 className="font-serif text-5xl md:text-7xl font-bold italic mb-8">Digital Consult.</h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto leading-relaxed text-lg">
            Unsure of which fade profile complements your structure? Our virtual concierge provides master-level grooming insight instantly.
          </p>
        </div>

        <div className="bg-white/5 border border-white/5 p-12 lg:p-20 relative overflow-hidden group">
          <form onSubmit={getAdvice} className="relative z-10 flex flex-col md:flex-row items-end gap-8">
            <div className="flex-1 w-full">
              <label className="text-[10px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase mb-4 block">How can we assist?</label>
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Styles, maintenance, or skin health..."
                className="w-full bg-transparent border-b border-white/10 py-6 text-xl font-light focus:outline-none focus:border-[#D4AF37] transition-all placeholder:text-white/10"
              />
            </div>
            <button 
              type="submit"
              disabled={isLoading || !query.trim()}
              className="bg-white text-black px-12 py-6 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#D4AF37] transition-all disabled:opacity-30"
            >
              {isLoading ? 'ANALYZING...' : 'GET INSIGHT'}
            </button>
          </form>

          {response && (
            <div className="mt-20 animate-fade-in-up border-t border-white/5 pt-20">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                  <span className="text-[#D4AF37] font-serif text-3xl italic">The Consult.</span>
                </div>
                <div className="lg:w-2/3 border-l border-[#D4AF37]/30 pl-12">
                  <p className="text-xl font-light leading-relaxed italic text-gray-300">"{response}"</p>
                  <p className="mt-8 text-[10px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase">Good Vibes Virtual Concierge</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GroomingAssistant;
