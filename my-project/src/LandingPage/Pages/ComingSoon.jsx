import React, { useRef, useEffect } from "react";
import LearnMore from "../../Components/LearnMore";
import { BouncingImage, BouncingSmall } from "../../assets/BouncingBall";

import FadeUpHeader from "../../assets/FadeUpHeader";
import NavBar from "../NavBar";

const ComingSoon = () => {
  return (
    <>
    <NavBar/>
      <div className=" relative h-screen font-raleway ">
        <img
          src="src/Images/donutflip.png"
          alt="bg"
          class="absolute top-0 left-0"
        />
   
        <div className=" min-h-screen flex flex-col items-center justify-center bg-gradient-custom">
          <h1 className="text-6xl font-semibold text-white mb-4">
            Coming Soon!
          </h1>
          <p className="gradient-text text-2xl">
            Something great is just around the corner, stay tuned!
          </p>
        </div>

        <div>
          <img src="src/Images/dia.png" alt="bg" class="dia-right" />
        </div>


        <div className="absolute top-1/4 left-3/4 transform -translate-x-4/2 -translate-y-1/5">
          {" "}
          <BouncingSmall />
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
