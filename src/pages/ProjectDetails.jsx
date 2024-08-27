import { useParams, Navigate, Link } from "react-router-dom";
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
      <div className="flex flex-row gap-2">
        {project.technologies.map((tech) => (
          <p>{`${tech}`}</p>
        ))}
      </div>
      <a href={`${project.url}`} target="_blank" rel="noopener noreferrer">
        {project.url.includes("github") ? "See code" : "See website"}
      </a>
      <div>
        {project.images[0].includes("jpg") ? (
          <img
            src={`/images/${project.images[0]}`}
            alt={`${project.name} page`}
            className="h-60 w-1/3"
          />
        ) : (
          project.images.map((image, idx) =>
            idx == 0 ? null : (
              <img
                src={`/images/${image}`}
                alt={`${project.name} page`}
                className="h-60 w-1/3"
              />
            ),
          )
        )}
      </div>
      <p>
        <Link to="/projects">Go back</Link>
      </p>
    </div>
  );
};

export default ProjectDetails;
