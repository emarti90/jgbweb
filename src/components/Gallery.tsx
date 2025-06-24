"use client"

import Image from "next/image";

type GalleryImage = {
  _id: string;
  title: string;
  cloudinaryUrl: string;
  highlight?: boolean;
};

export default function Gallery({ images }: { images: GalleryImage[] }) {
  // Separar destacadas y normales
  const highlighted = images.filter(img => img.highlight);
  const normal = images.filter(img => !img.highlight);

  // Juntar: destacadas primero, luego normales
  const orderedImages = [...highlighted, ...normal];

  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {orderedImages.map((img) => (
          <div
            key={img._id}
            className={
              img.highlight
                ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2"
                : ""
            }
          >
            <Image
              src={img.cloudinaryUrl}
              alt={img.title}
              width={img.highlight ? 800 : 400}
              height={img.highlight ? 800 : 400}
              className="w-full h-full object-cover rounded-xl shadow"
              sizes={img.highlight ? "(min-width: 640px) 50vw, 100vw" : "25vw"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
