import { sanity } from "@/lib/clientSanity";

export async function getArticles({ lang }: { lang: string }) {
  const title = lang === 'en' ? 'title_en' : 'title_es'
  const slug = lang === 'en' ? 'slug_en' : 'slug_es'
  const summary = lang === 'en' ? 'summary_en' : 'summary_es'

  return sanity.fetch(`*[_type == "article"] | order(date desc){
    _id, "title":${title}, "slug":${slug}, "summary":${summary}, date, imageUrl
  }`);
}

export async function getArticleBySlug({ lang, slug }: {lang: string, slug: string }) {
  const title = lang === 'en' ? 'title_en' : 'title_es'
  const content = lang === 'en' ? 'content_en' : 'content_es'
  const article = lang === 'en' ? 'slug_en' : 'slug_es'
  return sanity.fetch(
    `*[_type == "article" && ${article}.current == $slug][0]{
      _id, "title":${title}, "content":${content}, date, imageUrl
    }`, { slug }
  );
}

