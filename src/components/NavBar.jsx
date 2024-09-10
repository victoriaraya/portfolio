import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoSun, GoMoon } from "react-icons/go";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <nav
      className={`p-3 md:p-0 border-b-2 md:border-b-0 border-white relative ${isDarkMode ? "bg-[#332429]" : "bg-fuchsia-950"} ${isDarkMode ? "text-gray-200" : "text-white"}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 z-30 md:pt-4 sm:pl-3">
          <a
            href="https://github.com/victoriaraya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl transition-all duration-200 ease-in-out transform hover:scale-90 dark:grayscale dark:brightness-75" />
          </a>
          <a
            href="https://www.linkedin.com/in/victoria-raya-05a68b29a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl transition-all duration-200 ease-in-out transform hover:scale-90 dark:grayscale dark:brightness-75" />
          </a>
        </div>
        <button
          className="text-3xl pr-8 md:hidden focus:outline-none z-40 dark:grayscale dark:brightness-75"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <button
          className="z-30 text-2xl sm:pr-4 md:pt-4 transition-all duration-200 ease-in-out transform hover:scale-90"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <GoSun className="dark:grayscale dark:brightness-75" />
          ) : (
            <GoMoon />
          )}
        </button>
      </div>

      <ul
        className={`flex flex-col md:flex-row gap-3 sm:gap-8 justify-center items-center text-center text-2xl font-bold w-full absolute top-0 left-0 mt-14 md:mt-0 sm:p-3 z-20 border-b-2 ${isDarkMode ? "border-gray-200" : "border-white"} ${
          isOpen ? "block" : "hidden"
        } md:flex ${isDarkMode ? "bg-[#332429]" : "bg-fuchsia-950"}`}
      >
        <li className="hover:[text-shadow:1px_1px_3px_white] dark:hover:[text-shadow:1px_1px_3px_black]">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white] dark:hover:[text-shadow:1px_1px_3px_black]">
          <Link to="/expertise" onClick={() => setIsOpen(false)}>
            Expertise
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white] dark:hover:[text-shadow:1px_1px_3px_black]">
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white] dark:hover:[text-shadow:1px_1px_3px_black]">
          <Link to="/about-me" onClick={() => setIsOpen(false)}>
            About Me
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white] pb-3 sm:pb-0 dark:hover:[text-shadow:1px_1px_3px_black]">
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
