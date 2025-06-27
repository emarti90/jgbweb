"use client";

import Image from "next/image";

type Project = {
  _id: string;
  title: string;
  description: string;
  url: string;
  tags?: string[];
};

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-8">
      <div className="flex justify-center flex-wrap gap-8">
        {projects.map((proj) => (
          <div
            key={proj._id}
            className="flip-card w-full sm:w-1/2 lg:w-1/3 max-w-[350px] min-h-[320px] mx-auto"
            tabIndex={0}
          >
            <div className="flip-card-inner rounded-xl shadow-xl h-full">
              {/* Cara frontal */}
              <div className="flip-card-front bg-white flex flex-col relative min-h-[320px]">
                {/* Imagen de fondo */}
                {proj.url && (
                  <Image
                    src={proj.url}
                    alt={proj.title}
                    fill
                    className="object-cover w-full h-full absolute inset-0 transition-opacity duration-300"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    style={{ zIndex: 1 }}
                  />
                )}
                {/* Overlay título siempre visible */}
                <div
                  className="
                    absolute left-0 top-1/2
                    -translate-y-1/2
                    w-full h-1/4
                    bg-black/80
                    flex items-center justify-center
                    z-10
                  "
                >
                  <h3 className="font-playfair text-lg text-center text-white drop-shadow-md">{proj.title}</h3>
                </div>
              </div>
              {/* Cara trasera */}
              <div className="flip-card-back bg-black flex flex-col justify-center items-center text-white p-6">
                <p className="mb-3 text-sm text-center">{proj.description}</p>
                {proj.tags && proj.tags.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 mt-4 w-full">
                    {proj.tags.map(tag => (
                      <span key={tag} className="bg-cream text-xs px-2 py-1 rounded text-black">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

