import React, { useRef } from "react";
import Hero from "./Hero.jsx";
import MyServices from "./Services/MyServices.jsx";
import Designs from "./Works/Designs.jsx";
import TechUsed from "./TechStack/TechUsed.jsx";

function MainLanding() {
  const servicesRef = useRef(null);

  return (
    <>
    <div className=" parallax">
      <div className="bg-gradient-custom h-screen pt-12 pb-24 font-raleway">
        <Hero />
      </div>
      <div id="my-services" className="h-screen pt-36 pb-24 font-raleway">
        <MyServices />
      </div>

      <div className="bg-gradient-custom h-full py-24 font-raleway">
        <Designs />
      </div>
      <div >
        <TechUsed className="h-screen pt-36 pb-24 font-raleway"/>
      </div>
     </div>
    </>
  );
}

export default MainLanding;
