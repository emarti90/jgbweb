"use client";

import { useState } from "react";
import { FiMail, FiUser, FiMessageCircle } from "react-icons/fi";
import { FaInstagram, FaXTwitter, FaVimeo, FaEnvelope } from "react-icons/fa6";
import { FaImdb } from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Simula envío (aquí iría tu API real)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Aquí tu lógica real de envío
      await new Promise(res => setTimeout(res, 1000));
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4">
      {/* Mensaje de bienvenida */}
      <h1 className="text-sage font-playfair text-3xl text-center mb-4">¡Hablemos!</h1>
      <p className="text-sage font-raleway text-lg text-center max-w-xl mb-8">
        Si quieres contactar conmigo para un proyecto, colaboración o cualquier consulta, puedes escribirme directamente o a través del formulario.
      </p>

      {/* Redes sociales centradas */}
      <div className="flex gap-4 mb-8 justify-center">
        <a
          href="https://instagram.com/javat.gb"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-sage rounded-full p-3 flex items-center justify-center hover:scale-120 transition"
          title="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://pro.imdb.com/name/nm14862880"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-sage rounded-full p-3 flex items-center justify-center hover:scale-120 transition"
          title="IMDB"
        >
          <FaImdb size={24} />
        </a>
        <a
          href="https://x.com/Javatgb"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-sage rounded-full p-3 flex items-center justify-center hover:scale-120 transition"
          title="X / Twitter"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="https://vimeo.com/javiguerrero"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-sage rounded-full p-3 flex items-center justify-center hover:scale-120 transition"
          title="Vimeo"
        >
          <FaVimeo size={24} />
        </a>
        <a
          href="mailto:guerreroactor@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-sage rounded-full p-3 flex items-center justify-center hover:scale-120 transition"
          title="Mail"
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="bg-sage bg-opacity-90 p-8 rounded-xl shadow-lg flex flex-col gap-6 w-full max-w-xl"
        autoComplete="off"
      >
        <label className="flex flex-col gap-2">
          <span className="font-raleway text-sm text-white flex items-center gap-2">
            <FiUser /> Nombre
          </span>
          <input
            required
            type="text"
            className="bg-white rounded-full px-3 py-2 placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-cream transition"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder="Tu nombre"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-raleway text-sm text-white flex items-center gap-2">
            <FiMail /> Email
          </span>
          <input
            required
            type="email"
            className="bg-white rounded-full px-3 py-2 placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-cream transition"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            placeholder="tu@email.com"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-raleway text-sm text-white flex items-center gap-2">
            <FiMessageCircle /> Mensaje
          </span>
          <textarea
            required
            rows={5}
            className="bg-white rounded-xl px-3 py-2 resize-none placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-cream transition"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            placeholder="Escribe tu mensaje..."
          />
        </label>
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-cream text-black font-raleway rounded-full px-5 py-2 mt-2 shadow hover:bg-opacity-90 transition"
        >
          {status === "loading" ? "Enviando..." : "Enviar"}
        </button>
        {status === "success" && (
          <span className="text-green-700 text-center mt-2">¡Mensaje enviado con éxito!</span>
        )}
        {status === "error" && (
          <span className="text-red-600 text-center mt-2">Error al enviar. Inténtalo de nuevo.</span>
        )}
      </form>
    </main>
  );
}
