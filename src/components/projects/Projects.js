import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
  projectNine,
  projectTen,
  projectEleven,
  projectTwelve,
  project13,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

      <ProjectsCard
          title="Fianl Point "
          des=" Permanent marker on paper."
          src={projectTen}
        />

<ProjectsCard
          title="Among the stars "
          des=" Permanent marker on paper."
          src={projectEleven}
        />

<ProjectsCard
          title="Euphoria "
          des=" Permanent acrylic marker on paper."
          src={projectTwelve}
        />

<ProjectsCard
          title="Fusion "
          des=" Watercolor & Permanent markers on paper."
          src={project13}
        />

        <ProjectsCard
          title="Handling Sides "
          des=" Permanent marker on paper."
          src={projectOne}
        />
        <ProjectsCard
          title="Our Soul "
          des=" Permanent marker on paper."
          src={projectTwo}
        />
        <ProjectsCard
          title="Warm Story "
          des=" Watercolor & Permanent markers on paper."
          src={projectThree}
        />
        <ProjectsCard
          title="Peps "
          des=" Watercolor & Permanent markers on paper."
          src={projectFour}
        />
        <ProjectsCard
          title="Catch my heart"
          des=" Permanent marker on paper."
          src={projectFive}
        />
        <ProjectsCard
          title="Break ties "
          des=" Permanent marker on paper."
          src={projectSix}
        />
        <ProjectsCard
          title="Matisse  "
          des=" Permanent marker on paper."
          src={projectSeven}
        />
        <ProjectsCard
          title="Not Far "
          des=" Permanent marker on paper."
          src={projectEight}
        />
        <ProjectsCard
          title="Biography  "
          des=" Watercolor & Permanent markers on paper."
          src={projectNine}
        />
      </div>
    </section>
  );
};

export default Projects;
