import { Dialog } from "@headlessui/react";
import ReactTyped from "react-typed";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";

function App() {
  return (
    <div>
      <div className="bg-black h-screen text-zinc-100 relative">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
