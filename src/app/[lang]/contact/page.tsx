import ContactForm from "@/components/ContactForm";

type Props = { params: Promise<{ lang: string }> }

export default async function ContactPage({ params }: Props ) {
  const { lang } = await params;

  return (
    <main className="max-w-4xl mx-auto p-4">
      <ContactForm lang={lang}/>
    </main>
  )
}
