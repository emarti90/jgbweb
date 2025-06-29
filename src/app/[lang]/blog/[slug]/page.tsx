import { getArticleBySlug } from "@/lib/getArticles";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> }

export default async function ArticlePage({ params }: Props ) {
  const { slug } = await params
  const article = await getArticleBySlug(slug);
  if (!article) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      {article.imageUrl && (
        <div className="mb-6">
          <Image src={article.imageUrl} alt={article.title} width={900} height={500} className="rounded-xl object-cover w-full" />
        </div>
      )}
      <h1 className="text-3xl font-playfair text-sage mb-3">{article.title}</h1>
      <div className="text-gray-500 text-sm mb-6">{new Date(article.date).toLocaleDateString()}</div>
      <div className="prose max-w-none">
        <PortableText value={article.content} />
      </div>
    </article>
  );
}
