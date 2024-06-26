import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { projectData } from "@/constants";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full p-4 w-full flex flex-col lg:grid lg:grid-cols-2 lg:flex-row  gap-10 px-10">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link}
            features={project.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
