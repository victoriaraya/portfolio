import ExpertiseTile from "../components/ExpertiseTile";
import { expertiseList } from "../expertise";

const Expertise = () => {
  return (
    <div className="h-screen w-full pt-12 sm:pt-12 px-2 gap-5 text-white flex text-2xl text-center">
      <div>languages</div>
      <div>frontend</div>
      <div>backend</div>
      <div>soft skills</div>
      <ExpertiseTile expertise={expertiseList[0]} />
    </div>
  );
};

export default Expertise;
