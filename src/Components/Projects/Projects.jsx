import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Friend Zone"
          main="this is a bloggin website created in react js and used some component library used some component library"
        />
        <ProjectCard
          title="Dark Light Theme"
          main="this is a bloggin website created in react js and used some component library used some component library"
        />
        <ProjectCard
          title="E-Commerce"
          main="this is a bloggin website created in react js and used some component library used some component library"
        />
      </div>
    </div>
  );
};

export default Projects;
