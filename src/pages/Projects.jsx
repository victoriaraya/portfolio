import ProjectTile from "../components/ProjectTile";

const Projects = () => {
  let project1 = {
    name: "Groovy",
    description: "grovvy shbs adlhbs hs",
  };

  let project2 = {
    name: "victorias shop",
    description: "e commersjdknf ksj ",
  };

  return (
    <div className="h-screen w-screen mt-0 sm:pt-9 bg-[#b291a4] text-white grid sm:grid-cols-3 sm:gap-3 sm:px-2">
      <div>
        <ProjectTile project={project1} />
      </div>
      <div>
        <ProjectTile project={project2} />
      </div>
    </div>
  );
};

export default Projects;
