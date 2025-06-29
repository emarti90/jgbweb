import VideoManager from '@/components/VideoManager'
import GalleryManager from '@/components/GalleryManager'
import ProjectsManager from '@/components/ProjectsManager'
import AboutManager from '@/components/AboutManager'

type Props = { params: Promise<{ lang: string }> }

export default async function HomePage({ params }: Props ) {
  const { lang } = await params;

  return (
    <main className="max-w-4xl mx-auto p-4">
      <VideoManager lang={lang}/>
      <ProjectsManager lang={lang} />
      <GalleryManager lang={lang} />
      <AboutManager lang={lang}/>
    </main>
  )
}
