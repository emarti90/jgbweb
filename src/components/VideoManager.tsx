import { getVideobook } from "@/lib/getVideobook"
import VideoBook from "./VideoBook"

export default async function VideoManager({ lang }: { lang: string }) {
  const videos = await getVideobook()
  return <VideoBook lang= {lang} videos={videos} />
}
