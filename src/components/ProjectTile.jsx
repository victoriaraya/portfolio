import { Link } from "react-router-dom";

const ProjectTile = (props) => {
  const project = props.project;

  return (
    <div className="bg-purple-600 text-white">
      <Link to={`/projects/${project.name}`}>
        <p>{project.name}</p>
      </Link>
    </div>
  );
};

export default ProjectTile;
