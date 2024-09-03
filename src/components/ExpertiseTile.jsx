const ExpertiseTile = (props) => {
  const e = props.expertise;
  return (
    <div>
      <div>{e.title}</div>
      <div>{e.description}</div>
    </div>
  );
};

export default ExpertiseTile;
