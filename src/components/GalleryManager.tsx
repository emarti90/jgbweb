
import { getGallery } from "@/lib/getGallery";
import Gallery from "./Gallery";

export default async function GalleryManager() {
  const images = await getGallery();
  return <Gallery images={images} />;
}
