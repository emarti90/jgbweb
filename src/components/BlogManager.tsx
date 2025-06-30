import { getArticles } from "@/lib/getArticles";
import Blog from "./Blog";

export default async function BlogManager({ lang }: { lang: string }) {
  const articles = await getArticles({ lang });
  return <Blog lang={lang} articles={articles} />;
}
