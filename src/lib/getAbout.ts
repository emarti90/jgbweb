import { sanity } from "./clientSanity";

export async function getAbout({ lang }: { lang: string }) {
  const bio = lang === 'en' ? 'bio_en' : 'bio_es'

  return await sanity.fetch(`
    *[_type == "cv"][0] {
      photoUrl,
      "bio":${bio},
      cvUrl
    }
  `);
}