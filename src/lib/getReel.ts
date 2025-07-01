import { sanity } from "./clientSanity";

export async function getReel() {
  return sanity.fetch(`*[_type == "reel"][0]{ videoUrl, poster }`);
}
