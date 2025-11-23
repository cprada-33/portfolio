import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../types";

const projects: Project[] = [
  {
    id: "1",
    title: "Abya Yala Hostel",
    description:
      "A booking platform built with the reliability of a front desk. Features real-time availability management and automated reservation handling for a seamless guest experience.",
    tags: ["Vue", "Nuxt", "Typescript", "Firebase", "GCP"],
    image: "/portfolio/abya.png",
    chapter: "I",
    github: "https://github.com",
    link: "https://abyayalahostel.com",
  },
  {
    id: "2",
    title: "Nogal Internacional Inc",
    description:
      "A global shipping platform built with the precision of a control tower. Features real-time container tracking and automated shipment requests for streamlined international logistics.",
    tags: ["Vue", "Nuxt", "Typescript", "Firebase", "GCP"],
    image: "/portfolio/nogal.png",
    chapter: "II",
    link: "https://nogalinternacional.com",
  },
  {
    id: "3",
    title: "Clinpcorp Corporation",
    description:
      "A global logistics platform built with the precision of a control tower. Features real-time container tracking, automated shipment requests, and an integrated commodity brokerage for international products like cotton.",
    tags: ["Vue", "Nuxt", "Typescript", "Firebase", "GCP"],
    image: "/portfolio/clinpcorp.png",
    chapter: "III",
    link: "https://clinpcorp.com",
  },
  {
    id: "4",
    title: "Unknown app",
    description:
      "A web & mobile app project with social media structure and mvp expected to be lunched at 2026.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "GraphQL",
      "MongoDB",
      "Express",
      "React native",
    ],
    image: "/portfolio/soon.png",
    chapter: "IV",
    github: "https://github.com",
  },
];

export const Anthology: React.FC = () => {
  return (
    <section
      id="anthology"
      className="min-h-screen py-24 px-6 bg-paper border-b border-stone-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <span className="block text-accent font-serif italic text-xl tracking-widest mb-2">
            Chapter III
          </span>
          <h2 className="text-5xl font-serif font-bold text-ink">
            Selected Anthology
          </h2>
          <p className="mt-4 font-sans text-stone-600 max-w-2xl mx-auto">
            A collection of distinct narratives written in code.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center group`}>
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
                  <h3 className="text-3xl font-serif font-bold text-ink">
                    {project.title}
                  </h3>
                </div>

                <p className="font-serif text-lg text-stone-700 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs uppercase tracking-wider border border-stone-400 px-2 py-1 text-stone-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper hover:bg-accent transition-colors duration-300 font-serif text-lg shadow-sm hover:shadow-md">
                      <span>Visit Website</span>
                      <ExternalLink size={18} />
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
