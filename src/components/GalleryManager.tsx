
import { getGallery } from "@/lib/getGallery";
import Gallery from "./Gallery";

export default async function GalleryManager({ lang }:{ lang:string }) {
  const images = await getGallery();
  return <Gallery lang={lang} images={images} />;
}
