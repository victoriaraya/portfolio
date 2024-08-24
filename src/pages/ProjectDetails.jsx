import { useParams, Navigate } from "react-router-dom";
import { getProject } from "../projects";

const ProjectDetails = () => {
  const { name } = useParams();
  const project = getProject(name);

  if (!project) {
    return <Navigate to="/not-found" />;
  }

  return (
    <div className="h-screen w-screen mt-0 sm:pt-9 bg-[#b291a4] text-white flex flex-col">
      <p>{project.name}</p>
      <p>{project.description}</p>
      <p>{project.technologies}</p>
    </div>
  );
};

export default ProjectDetails;
