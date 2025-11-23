import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Sparkles, BookOpen } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const LiteraryAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings. I am the Literary Agent for this portfolio. You may inquire about Cristian\'s technical stacks, his literary background, or how the two intertwine.', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(
        messages.map(m => ({ role: m.role, text: m.text })),
        input
      );
      
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-ink text-paper p-4 rounded-full shadow-lg hover:bg-accent transition-all duration-300 flex items-center gap-2 group border border-gold"
        >
          <BookOpen className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-serif">
            Consult Agent
          </span>
        </button>
      )}

      {isOpen && (
        <div className="bg-paper w-80 md:w-96 h-[500px] rounded-lg shadow-2xl flex flex-col border-2 border-stone-800 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-ink text-paper p-4 flex justify-between items-center border-b border-gold">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <h3 className="font-serif font-bold tracking-wide">The Literary Agent</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div 
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"
            ref={scrollRef}
          >
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-sm text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-stone-800 text-stone-100 font-sans' 
                      : 'bg-white text-ink font-serif border border-stone-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-sm border border-stone-200 flex gap-1">
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-stone-300 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Inquire about the author..."
              className="flex-1 bg-transparent outline-none text-ink placeholder-stone-400 font-sans text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="text-stone-500 hover:text-accent disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
