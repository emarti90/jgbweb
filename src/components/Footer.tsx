"use client";
import SocialLinks from "@/components/Social";

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
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
