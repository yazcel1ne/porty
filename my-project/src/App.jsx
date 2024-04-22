import "./App.css";
import "./styles/tailwind.css";
import "/src/styles/transitions.css";

import Hero from "./LandingPage/Hero.jsx";
import MyServices from "./LandingPage/Services/MyServices.jsx";
import Designs from "./LandingPage/Works/Designs.jsx";import TechUsed from "./LandingPage/TechStack/TechUsed.jsx";
function App() {
  return (
    <>
      <div className="bg-gradient-custom h-full pt-12 pb-24 font-raleway">
        <Hero />
      </div>
      <div className="bg-gradient-custom h-full pt-36 pb-24 font-raleway">
        <MyServices />
      </div>
      <div className="bg-gradient-custom h-full py-24 font-raleway">
        <Designs />
      </div>
      <div className="bg-gradient-custom h-full py-24 font-raleway">
        <TechUsed />
      </div>
    </>
  );
}

export default App;
