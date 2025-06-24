"use client";
import Image from "next/image";

type AboutType = {
  photoUrl: string;
  bio: string;
  cvUrl: string;
};

export default function About({ about }: { about: AboutType }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 my-12">
      <div className="flex-shrink-0">
        <Image
          src={about.photoUrl}
          alt="Foto de perfil"
          width={320}
          height={320}
          className="rounded-xl object-cover shadow-lg w-64 h-128"
        />
      </div>
      <div className="flex flex-col items-center md:items-start max-w-xl">

        <p className="mb-6 text-center md:text-left">{about.bio}</p>
        <a
          href={about.cvUrl}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sage text-white px-5 py-2 rounded-full shadow hover:bg-opacity-90 font-raleway transition"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
}
