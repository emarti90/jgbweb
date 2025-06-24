import { getAbout } from "@/lib/getAbout";
import About from "./About";

export default async function AboutManager() {
  const about = await getAbout();
  return <About about={about} />;
}
