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
    <section>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((proj) => (
          <div
            key={proj._id}
            className="bg-white rounded-xl p-6 flex flex-col items-center max-w-xs w-full"
          >
            <h3 className="font-playfair text-lg text-sage mb-2 text-center">{proj.title}</h3>
            {proj.url && (
              <Image
                src={proj.url}
                alt={proj.title}
                width={480}
                height={320}
                className="rounded-lg mb-4 object-cover"
              />
            )}
            <p className="mb-3 text-center">{proj.description}</p>
            {proj.tags && proj.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-4 w-full">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-cream text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

