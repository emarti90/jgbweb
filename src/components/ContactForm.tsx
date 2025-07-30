"use client";

import { FiMail, FiUser, FiMessageCircle } from "react-icons/fi";
import { FaInstagram, FaXTwitter, FaVimeo, FaEnvelope } from "react-icons/fa6";
import { FaImdb } from "react-icons/fa";
import { getTranslations } from "@/lib/useTranslations";

export default function ContactForm({ lang }: { lang: string }) {

  const t = getTranslations(lang)

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4">
      {/* Mensaje de bienvenida */}
      <h1 className="text-navy font-noto text-3xl text-center mb-4">{t.contact.title.toUpperCase()}</h1>
      <p className="text-navy font-raleway text-lg text-center max-w-xl mb-8">
        {t.contact.subtitle}
      </p>

      {/* Redes sociales centradas */}
      <div className="flex gap-4 mb-8 justify-center">
        <a
          href="https://instagram.com/javat.gb"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-navy rounded-full p-3 flex items-center justify-center hover:scale-120 transition"
          title="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://pro.imdb.com/name/nm14862880"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-navy rounded-full p-3 flex items-center justify-center hover:scale-120 transition"
          title="IMDB"
        >
          <FaImdb size={24} />
        </a>
        <a
          href="https://x.com/Javatgb"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-navy rounded-full p-3 flex items-center justify-center hover:scale-120 transition"
          title="X / Twitter"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="https://vimeo.com/javiguerrero"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-navy rounded-full p-3 flex items-center justify-center hover:scale-120 transition"
          title="Vimeo"
        >
          <FaVimeo size={24} />
        </a>
        <a
          href="mailto:guerreroactor@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-navy rounded-full p-3 flex items-center justify-center hover:scale-120 transition"
          title="Mail"
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      {/* Formulario */}
      <form
        action="https://formsubmit.co/guerrero.actor@gmail.com"
        method="POST"
        className="bg-navy bg-opacity-90 p-8 rounded-xl shadow-lg flex flex-col gap-6 w-full max-w-xl"
        autoComplete="off"
        >
        {/* Añadir un campo oculto para evitar spam */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={`https://www.javiguerreroactor.com/${lang}/acknowledge`} />

        <label className="flex flex-col gap-2">
            <span className="font-raleway text-sm text-white flex items-center gap-2">
            <FiUser /> {t.contact.name}
            </span>
            <input
            required
            type="text"
            name="name"
            className="bg-white rounded-full px-3 py-2 placeholder:text-navy focus:outline-none focus:ring-2 focus:ring-azure transition"
            placeholder={t.contact.name_preview}
            />
        </label>
        <label className="flex flex-col gap-2">
            <span className="font-raleway text-sm text-white flex items-center gap-2">
            <FiMail /> {t.contact.email}
            </span>
            <input
            required
            type="email"
            name="email"
            className="bg-white rounded-full px-3 py-2 placeholder:text-navy focus:outline-none focus:ring-2 focus:ring-azure transition"
            placeholder="example@email.com"
            />
        </label>
        <label className="flex flex-col gap-2">
            <span className="font-raleway text-sm text-white flex items-center gap-2">
            <FiMessageCircle /> {t.contact.message}
            </span>
            <textarea
            required
            name="message"
            rows={5}
            className="bg-white rounded-xl px-3 py-2 resize-none placeholder:text-navy focus:outline-none focus:ring-2 focus:ring-azure transition"
            placeholder={t.contact.message_preview}
            />
        </label>
        <button
            type="submit"
            className="bg-mist text-azure font-raleway rounded-full px-5 py-2 mt-2 shadow hover:font-bold transition"
        >
            {t.contact.submit}
        </button>
        </form>

    </main>
  );
}
