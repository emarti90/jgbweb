import '../globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer';
import ReelManager from '@/components/ReelManager';

export default async function LangLayout({ children, params }: { children: React.ReactNode, params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <>
      <Header lang={lang}/>
      <ReelManager />
        {children}
      <Footer />
    </>
  );
}