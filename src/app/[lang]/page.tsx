import { getTranslations } from '@/lib/useTranslations';

type Props = { params: { lang: string } };

export default function HomePage({ params }: Props) {
  const t = getTranslations(params.lang);

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="font-playfair text-3xl text-clay mb-8">{t.home.title}</h1>
      {/* Aquí las secciones: videobook, proyectos, galería, sobre mí */}
      {/* ... */}
    </main>
  );
}
