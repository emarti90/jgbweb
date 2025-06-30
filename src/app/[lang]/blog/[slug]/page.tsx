import ArticleManager from "@/components/ArticleManager";

type Props = { params: Promise<{ lang:string, slug: string }> }

export default async function ArticlePage({ params }: Props ) {
  const { lang, slug } = await params

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
        <ArticleManager lang={lang} slug={slug}/>
    </main>
  );
}
