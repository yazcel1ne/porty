import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./styles/tailwind.css";
import Hero from "./LandingPage/Hero.jsx";
import MyServices from "./LandingPage/Services/MyServices.jsx";

function App() {
  return (
    <>
      <div className="bg-gradient-custom h-screen py-10 font-raleway">
        <Hero />
      </div>
      <div>
        <MyServices />
      </div>
    </>
  );
}

export default App;
