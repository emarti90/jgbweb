"use client";
import Image from "next/image";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { getTranslations } from "@/lib/useTranslations";

type AboutType = {
  photoUrl: string;
  bio: PortableTextBlock[];
  cvUrl: string;
};

export default function About({ lang, about }: { lang: string, about: AboutType }) {

  const t = getTranslations(lang)

  return (
    <section id="about" className="scroll-mt-26">
      <h1 className="font-noto text-3xl text-navy mb-8 mt-10 text-center">{t.about.title.toUpperCase()}</h1>
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 my-12">
        <div className="w-64 aspect-[3/4] md:w-80 md:h-auto flex-shrink-0 relative">
          <Image
            src={about.photoUrl}
            alt="Foto de perfil"
            fill
            sizes="(min-width: 768px) 320px, 100vw"
            className="rounded-xl object-cover shadow-lg"
            style={{ objectPosition: "center top" }}
          />
        </div>
        <div className="flex flex-col items-center max-w-xl w-full justify-between">
          <div className="mb-6 text-left w-full">
            <PortableText value={about.bio} />
          </div>
          <div className="w-full flex justify-center">
            <a
              href={about.cvUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white px-5 py-2 rounded-full shadow hover:bg-opacity-90 font-raleway transition"
            >
              {t.about.download}
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}
