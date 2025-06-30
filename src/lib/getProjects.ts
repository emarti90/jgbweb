import { sanity } from "./clientSanity";

export async function getProjects({ lang }: {lang: string}) {
  const title = lang === 'en' ? 'title_en' : 'title_es'
  const desc = lang === 'en' ? 'description_en' : 'description_es'

  return await sanity.fetch(`
    *[_type == "project"]{
    _id,
    url,
    tags,
    "title": ${title},
    "description": ${desc}
  }
  `);
}
