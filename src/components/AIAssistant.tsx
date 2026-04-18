import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Send, X, MessageSquare, Loader2, Minimize2, Maximize2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { useTranslation } from 'react-i18next';

export default function AIAssistant() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: "Hello. I am the Krijger Cornelis AI Legal Assistant. How can I assist you with our global legal services today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: "You are an elite, professional AI assistant for Krijger Cornelis Associates, a global law firm. Your tone is authoritative, precise, and understated. You assist users with general legal inquiries (non-binding), firm capabilities, office locations, and routing inquiries to the correct partner. NEVER provide definitive legal advice; always include a disclaimer that professional consultation is required. Keep responses concise and high-end. Your firm has offices in Paris, Berlin, Amsterdam, London, Zurich, New York, and Boston.",
        },
      });

      const aiResponse = response.text || "I apologize, I am unable to process that request at the moment. Please contact our offices directly.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Our encrypted AI gateway is temporarily unavailable. Please schedule a consultation for immediate assistance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-on-surface text-surface rounded-full shadow-2xl flex items-center justify-center hover:bg-secondary transition-colors group relative"
          >
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-surface animate-pulse" />
            <Bot className="w-8 h-8 group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              height: isMinimized ? '60px' : '600px',
              width: '400px'
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-surface border border-grey-mid shadow-2xl rounded-sm overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-on-surface text-surface flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary/20 rounded flex items-center justify-center">
                  <Bot className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-sm font-serif leading-none">Legal Intelligence AI</h4>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">Encrypted & Secure</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsMinimized(!isMinimized)} className="p-1 hover:text-secondary">
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:text-secondary">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-4 rounded-sm text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-grey-low text-on-surface border border-grey-mid' 
                          : 'bg-surface text-on-surface-variant'
                      }`}>
                        {msg.role === 'assistant' && (
                          <div className="flex items-center gap-2 mb-2">
                            <Bot className="w-3 h-3 text-secondary" />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">Intelligence System</span>
                          </div>
                        )}
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] p-4 bg-surface text-on-surface-variant text-sm flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-secondary" />
                        Analyzing regulatory frameworks...
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Footer Input */}
                <div className="p-4 border-t border-grey-mid bg-grey-low/30">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask a strategic legal question..."
                      className="flex-1 bg-surface border border-grey-mid rounded px-4 py-2 text-xs focus:ring-1 focus:ring-secondary outline-none"
                    />
                    <button 
                      onClick={handleSend}
                      disabled={isLoading}
                      className="p-2 bg-on-surface text-surface rounded hover:bg-secondary transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[9px] text-center mt-3 text-on-surface-variant/60">
                    Non-binding intelligence. Please consult counsel for specific legal advice.
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
