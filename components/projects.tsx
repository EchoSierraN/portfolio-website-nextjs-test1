"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <a
            className="cursor-pointer"
            href={project.url ?? "#"}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            {""}
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
            <div className="m-4"></div>
          </a>
        ))}
      </div>
    </section>
  );
}
