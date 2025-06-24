// src/components/VideoBook.tsx
import { getVideobook } from "@/lib/getVideobook"
import VideoBook from "./VideoBook"

export default async function VideoManager() {
  const videos = await getVideobook()
  return <VideoBook videos={videos} />
}
