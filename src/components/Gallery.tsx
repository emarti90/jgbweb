"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { FiX } from "react-icons/fi";
import { getTranslations } from "@/lib/useTranslations";

type GalleryImage = {
  _id: string;
  title: string;
  cloudinaryUrl: string;
  highlight?: boolean;
};

export default function Gallery({ lang, images }: { lang: string, images: GalleryImage[] }) {
  // Separar destacadas y normales
  const highlighted = images.filter(img => img.highlight);
  const normal = images.filter(img => !img.highlight);

  // Juntar: destacadas primero, luego normales
  const orderedImages = [...highlighted, ...normal];

  // Estado para el Dialog
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const handleOpen = (img: GalleryImage) => {
    setSelected(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  const t = getTranslations(lang)

  return (
    <section id="gallery" className="scroll-mt-26">
      <h1 className="font-noto text-3xl text-navy mb-8 mt-10 text-center">{t.gallery.title.toUpperCase()}</h1>
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
            <button
              onClick={() => handleOpen(img)}
              className="w-full h-full focus:outline-none"
              aria-label={`Ver imagen ${img.title} en grande`}
            >
              <Image
                src={img.cloudinaryUrl}
                alt={img.title}
                width={img.highlight ? 800 : 400}
                height={img.highlight ? 800 : 400}
                className="w-full h-full object-cover rounded-xl shadow"
                sizes={img.highlight ? "(min-width: 640px) 50vw, 100vw" : "25vw"}
                priority={img.highlight}
              />
            </button>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="flex flex-col items-center justify-center p-0 max-w-screen-lg w-full bg-black"
          style={{ maxWidth: "95vw", maxHeight: "95vh" }}
        >
          <DialogTitle className="sr-only">
            Zoom
          </DialogTitle>
          <button
            className="absolute top-4 right-4 z-10 text-white text-3xl"
            onClick={handleClose}
            aria-label="Cerrar imagen"
          >
            <FiX />
          </button>
          {selected && (
            <Image
              src={selected.cloudinaryUrl}
              alt={selected.title}
              width={1200}
              height={1200}
              className="object-contain w-[90vw] h-[80vh] rounded-xl bg-black"
              style={{ maxWidth: "100%", maxHeight: "80vh" }}
              priority
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
