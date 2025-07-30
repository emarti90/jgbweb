"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { getTranslations } from "@/lib/useTranslations";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ lang }: { lang: string }) {
  const t = getTranslations(lang);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const NAV_SECTIONS = [
    { id: "videobook", label: t.menu.videobook, link: `/${lang}#videobook` },
    { id: "projects", label: t.menu.projects, link: `/${lang}#projects` },
    { id: "gallery", label: t.menu.gallery, link: `/${lang}#gallery` },
    { id: "about", label: t.menu.about, link: `/${lang}#about`},
    { id: "contact", label: t.menu.contact, link: `/${lang}/contact` },
    { id: "blog", label: t.menu.blog, link: `/${lang}/blog` },
  ];

  // Cierra el menú al hacer click fuera
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <nav className="w-full bg-white py-3 px-6 flex justify-center items-center text-navy sticky top-0 z-40">
      {/* Desktop navbar */}
      <ul className="hidden md:flex space-x-6 font-raleway text-base uppercase">
        {NAV_SECTIONS.map(({ id, label, link }) => (
          <li key={id}>
            <Link
              href={link}
              className="hover:font-bold transition-colors cursor-pointer"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburguesa solo en mobile */}
      <div className="md:hidden flex justify-center items-center w-full py-2">
        <button
            className="text-3xl text-navy"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
        >
            <FiMenu />
        </button>
      </div>

      {/* Menú desplegable */}
        {menuOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white bg-opacity-50 text-navy flex flex-col items-center animate-fade-in">
            {/* Botón de cierre */}
            <button
            className="absolute top-4 right-6 text-2xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
            >
            <FiX />
            </button>
            <ul className="mt-8 w-full px-4 space-y-6 font-raleway text-base uppercase text-center">
            {NAV_SECTIONS.map(({ id, label, link }) => (
                <li key={id} className="w-full">
                  <Link
                    href={link}
                    className="block py-2 hover:font-bold transition-colors cursor-pointer w-full"
                    onClick={() => setMenuOpen(false)}
                    >
                    {label}
                  </Link>
                </li>
            ))}
            </ul>
        </div>
        )}
    </nav>
  );
}
