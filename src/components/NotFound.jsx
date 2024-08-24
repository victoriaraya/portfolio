import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full pt-12 sm:pt-44 px-2  text-white flex flex-col items-center text-2xl text-center">
      <p>We couldn't find the page you were looking for.</p>
      <p className="pt-3">
        There may be an error in the URL entered into your web browser. Please
        check the URL and try again.
      </p>
      <p className="pt-3">
        You can return to the homepage by clicking
        <span className="hover:[text-shadow:1px_1px_3px_white]">
          <Link to="/"> here</Link>
        </span>
        .
      </p>
    </div>
  );
};

export default NotFound;
