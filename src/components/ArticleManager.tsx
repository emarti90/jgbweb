import { getArticleBySlug } from "@/lib/getArticles";
import Article from "./Article";

export default async function ArticleManager({ lang, slug }: { lang: string, slug: string }) {
  const article = await getArticleBySlug({ lang, slug });
  return <Article article={article} />;
}
