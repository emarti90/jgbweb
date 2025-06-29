import { sanity } from "@/lib/clientSanity";

export async function getArticles() {
  return sanity.fetch(`*[_type == "article"] | order(date desc){
    _id, title, slug, summary, date, imageUrl
  }`);
}

export async function getArticleBySlug(slug: string) {
  return sanity.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      _id, title, content, date, imageUrl
    }`, { slug }
  );
}

