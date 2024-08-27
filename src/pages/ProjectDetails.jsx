import { useParams, Navigate, Link } from "react-router-dom";
import { getProject } from "../projects";
import { GoArrowUpRight } from "react-icons/go";

const ProjectDetails = () => {
  const { name } = useParams();
  const project = getProject(name);

  if (!project) {
    return <Navigate to="/not-found" />;
  }

  return (
    <div className="min-h-screen w-screen mt-0 sm:pt-9 px-6 bg-[#b291a4] text-white text-2xl flex flex-col">
      <p className="flex justify-end z-20 -mt-3">
        <Link to="/projects" className="hover:[text-shadow:1px_1px_3px_white]">
          Go back
        </Link>
      </p>
      <div className="grid grid-cols-2 grid-rows-3">
        <h1 className="col-span-2 text-8xl -mt-6">{project.name}</h1>
        <p className="justify-left row-start-2 -mt-4">
          <a
            href={`${project.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            <GoArrowUpRight className="text-xl" />
            {project.url.includes("github") ? "See code" : "See website"}
          </a>
        </p>
        <div className="row-start-3 flex flex-col -mt-20 mr-5">
          <span className="pb-2">Tools used:</span>
          <span className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                className="bg-slate-300 bg-opacity-35 rounded-md p-1"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </span>
        </div>
        <p className="row-span-2 text-left px-2 -mt-10">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-4 pt-8 pb-3 px-5">
        {project.images[0].includes("jpg")
          ? null
          : project.images.map((image, idx) =>
              idx == 0 ? null : (
                <img
                  src={`/images/${image}`}
                  alt={`${project.name} page`}
                  key={idx}
                  className="rounded-sm border-2 border-white"
                />
              ),
            )}
      </div>
    </div>
  );
};

export default ProjectDetails;
