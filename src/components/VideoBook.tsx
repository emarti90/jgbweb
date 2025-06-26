"use client"

type Video = {
  _id: string
  title: string
  vimeoUrl: string
  main?: boolean
}

function extractVimeoId(url: string): string | null {
  const match = url.match(/vimeo\.com\/(\d+)/)
  return match ? match[1] : null
}

export default function VideoBook({ videos }: { videos: Video[] }) {
  if (!videos.length) return <div>No hay vídeos disponibles.</div>

  const mainVideo = videos.find((v) => v.main) || videos[0]
  const otherVideos = videos.filter((v) => v._id !== mainVideo._id)

  return (
    <section id="videobook">
       {/* Video principal grande */}
      <div className="mb-8 w-full">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={`https://player.vimeo.com/video/${extractVimeoId(mainVideo.vimeoUrl)}?title=0&byline=0&portrait=0`}
            width="100%"
            height="100%"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            title={mainVideo.title}
            loading="lazy"
          />
        </div>
        <h3 className="font-raleway text-lg text-sage text-center p-3">{mainVideo.title}</h3>
      </div>

      {/* Fila de videos secundarios */}
      <div
        className="flex flex-col md:flex-row gap-8 md:gap-6 pb-2 w-full md:overflow-x-auto md:whitespace-nowrap items-center md:items-stretch"
      >
        {otherVideos.map((video) => (
          <div
            key={video._id}
            className="w-full md:min-w-[320px] md:max-w-md md:flex-shrink-0"
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe
                src={`https://player.vimeo.com/video/${extractVimeoId(video.vimeoUrl)}?title=0&byline=0&portrait=0`}
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                title={video.title}
                loading="lazy"
              />
            </div>
            <span className="font-raleway text-sage text-sm px-2 pb-2 pt-1 block text-center mt-2">
              {video.title}
            </span>
          </div>
        ))}
      </div>

    </section>
  )
}
