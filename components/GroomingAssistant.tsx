
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
        contents: `As an expert barber from Good Vibes Barber Shop, answer this customer query about grooming: "${query}". Keep it concise, professional, and sophisticated. Use "we" and "us". Mention that for best results, a physical consultation at Yung An Road is recommended.`,
        config: {
          systemInstruction: "You are a master barber with 20 years experience at a premium boutique barber shop. Your tone is refined, encouraging, and focused on precision and wellness."
        }
      });
      setResponse(result.text || "I'm currently focused on a precision cut. Please try again in a moment.");
    } catch (error) {
      console.error(error);
      setResponse("My equipment needs a quick recalibration. Let's try that again shortly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-32 bg-[#18181B] relative overflow-hidden">
      {/* Abstract geometric shapes for background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8860B] opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-[1px] bg-[#B8860B] mb-8"></div>
          <span className="text-[#B8860B] font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Digital Consultant</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Expert Consultation</h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
            Unsure which fade suits your face shape? Or how to maintain your beard between visits? Ask our master-trained AI assistant.
          </p>
        </div>

        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-sm backdrop-blur-sm">
          <form onSubmit={getAdvice} className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about styles, products, or care..."
              className="flex-1 bg-transparent border-b border-white/20 py-4 px-2 text-white font-light focus:outline-none focus:border-[#B8860B] transition-all placeholder:text-gray-600"
            />
            <button 
              type="submit"
              disabled={isLoading || !query.trim()}
              className="bg-[#B8860B] text-white px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#9A6E09] transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-xl active:scale-95"
            >
              {isLoading ? 'ANALYZING...' : 'GET CONSULTATION'}
            </button>
          </form>

          {response && (
            <div className="mt-12 animate-fade-in-up">
              <div className="p-8 bg-[#FAFAF9] text-[#18181B] rounded-sm relative shadow-inner">
                {/* Vintage Note Aesthetics */}
                <div className="absolute top-4 right-6 opacity-10">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  </svg>
                </div>
                <div className="border-l-2 border-[#B8860B] pl-8">
                  <p className="text-sm font-medium tracking-tight leading-relaxed italic mb-4">"{response}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-[1px] bg-gray-300"></div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#B8860B]">Good Vibes Master Consultation</p>
                  </div>
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
