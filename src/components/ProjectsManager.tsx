// src/components/ProjectsManager.tsx
import { getProjects } from "@/lib/getProjects";
import Projects from "./Projects";

export default async function ProjectsManager() {
  const projects = await getProjects();
  return <Projects projects={projects} />;
}
