import { Dialog } from "@headlessui/react";
import ReactTyped from "react-typed";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Modal from "./components/Modal.js";
import About from "./components/About.js";
import Comments from "./components/Comments.js";

function App() {
  return (
    <div>
      <div className="bg-black h-screen text-zinc-100 relative">
        <Header />
        <Hero />
      </div>
      <About />
      <Comments />
    </div>
  );
}

export default App;
