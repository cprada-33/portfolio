import React from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="min-h-screen py-24 px-6 bg-paper-dark border-b border-stone-300">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center">
          <span className="block text-accent font-serif italic text-xl tracking-widest mb-2">
            Chapter IV
          </span>
          <h2 className="text-5xl font-serif font-bold text-ink">
            The Academia
          </h2>
          <p className="mt-4 font-sans text-stone-600 max-w-2xl mx-auto">
            The formal studies that inform my practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Center Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-300 -translate-x-1/2"></div>

          {/* Bachelor's - Swapped to Left */}
          <div className="md:text-right relative">
            <div className="hidden md:block absolute right-[-32px] top-6 w-4 h-4 rounded-full bg-stone-400 border-4 border-paper-dark z-10"></div>

            <div className="bg-paper p-8 border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BookOpen className="w-16 h-16 text-ink" />
              </div>
              <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 font-sans text-xs uppercase tracking-widest mb-4 border border-stone-200">
                Bachelor Degree
              </span>
              <h3 className="text-2xl font-serif font-bold text-ink mb-2">
                Literature
              </h3>
              <h4 className="font-serif italic text-lg text-stone-700 mb-4">
                Universidad Pontificia Bolivariana
              </h4>
              <p className="font-sans text-stone-600 text-sm leading-relaxed">
                Medellín, Colombia. Focused on narrative theory, critical
                analysis, narrative analysis and audiovisual media.
              </p>
            </div>
          </div>

          {/* Master's - Swapped to Right */}
          <div className="md:col-start-2 relative mt-8 md:mt-0">
            <div className="hidden md:block absolute left-[-32px] top-6 w-4 h-4 rounded-full bg-accent border-4 border-paper-dark z-10"></div>
            <div className="bg-paper p-8 border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap className="w-16 h-16 text-accent" />
              </div>
              <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 font-sans text-xs uppercase tracking-widest mb-4 border border-stone-200">
                Master Degree
              </span>
              <h3 className="text-2xl font-serif font-bold text-ink mb-2">
                Full Stack Development
              </h3>
              <h4 className="font-serif italic text-lg text-stone-700 mb-4">
                Universidad Europea de Madrid
              </h4>
              <p className="font-sans text-stone-600 text-sm leading-relaxed">
                Master’s degree in Full Stack Development with hands-on training
                in Python, Angular, React, Express, and React Native.
              </p>
            </div>
          </div>

          {/* Certificate */}
          <div className="md:col-start-1 md:text-right relative mt-8 md:mt-0">
            <div className="hidden md:block absolute right-[-32px] top-6 w-4 h-4 rounded-full bg-gold border-4 border-paper-dark z-10"></div>

            <div className="bg-paper p-8 border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-16 h-16 text-gold" />
              </div>
              <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 font-sans text-xs uppercase tracking-widest mb-4 border border-stone-200">
                Certification
              </span>
              <h3 className="text-2xl font-serif font-bold text-ink mb-2">
                EF SET English Certificate
              </h3>
              <h4 className="font-serif italic text-lg text-stone-700 mb-4">
                C2 Proficient Level
              </h4>
              <p className="font-sans text-stone-600 text-sm leading-relaxed">
                Demonstrating mastery in English for professional and technical
                environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
