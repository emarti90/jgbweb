import { Raleway, Playfair_Display } from 'next/font/google'


const raleway = Raleway({
  weight: ['200', '400'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${raleway.variable} ${playfair.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
