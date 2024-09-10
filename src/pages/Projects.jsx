import { useEffect } from "react";
import { isDark, KeepDarkMode } from "../components/DarkModeButton";
import ProjectTile from "../components/ProjectTile";
import { ProjectList } from "../projects";


const Projects = () => {
  useEffect(() => {
    if (isDark) {
      KeepDarkMode();
    }
  }, []);
  return (
    <div className="min-h-screen w-screen mt-0 pt-4 sm:pt-12 pb-4 sm:pb-8 bg-[#b291a4] text-white grid sm:grid-cols-2 gap-7 sm:gap-9 px-2 sm:px-8 BGtoBlack">
      {ProjectList.map((project, idx) => (
        <ProjectTile project={project} key={idx} />
      ))}
    </div>
  );
};

export default Projects;
