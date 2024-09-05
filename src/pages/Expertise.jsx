import ExpertiseTile from "../components/ExpertiseTile";
import { expertiseList } from "../expertise";

const Expertise = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-2 grid-rows-2 sm:pt-12 px-14 pb-8 gap-x-14 gap-y-6 text-white text-2xl text-center">
      <ExpertiseTile expertise={expertiseList[0]} />
      <ExpertiseTile expertise={expertiseList[1]} />
      <ExpertiseTile expertise={expertiseList[2]} />
      <ExpertiseTile expertise={expertiseList[3]} />
    </div>
  );
};

export default Expertise;
