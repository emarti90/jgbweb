"use client";

import Link from "next/link";
import { getTranslations } from "@/lib/useTranslations";

// Ahora el componente recibe el idioma como prop
export default function Navbar({ lang }: { lang: string }) {
  const t = getTranslations(lang);
  console.log(lang)
  // Secciones con keys de traducción
  const NAV_SECTIONS = [
    { id: "videobook", label: t.menu.videobook, link: "#videobook", type: "section" },
    { id: "projects", label: t.menu.projects, link: "#projects", type: "section" },
    { id: "gallery", label: t.menu.gallery, link: "#gallery", type: "section" },
    { id: "about", label: t.menu.about, link: "#about", type: "section" },
    { id: "contact", label: t.menu.contact, link: "/contact", type: "page" },
    { id: "blog", label: t.menu.blog, link: "/blog", type: "page" },
  ];

  // Scroll suave
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="w-full bg-white py-3 px-6 flex text-teal justify-center items-center sticky top-0 z-40">
      <ul className="flex space-x-6 font-raleway text-base uppercase">
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
    </nav>
  );
}
