import React from "react";
import Hero from "./Hero.jsx";
import MyServices from "./Services/MyServices.jsx";
import Designs from "./Works/Designs.jsx";
import TechUsed from "./TechStack/TechUsed.jsx";

function MainLanding() {
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

export default MainLanding;
