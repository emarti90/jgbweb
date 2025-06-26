import '../globals.css'

import Header from '@/components/Header'

// Importa Google Fonts (Next.js 13+)
import { Raleway, Playfair_Display } from 'next/font/google'


const raleway = Raleway({
  weight: ['200', '400'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const ralewayRegular = Raleway({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-raleway-regular',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export default function RootLayout({ children, params }: { children: React.ReactNode, params: { lang: string } }) {
  return (
    <html lang={params.lang} className={`${raleway.variable} ${ralewayRegular.variable} ${playfair.variable}`}>
      <body>
        <Header lang={params.lang}/>
        {children}
      </body>
    </html>
  );
}