import React from 'react';
import { Code, Database, Feather, Layout } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  {
    category: "Frontend Dialects",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue", "Nuxt"],
    icon: <Layout className="w-6 h-6" />
  },
  {
    category: "Backend Syntax",
    items: ["Node.js", "Express", "Java", "GraphQL", "REST APIs"],
    icon: <Code className="w-6 h-6" />
  },
  {
    category: "Archives (Data)",
    items: ["PostgreSQL", "MongoDB", "Firebase", "Google Cloud", "Git"],
    icon: <Database className="w-6 h-6" />
  },
  {
    category: "Soft Skills",
    items: ["Team Leader", "Global Traveler", "Bilingual", "Global Volunteer", "Management Experience", "Creative", "Writer"],
    icon: <Feather className="w-6 h-6" />
  }
];

export const Lexicon: React.FC = () => {
  return (
    <section id="lexicon" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-paper-dark border-b border-stone-300">
      <div className="max-w-6xl w-full">
        <div className="mb-16 text-center">
          <span className="block text-accent font-serif italic text-xl tracking-widest mb-2">Chapter I</span>
          <h2 className="text-5xl font-serif font-bold text-ink">The Lexicon</h2>
          <p className="mt-4 font-sans text-stone-600 max-w-2xl mx-auto">
            The vocabulary and tools I employ to author digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="group relative bg-paper p-8 border border-stone-300 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-paper-dark border-r-transparent group-hover:border-t-accent transition-colors"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-stone-200 text-ink rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-ink">{skill.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <span key={i} className="font-sans text-sm bg-stone-100 text-stone-700 px-3 py-1 border border-stone-200 rounded-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};