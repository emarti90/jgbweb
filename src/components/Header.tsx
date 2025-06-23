import Image from 'next/image';
import Link from 'next/link';
import LanguageManager from './LanguageManager';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white">
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src="/logo-clay.svg"
          alt="Logo"
          width={40}
          height={40}
          className="w-10 h-10"
          priority
        />
        <span className="flex items-baseline gap-1">
          <span className="font-raleway font-extralight text-2xl text-clay">Javi</span>
          <span className="font-raleway-regular font-bold text-2xl text-clay">Guerrero</span>
        </span>
      </Link>
      <LanguageManager />
    </header>
  );
}
