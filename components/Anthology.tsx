import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: "1",
    title: "Abya Yala Hostel",
    description: "A content management system built with the precision of a dictionary. Features real-time collaboration and automated syntax highlighting for prose.",
    tags: ["Vue", "Nuxt", "Typescript", "Firebase", "GCP"],
    image: "https://dreadblue.github.io/portfolio//abya.png",
    chapter: "I",
    github: "https://github.com",
    link: "https://example.com"
  },
  {
    id: "2",
    title: "Nogal Internacional Inc",
    description: "An interactive data visualization dashboard transforming complex datasets into legible, narrative-driven charts using D3.js.",
    tags: ["Vue", "Nuxt", "Typescript", "Firebase", "GCP"],
    image: "https://picsum.photos/800/601",
    chapter: "II",
    github: "https://github.com"
  },
  {
    id: "3",
    title: "Clinpcorp Corporation",
    description: "A full-stack e-commerce platform designed with a minimalist aesthetic, focusing on the story of the product rather than clutter.",
    tags: ["Vue", "Nuxt", "Typescript", "Firebase", "GCP"],
    image: "https://picsum.photos/800/602",
    chapter: "III",
    github: "https://github.com",
    link: "https://example.com"
  },
    {
    id: "4",
    title: "Unknown app",
    description: "A web & mobile app project with social media structure and mvp expected to be lunched at 2026.",
    tags: ["React", "Next.js", "Typescript", "GraphQL", "MongoDB", "Express", "React native"],
    image: "https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?semt=ais_hybrid&w=740&q=80",
    chapter: "IV",
    github: "https://github.com",
    link: "https://example.com"
  }
];

export const Anthology: React.FC = () => {
  return (
    <section id="anthology" className="min-h-screen py-24 px-6 bg-paper border-b border-stone-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <span className="block text-accent font-serif italic text-xl tracking-widest mb-2">Chapter III</span>
          <h2 className="text-5xl font-serif font-bold text-ink">Selected Anthology</h2>
          <p className="mt-4 font-sans text-stone-600 max-w-2xl mx-auto">
            A collection of distinct narratives written in code.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center group`}>
              {/* Book Cover / Image Area */}
              <div className="w-full md:w-1/2 relative">
                <div className="absolute inset-0 bg-stone-900 translate-x-4 translate-y-4 md:group-hover:translate-x-2 md:group-hover:translate-y-2 transition-transform duration-500"></div>
                <div className="relative overflow-hidden aspect-[4/3] border-2 border-stone-800">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-60"></div>
                </div>
              </div>

              {/* Text Area */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                   <span className="h-px w-12 bg-accent"></span>
                   <h3 className="text-3xl font-serif font-bold text-ink">{project.title}</h3>
                </div>
                
                <p className="font-serif text-lg text-stone-700 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-sans text-xs uppercase tracking-wider border border-stone-400 px-2 py-1 text-stone-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-sans text-sm hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1">
                      <Github size={16} />
                      <span>View Manuscript (Code)</span>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-sans text-sm hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1">
                      <ExternalLink size={16} />
                      <span>Read Volume (Live)</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};