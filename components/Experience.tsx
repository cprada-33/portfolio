import React from "react";
import { Calendar } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-6 bg-paper border-b border-stone-300">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <span className="block text-accent font-serif italic text-xl tracking-widest mb-2">
            Chapter II
          </span>
          <h2 className="text-5xl font-serif font-bold text-ink">
            The Chronicles
          </h2>
          <p className="mt-4 font-sans text-stone-600 max-w-2xl mx-auto">
            A record of professional tenures and autonomous ventures.
          </p>
        </div>

        <div className="space-y-12 relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-stone-300 -translate-x-1/2 z-0"></div>

          {/* Experience 1: Dread Blue */}
          <div className="relative flex flex-col md:flex-row gap-8 items-center">
            <div className="hidden md:block w-1/2 text-right pr-12">
              <h3 className="text-2xl font-serif font-bold text-ink">
                Dread Blue
              </h3>
              <span className="inline-block px-2 py-1 bg-stone-100 text-stone-600 text-xs font-sans uppercase tracking-widest mt-2 border border-stone-200">
                Autonomous Venture
              </span>
            </div>

            {/* Center Marker */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-paper z-10"></div>

            <div className="w-full md:w-1/2 pl-16 md:pl-12">
              <div className="md:hidden mb-4">
                <h3 className="text-2xl font-serif font-bold text-ink">
                  Dread Blue
                </h3>
                <span className="inline-block px-2 py-1 bg-stone-100 text-stone-600 text-xs font-sans uppercase tracking-widest mt-2 border border-stone-200">
                  Autonomous Venture
                </span>
              </div>

              <div className="bg-white p-6 border border-stone-200 shadow-sm relative">
                {/* Decorative triangle */}
                <div className="absolute top-6 -left-2 w-4 h-4 bg-white border-l border-b border-stone-200 rotate-45"></div>

                <div className="flex items-center gap-2 mb-3 text-stone-500 font-serif italic">
                  <Calendar className="w-4 h-4" />
                  <span>2 Years</span>
                </div>
                <p className="font-serif text-stone-700 leading-relaxed">
                  Founded and operated an autonomous development studio.
                  Architected and delivered the full stack solutions featured in
                  the <em>Selected Anthology</em>, managing the entire lifecycle
                  from narrative conception to deployment.
                </p>
              </div>
            </div>
          </div>

          {/* Experience 2: CI&T */}
          <div className="relative flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 pl-16 md:pr-12 md:pl-0 md:text-right order-2 md:order-1">
              <div className="md:hidden mb-4 pl-16">
                {" "}
                {/* Mobile Header */}
                <h3 className="text-2xl font-serif font-bold text-ink">CI&T</h3>
                <span className="inline-block px-2 py-1 bg-stone-100 text-stone-600 text-xs font-sans uppercase tracking-widest mt-2 border border-stone-200">
                  Full Stack Developer
                </span>
              </div>

              <div className="bg-white p-6 border border-stone-200 shadow-sm relative">
                {/* Decorative triangle */}
                <div className="absolute top-6 -left-2 md:left-auto md:-right-2 w-4 h-4 bg-white border-l border-b md:border-l-0 md:border-r md:border-t-0 border-stone-200 rotate-45"></div>

                <div className="flex items-center gap-2 mb-3 text-stone-500 font-serif italic justify-start md:justify-end">
                  <Calendar className="w-4 h-4" />
                  <span>6 Months</span>
                </div>
                <p className="font-serif text-stone-700 leading-relaxed">
                  Contributed to the "Coca-Cola en tu hogar" project for the
                  Mexican market. Focused on high-scale e-commerce performance
                  and backend integration within a global consultancy
                  environment.
                </p>

                <p className="font-serif text-stone-700 leading-relaxed">
                  Stack: Next.js, Typescript, Tailwind, Azure.
                </p>
              </div>
            </div>

            {/* Center Marker */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-ink border-4 border-paper z-10"></div>

            <div className="hidden md:block w-1/2 pl-12 order-1 md:order-2">
              <h3 className="text-2xl font-serif font-bold text-ink">CI&T</h3>
              <span className="inline-block px-2 py-1 bg-stone-100 text-stone-600 text-xs font-sans uppercase tracking-widest mt-2 border border-stone-200">
                Full Stack Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
