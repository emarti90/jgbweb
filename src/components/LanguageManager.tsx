'use client';

import { usePathname, useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const LANGS = [
  { code: 'es', label: 'ES', flag: '/flags/es.svg' },
  { code: 'en', label: 'EN', flag: '/flags/uk.svg' },
];

export default function LanguageManager() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const currentLang = params.lang as string || 'es';

  const handleChange = (lang: string) => {
    if (lang === currentLang) return;
    const segments = pathname.split('/');
    segments[1] = lang;
    const newPath = segments.join('/') || '/';
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      {LANGS.map(l => {
        const isSelected = currentLang === l.code;
        return (
          <button
            key={l.code}
            className={`
              flex items-center gap-1 px-2 py-1 rounded transition
              ${isSelected 
                ? 'bg-white text-navy border-2 border-navy md:border-2 md:border-navy'
                : 'bg-white text-navy border-2 border-transparent md:border-2 md:border-transparent'}
            `}
            onClick={() => handleChange(l.code)}
          >
            <Image src={l.flag} alt={l.label} width={20} height={20} className="w-5 h-5" />
            <span className="font-raleway font-normal hidden md:inline">{l.label}</span>
          </button>

        );
      })}
    </div>
  );
}
