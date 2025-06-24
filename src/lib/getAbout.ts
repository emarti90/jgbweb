import { sanity } from "./clientSanity";

export async function getAbout() {
  return await sanity.fetch(`
    *[_type == "cv"][0] {
      photoUrl,
      bio,
      cvUrl
    }
  `);
}
