import React, { useEffect, useState } from 'react';

export const TableOfContents: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    const sections = document.querySelectorAll('section, footer');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const navItems = [
    { id: 'prologue', label: 'Prologue' },
    { id: 'lexicon', label: 'Lexicon' },
    { id: 'experience', label: 'Chronicles' },
    { id: 'anthology', label: 'Anthology' },
    { id: 'education', label: 'Academia' },
    { id: 'epilogue', label: 'Epilogue' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-paper/90 backdrop-blur-sm border-b border-stone-200 z-40 py-4 px-6 hidden md:block shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="font-serif font-bold text-xl tracking-tighter">C.P.</div>
        <ul className="flex gap-8">
          {navItems.map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={`font-serif text-sm tracking-widest uppercase transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'text-accent border-b border-accent pb-1' 
                    : 'text-stone-500 hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};