
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
        contents: `As an expert barber from Good Vibes Barber Shop, answer this customer query about grooming, hair styling, or beard maintenance: "${query}". Keep it helpful, professional, and consistent with a modern-industrial vibe.`,
        config: {
          systemInstruction: "You are the head barber at Good Vibes Barber Shop in Singapore. You are friendly, knowledgeable about trends like fades and classic shaves, and always encourage people to visit for the best results."
        }
      });
      setResponse(result.text || "Sorry, I couldn't process that. Try asking about fade maintenance or beard care!");
    } catch (error) {
      console.error(error);
      setResponse("My clippers are a bit jammed! Try again in a moment.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#18181B] text-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <span className="text-[#B8860B] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">AI Stylist</span>
        <h2 className="font-serif text-3xl md:text-5xl mb-8">Got a Grooming Question?</h2>
        <p className="text-gray-400 mb-10 text-lg">Ask our AI Stylist about hair maintenance, styles, or grooming tips before your visit.</p>

        <form onSubmit={getAdvice} className="relative max-w-2xl mx-auto">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="How do I maintain my fade? / Best beard products?"
            className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-6 pr-32 focus:outline-none focus:border-[#B8860B] transition-colors"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="absolute right-2 top-2 bottom-2 bg-[#B8860B] px-6 rounded-sm font-bold text-sm hover:bg-[#9A6E09] transition-colors disabled:opacity-50"
          >
            {isLoading ? 'THINKING...' : 'ASK VIBES'}
          </button>
        </form>

        {response && (
          <div className="mt-10 p-8 bg-white/5 border-l-4 border-[#B8860B] text-left animate-fade-in">
            <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">{response}</p>
            <p className="mt-4 text-[#B8860B] font-bold text-sm">— Good Vibes Head Barber</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GroomingAssistant;
