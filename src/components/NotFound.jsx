import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h3>We couldn't find the page you were looking for.</h3>
      <p>
        There may be an error in the URL entered into your web browser. Please
        check the URL and try again.
      </p>
      <p>
        💗 You can return to our homepage by clicking
        <span className="return-home">
          <Link to="/"> here</Link>
        </span>{" "}
        💗
      </p>
    </div>
  );
};

export default NotFound;
