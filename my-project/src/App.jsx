import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./styles/tailwind.css";
import "/src/styles/transitions.css";

import Hero from "./LandingPage/Hero.jsx";
import MyServices from "./LandingPage/Services/MyServices.jsx";
import TechUsed from "./LandingPage/TechStack/TechUsed.jsx";
function App() {
  return (
    <>
      <div className="bg-gradient-custom h-screen py-10 font-raleway">
        <Hero />
      </div>
      <div className="bg-gradient-custom h-screen py-10 font-raleway">
        <MyServices />
      </div>
      <div className="bg-gradient-custom h-screen py-10 font-raleway">
        <TechUsed />
      </div>
    </>
  );
}

export default App;
