"use client";

import { PROJECTS } from "@/lib/constants";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid gap-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
