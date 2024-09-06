const ExpertiseTile = (props) => {
  const e = props.expertise;
  return (
    <div className="bg-slate-300 bg-opacity-35 rounded-md p-1 flex flex-col">
      <div className="text-4xl py-1 [text-shadow:2px_2px_2px_black]">
        {e.title}
      </div>
      <div className="text-2xl pb-1 border-b-4 border-double border-white w-3/4 self-center">
        {e.subtitle}
      </div>
      <div className="text-xl grow content-center pb-1 px-2 pt-1 sm:pt-0">
        {e.description}
      </div>
    </div>
  );
};

export default ExpertiseTile;
