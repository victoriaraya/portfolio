import { Link } from "react-router-dom";

const ProjectTile = (props) => {
  const project = props.project;

  return (
    <div className="relative text-white group dark:text-gray-100">
      <Link to={`/projects/${project.name}`}>
        {project.images[0].includes("mp4") ? (
          <video
            autoPlay
            muted
            loop
            className="transition-all duration-200 ease-in-out transform group-hover:scale-95 rounded-sm group-hover:bg-black group-hover:opacity-60 dark:group-hover:bg-gray-800 dark:grayscale dark:brightness-75"
          >
            <source src={`/images/${project.images[0]}`} type="video/mp4" />
          </video>
        ) : (
          <img
            src={`/images/${project.images[0]}`}
            alt={`${project.name}`}
            className="transition-all duration-200 ease-in-out transform group-hover:scale-95 rounded-sm group-hover:bg-black group-hover:opacity-60 dark:group-hover:bg-gray-800 dark:grayscale dark:brightness-75"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-sm">
          <p className="text-2xl font-black dark:text-gray-200">See project</p>
        </div>
      </Link>
      <p className="text-2xl mt-1 sm:mt-2">
        {project.name} - {project.category}
      </p>
    </div>
  );
};

export default ProjectTile;
