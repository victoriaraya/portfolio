import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Expertise from "./pages/Expertise";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="box-border font-gruppo bg-fuchsia-950">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
