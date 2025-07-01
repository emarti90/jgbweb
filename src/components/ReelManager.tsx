import { getReel } from "@/lib/getReel";
import Reel from "./Reel";

export default async function ReelManager() {
  const reel = await getReel();
  return <Reel videoUrl={reel.videoUrl} poster={reel.poster} />;
}