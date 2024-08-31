import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoSun, GoMoon } from "react-icons/go";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-fuchsia-950 p-3 sm:p-0 text-white border-b-2 sm:border-b-0 border-white relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 z-30 sm:pt-4 sm:pl-3">
          <a
            href="https://github.com/victoriaraya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl transition-all duration-200 ease-in-out transform hover:scale-90" />
          </a>
          <a
            href="https://www.linkedin.com/in/victoria-raya-05a68b29a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl transition-all duration-200 ease-in-out transform hover:scale-90" />
          </a>
        </div>
        <button
          className="text-3xl pr-8 sm:hidden focus:outline-none z-40"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <button className="z-20 text-2xl sm:pr-4 sm:pt-4 transition-all duration-200 ease-in-out transform hover:scale-90">
          <GoMoon />
        </button>
      </div>

      <ul
        className={`flex flex-col sm:flex-row gap-3 sm:gap-8 justify-center items-center text-center text-2xl font-bold bg-fuchsia-950 w-full absolute top-0 left-0 mt-14 sm:mt-0 sm:p-3 z-20 border-b-2 border-white ${
          isOpen ? "block" : "hidden"
        } sm:flex`}
      >
        <li className="hover:[text-shadow:1px_1px_3px_white]">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white]">
          <Link to="/expertise" onClick={() => setIsOpen(false)}>
            Expertise
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white]">
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white]">
          <Link to="/about-me" onClick={() => setIsOpen(false)}>
            About Me
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white] pb-3 sm:pb-0">
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
