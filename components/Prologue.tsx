import React, { useEffect, useState } from 'react';
import { ChevronDown, FileText, Linkedin, Mail } from 'lucide-react';

export const Prologue: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Where narrative structure meets software architecture.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="prologue" className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20 border-b border-stone-300">
      <div className="max-w-4xl w-full text-center space-y-8">
        <span className="block text-accent font-serif italic text-xl tracking-widest">Prologue</span>
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-ink leading-tight">
          Cristian Prada
        </h1>
        <h2 className="text-2xl md:text-3xl font-sans text-stone-600 font-light">
          Full Stack Developer
        </h2>
        
        <div className="h-16 flex items-center justify-center">
           <p className="text-lg md:text-xl font-serif text-stone-500 border-r-2 border-accent pr-2 animate-pulse">
            {text}
           </p>
        </div>

        <div className="mt-6 p-8 bg-white/50 border border-stone-200 shadow-sm rotate-1 hover:rotate-0 transition-transform duration-500 max-w-2xl mx-auto relative">
           <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent/10 rounded-full blur-xl"></div>
           <p className="font-serif text-lg leading-relaxed text-justify">
             "I believe that writing clean code is akin to crafting a compelling narrative. 
             Every function is a sentence, every module a chapter, and the user experience 
             is the journey we guide the reader through. With a Master's in Full Stack Development 
             and a background in Literature, I bridge the gap between human stories and digital logic."
           </p>
        </div>

        {/* Social / Contact Icons */}
        <div className="flex justify-center gap-8 mt-8">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-stone-500 hover:text-accent hover:scale-110 transition-all duration-300 flex flex-col items-center gap-1 group"
            aria-label="CV"
          >
            <div className="p-3 bg-paper border border-stone-300 rounded-full group-hover:border-accent">
              <FileText className="w-5 h-5" />
            </div>
            <span className="font-sans text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">CV</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/cristian-prada/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-stone-500 hover:text-[#0077b5] hover:scale-110 transition-all duration-300 flex flex-col items-center gap-1 group"
            aria-label="LinkedIn"
          >
            <div className="p-3 bg-paper border border-stone-300 rounded-full group-hover:border-[#0077b5]">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="font-sans text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
          </a>

          <a 
            href="mailto:cprada33@hotmail.com" 
            className="text-stone-500 hover:text-accent hover:scale-110 transition-all duration-300 flex flex-col items-center gap-1 group"
            aria-label="Email"
          >
            <div className="p-3 bg-paper border border-stone-300 rounded-full group-hover:border-accent">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-sans text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <a href="#lexicon" className="text-stone-400 hover:text-accent transition-colors flex flex-col items-center gap-2">
          <span className="font-sans text-xs uppercase tracking-widest">Turn Page</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};