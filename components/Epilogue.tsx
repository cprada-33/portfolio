import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export const Epilogue: React.FC = () => {
  return (
    <footer id="epilogue" className="bg-ink text-paper-dark py-20 px-6 border-t-4 border-accent">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div>
          <span className="block text-accent font-serif italic text-xl tracking-widest mb-4">Epilogue</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">Correspondence</h2>
        </div>

        <p className="font-serif text-xl leading-relaxed max-w-2xl mx-auto text-stone-400">
          Every great story deserves a sequel. Whether you have a project that needs a narrator or a team that needs a protagonist, I await your letter.
        </p>

        <div className="flex flex-col items-center gap-8">
          <a 
            href="mailto:cprada33@hotmail.com" 
            className="inline-flex items-center gap-3 text-2xl font-serif hover:text-accent transition-colors border-b border-stone-700 pb-2 hover:border-accent"
          >
            <Mail className="w-6 h-6" />
            <span>cprada33@hotmail.com</span>
          </a>

          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/cristian-prada/" className="hover:text-white transition-transform hover:scale-110">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-stone-800 text-stone-600 font-sans text-sm">
          <p>&copy; {new Date().getFullYear()} Cristian Prada. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
