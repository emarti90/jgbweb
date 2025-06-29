// src/components/ProjectsManager.tsx
import { getProjects } from "@/lib/getProjects";
import Projects from "./Projects";

export default async function ProjectsManager({ lang }: { lang: string }) {
  const projects = await getProjects();
  return <Projects lang={lang} projects={projects} />;
}
