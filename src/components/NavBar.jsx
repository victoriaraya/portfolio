import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="flex flex-row gap-8 justify-center text-center p-3 text-2xl text-white font-bold border-b-2 border-white">
      <li className="hover:[text-shadow:1px_1px_3px_white]">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:[text-shadow:1px_1px_3px_white]">
        <Link to="/expertise">Expertise</Link>
      </li>
      <li className="hover:[text-shadow:1px_1px_3px_white]">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="hover:[text-shadow:1px_1px_3px_white]">
        <Link to="/about-me">About Me</Link>
      </li>
      <li className="hover:[text-shadow:1px_1px_3px_white]">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default NavBar;
