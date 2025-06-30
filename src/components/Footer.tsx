"use client";
import { FaInstagram, FaVimeoV, FaXTwitter } from "react-icons/fa6";
import { FaImdb } from "react-icons/fa";

const SOCIALS = [
  { icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/javat.gb/" },
  { icon: FaImdb, label: "IMDB", url: "https://pro.imdb.com/name/nm14862880" },
  { icon: FaXTwitter, label: "X (Twitter)", url: "https://x.com/Javatgb" },
  { icon: FaVimeoV, label: "Vimeo", url: "https://vimeo.com/javiguerrero" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 mt-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center gap-4 md:gap-0">
        {/* Nombre y Email (arriba en móvil, derecha en desktop) */}
        <div className="text-center md:text-right w-full md:w-auto order-1 md:order-2">
          <span className="block font-playfair text-lg mb-1">Javier Guerrero</span>
          <a
            href="mailto:guerrero.actor@gmail.com"
            className="text-white hover:underline"
          >
            guerrero.actor@gmail.com
          </a>
        </div>
        {/* Social Links (abajo en móvil, izquierda en desktop) */}
        <div className="w-full flex justify-center md:justify-start order-2 md:order-1">
          <div className="flex gap-6">
            {SOCIALS.map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-xl p-3 hover:scale-110 transition-colors duration-200 hover:scale-120 text-white"
              >
                <Icon size={28} className="text-inherit" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
