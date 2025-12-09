import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, Loader2, X, AlertTriangle } from 'lucide-react';
import { HYDRA_CONTEXT } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello. I'm the HydraEdge Strategy AI. Ask me about our 16-week protocol, unit economics, or formulation." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);

    // Check for API Key availability
    if (!process.env.API_KEY) {
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Deployment Config Error: API_KEY is missing. If you are viewing this on GitHub Pages or a static host, you must configure your API keys in your environment variables or build settings.",
        isError: true 
      }]);
      return;
    }

    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = "gemini-2.5-flash";
      
      const response = await ai.models.generateContent({
        model: model,
        contents: [
          { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
          systemInstruction: `You are the expert product strategist for HydraEdge. Use the following context to answer investor questions professionally and concisely. \n\n CONTEXT: ${HYDRA_CONTEXT}`,
        }
      });

      const text = response.text || "I couldn't generate a response regarding HydraEdge at this time.";
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Connection error. The AI service is currently unreachable.",
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-hydra-green text-black p-4 rounded-full shadow-lg shadow-hydra-green/20 hover:scale-110 transition-transform duration-200"
        >
          <Bot size={28} />
        </button>
      )}

      {isOpen && (
        <div className="w-80 md:w-96 bg-hydra-gray border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up h-[500px]">
          {/* Header */}
          <div className="bg-hydra-black p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="text-hydra-green" size={20} />
              <span className="font-bold text-white">Investor Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-900/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-lg text-sm ${
                    msg.role === 'user' 
                      ? 'bg-hydra-blue text-black font-medium' 
                      : msg.isError
                        ? 'bg-red-500/10 border border-red-500/50 text-red-200'
                        : 'bg-white/10 text-gray-200'
                  }`}
                >
                  {msg.isError && <AlertTriangle size={14} className="inline mr-2 -mt-0.5" />}
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Loader2 size={16} className="animate-spin text-hydra-green" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-hydra-black border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about margins, ingredients..."
              className="flex-1 bg-zinc-900 text-white text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-hydra-green border border-white/5"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-hydra-green text-black p-2 rounded-md hover:bg-opacity-80 disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;