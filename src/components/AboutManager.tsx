import { getAbout } from "@/lib/getAbout";
import About from "./About";

export default async function AboutManager({ lang }:{ lang: string }) {
  const about = await getAbout();
  return <About lang={lang} about={about} />;
}
