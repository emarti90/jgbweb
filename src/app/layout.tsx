import { Raleway, Noto_Sans } from 'next/font/google'


const raleway = Raleway({
  weight: ['200', '400'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const notoSans = Noto_Sans({
  weight: ['300', '400'],       // 300 = Light (títulos), 400 = Regular
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${raleway.variable} ${notoSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
