import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { name } = useParams();

  return (
    <div className="h-screen w-screen mt-0 sm:pt-9 bg-[#b291a4] text-white">
      <div>{name}</div>
    </div>
  );
};

export default ProjectDetails;
