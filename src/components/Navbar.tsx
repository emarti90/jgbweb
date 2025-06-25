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
    { id: "videobook", label: t.menu.videobook, link: "#videobook", type: "section" },
    { id: "projects", label: t.menu.projects, link: "#projects", type: "section" },
    { id: "gallery", label: t.menu.gallery, link: "#gallery", type: "section" },
    { id: "about", label: t.menu.about, link: "#about", type: "section" },
    { id: "contact", label: t.menu.contact, link: "/contact", type: "page" },
    { id: "blog", label: t.menu.blog, link: "/blog", type: "page" },
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

  // Scroll suave (solo para secciones)
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="w-full bg-white py-3 px-6 flex justify-center items-center sticky top-0 z-40">
      {/* Desktop navbar */}
      <ul className="hidden md:flex space-x-6 font-raleway text-base uppercase">
        {NAV_SECTIONS.map(({ id, label, link, type }) => (
          <li key={id}>
            {type === "section" ? (
              <a
                href={link}
                onClick={e => handleScroll(e, id)}
                className="hover:font-bold transition-colors cursor-pointer"
              >
                {label}
              </a>
            ) : (
              <Link
                href={link}
                className="hover:font-bold transition-colors cursor-pointer"
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Hamburguesa solo en mobile */}
      <div className="md:hidden flex justify-center items-center w-full py-2">
  <button
    className="text-3xl text-sage"
    onClick={() => setMenuOpen(true)}
    aria-label="Abrir menú"
  >
    <FiMenu />
  </button>
</div>

      {/* Menú desplegable */}
{menuOpen && (
  <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white bg-opacity-50 text-sage flex flex-col items-center animate-fade-in">
    {/* Botón de cierre */}
    <button
      className="absolute top-4 right-6 text-2xl"
      onClick={() => setMenuOpen(false)}
      aria-label="Cerrar menú"
    >
      <FiX />
    </button>
    <ul className="mt-8 w-full px-4 space-y-6 font-raleway text-base uppercase text-center">
      {NAV_SECTIONS.map(({ id, label, link, type }) => (
        <li key={id} className="w-full">
          {type === "section" ? (
            <a
              href={link}
              onClick={e => handleScroll(e, id)}
              className="block py-2 hover:font-bold transition-colors cursor-pointer w-full"
            >
              {label}
            </a>
          ) : (
            <Link
              href={link}
              className="block py-2 hover:font-bold transition-colors cursor-pointer w-full"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
)}

    </nav>
  );
}
