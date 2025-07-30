import Image from 'next/image';
import Link from 'next/link';
import LanguageManager from './LanguageManager';
import Navbar from './Navbar';

export default function Header({ lang }: { lang: string }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white flex flex-col items-center">
      <div className="w-full flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-navy.svg"
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10"
            priority
          />
          <span className="flex items-baseline gap-1">
            <span className="font-raleway font-extralight text-2xl text-navy">Javi</span>
            <span className="font-raleway-regular font-bold text-2xl text-navy">Guerrero</span>
          </span>
        </Link>
        <LanguageManager />
      </div>
      <Navbar lang={lang}/>
    </header>
  );
}
