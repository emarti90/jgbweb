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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div
            key={proj._id}
            className="
              group relative rounded-xl shadow-xl overflow-hidden
              bg-white flex flex-col min-h-[320px] cursor-pointer
              transition-transform hover:scale-[1.03]
            "
          >
            {/* Imagen de fondo */}
            {proj.url && (
              <Image
                src={proj.url}
                alt={proj.title}
                fill
                className="object-cover w-full h-full absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
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

            {/* Overlay hover: descripción + tags SOLO visible en hover */}
            <div className="
                hidden group-hover:flex
                absolute inset-0 z-20 bg-black p-6 flex-col justify-center items-center
                text-white transition-all duration-500
                rounded-xl
              ">
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
        ))}
      </div>
    </section>
  );
}

