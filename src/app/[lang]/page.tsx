import { getTranslations } from '@/lib/useTranslations';
import VideoManager from '@/components/VideoManager';
import GalleryManager from '@/components/GalleryManager';
import ProjectsManager from '@/components/ProjectsManager';
import AboutManager from '@/components/AboutManager';

export default function HomePage({ params }: { params: { lang: string } }) {
  const t = getTranslations(params.lang);

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="font-playfair text-3xl text-clay mb-8 text-center">{t.menu.videobook}</h1>
      <VideoManager />
      <h1 className="font-playfair text-3xl text-clay mb-8 mt-10 text-center">{t.menu.projects}</h1>
      <ProjectsManager />
      <h1 className="font-playfair text-3xl text-clay mb-8 mt-10 text-center">{t.menu.gallery}</h1>
      <GalleryManager />
      <h1 className="font-playfair text-3xl text-clay mb-8 mt-10 text-center">{t.menu.about}</h1>
      <AboutManager />
    </main>
  );
}
