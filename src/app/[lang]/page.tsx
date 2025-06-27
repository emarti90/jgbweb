import { getTranslations } from '@/lib/useTranslations'
import VideoManager from '@/components/VideoManager'
import GalleryManager from '@/components/GalleryManager'
import ProjectsManager from '@/components/ProjectsManager'
import AboutManager from '@/components/AboutManager'

type Props = { params: Promise<{ lang: string }> }

export default async function HomePage({ params }: Props ) {
  const { lang } = await params;
  const t = getTranslations(lang);

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="font-playfair text-3xl text-sage mb-8 text-center">{t.videobook.title.toUpperCase()}</h1>
      <VideoManager />
      <h1 className="font-playfair text-3xl text-sage mb-8 mt-10 text-center">{t.projects.title.toUpperCase()}</h1>
      <ProjectsManager />
      <h1 className="font-playfair text-3xl text-sage mb-8 mt-10 text-center">{t.gallery.title.toUpperCase()}</h1>
      <GalleryManager />
      <h1 className="font-playfair text-3xl text-sage mb-8 mt-10 text-center">{t.about.title.toUpperCase()}</h1>
      <AboutManager />
    </main>
  )
}
