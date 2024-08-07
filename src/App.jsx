import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="box-border font-gruppo bg-fuchsia-400">
      <NavBar />
      <Home />
      <footer className="text-center p-4 text-xl text-white font-semibold">
        Made by Victoria Raya
      </footer>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
