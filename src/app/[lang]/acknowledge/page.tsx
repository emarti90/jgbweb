import Link from "next/link";
import { getTranslations } from "@/lib/useTranslations";

type Props = { params: Promise<{ lang: string }> }

export default async function AcknowledgePage({ params }: Props) {
  const { lang } = await params;
  const t = getTranslations(lang);

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl text-navy font-noto mb-4">{t.ack.title.toUpperCase()}</h1>
      <p className="mb-6 text-navy">{t.ack.desc}</p>
      <Link
        href={`/${lang}`}
        className="bg-cream text-black font-raleway rounded-full px-5 py-2 shadow hover:bg-opacity-90 transition"
      >
        {t.ack.back}
      </Link>
    </main>
  );
}
