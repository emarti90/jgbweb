import BlogManager from "@/components/BlogManager";

type Props = { params: Promise<{ lang: string }> }

export default async function BlogPage({ params }: Props ) {
  const { lang } = await params;

  return (
    <main className="max-w-4xl mx-auto p-4">
      <BlogManager lang={lang}/>
    </main>
  )
}
