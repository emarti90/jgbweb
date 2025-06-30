import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from '@/lib/useTranslations';

type Article = {
  _id: string;
  title: string;
  summary: string;
  slug: { current: string };
  imageUrl?: string;
  date?: string;
};


export default function Blog({ lang, articles }: { lang: string, articles: Array<Article> }) {

  const t = getTranslations(lang)

  return (
    <section className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-playfair mb-10 text-sage text-center">{t.blog.title}</h1>
      <div className="flex flex-col gap-8">
        {articles.map(article => (
          <Link
            key={article._id}
            href={`/${lang}/blog/${article.slug.current}`}
            className="group flex flex-row items-center gap-6 p-4 bg-sage rounded-xl shadow hover:shadow-lg transition text-white"
          >
            {article.imageUrl && (
              <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center rounded overflow-hidden bg-white/10">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-center w-full mb-1">
                <h2 className="text-lg font-bold font-playfair text-clay group-hover:underline transition">
                  {article.title}
                </h2>
                {article.date && (
                  <span className="text-xs text-white/70 ml-4 whitespace-nowrap">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                )}
              </div>
              <p className="text-sm">{article.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
