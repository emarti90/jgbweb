import { getTranslations } from '@/lib/useTranslations';
import VideoManager from '@/components/VideoManager';
import GalleryManager from '@/components/GalleryManager';
import ProjectsManager from '@/components/ProjectsManager';
import AboutManager from '@/components/AboutManager';

type Params = Promise<{lang : string}>

export default async function HomePage(props: { params: Params }) {

  const params = await props.params;
  const t = getTranslations(params.lang);

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="font-playfair text-3xl text-sage mb-8 text-center">{t.menu.videobook.toUpperCase()}</h1>
      <VideoManager />
      <h1 className="font-playfair text-3xl text-teal mb-8 mt-10 text-center">{t.menu.projects.toUpperCase()}</h1>
      <ProjectsManager />
      <h1 className="font-playfair text-3xl text-teal mb-8 mt-10 text-center">{t.menu.gallery.toUpperCase()}</h1>
      <GalleryManager />
      <h1 className="font-playfair text-3xl text-teal mb-8 mt-10 text-center">{t.menu.about.toUpperCase()}</h1>
      <AboutManager />
    </main>
  );
}
