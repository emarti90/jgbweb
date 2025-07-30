import Link from "next/link";
import { getTranslations } from "@/lib/useTranslations";

type Props = { params: Promise<{ lang: string }> }

export default async function AcknowledgePage({ params }: Props) {
  const { lang } = await params;
  const t = getTranslations(lang);

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-xl px-4">
        <h1 className="text-2xl text-navy font-noto mb-4 text-center">{t.ack.title.toUpperCase()}</h1>
        <p className="mb-6 text-navy text-center">{t.ack.desc}</p>
        <div className="flex justify-center">
          <Link
            href={`/${lang}`}
            className="bg-navy text-white font-raleway rounded-full px-5 py-2 shadow hover:bg-opacity-90 transition"
          >
            {t.ack.back}
          </Link>
        </div>
      </div>
    </main>
  );
}
