import React from "react";
import NavBar from "./NavBar";
import {
  BouncingImage,
  BouncingSmall,
  BouncingMed,
  BouncingL,
} from "../assets/BouncingBall";
import "/src/styles/transitions.css";
import WavyBg from "./Pages/WavyBg";
import GradientText from "../assets/GradientText";
import FigmaLink from "../Components/FigmaLink";
import BehanceLink from "../Components/BehanceLink";
import Futuristic from "./Pages/Futuristic";

const Hero = () => {
  const downloadPdf = () => {
    window.open(
      "https://drive.google.com/file/d/1s3rTegsEIkH2P7YuZQUwW9jmeznJPkX5/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <NavBar />

      {/* <div class="dia-right w-100 border-gradient-a">
        <img src="/Images/dia.png" alt="bg" />
      </div> */}

      {/* <div class="dia-left w-20 border-gradient-a">
        <img src="/Images/dia.png" alt="bg" />
      </div> */}

      <section class="bg-transparent">
       
  <div class="zindexdiv grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mt-20">
    <div class="mr-auto place-self-center lg:col-span-7">
      <div className="max-w-2xl mb-4 animate-left">
        <span class="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
          <h1 className="text-4xl mb-4 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white pt-20">
            Hi!
          </h1>
        </span>
        <h1
          className="text-4xl font-extrabold mb-4 tracking-tight leading-none md:text-5xl xl:text-6xl text-white"
          style={{ animationDelay: "0.5s" }}
        >
          I'm Celine
        </h1>
        <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text font-raleway">
          <span className="text-6xl font-bold bg-gradient-to-r from-purple-700 via-pink-500 to-blue-400 text-transparent bg-clip-text animate-gradient">
            Web Designer
          </span>
          <p class="max-w-2xl mb-4 mt-4 font-light text-white lg:mb-12 md:text-lg lg:text-xl dark:text-gray-400 relative z-10 typing-animation">
            Frontend Developer | WordPress Developer
          </p>
        </div>
      </div>

      <div className="flex grid grid-cols-1 md:grid-cols-2 gap-4">
        <BehanceLink />
        <FigmaLink />
      </div>
    </div>
    <div class="hidden lg:flex lg:col-span-5 lg:mt-0 lg:justify-center lg:items-center">
      <img src="/Images/pic2.png" alt="bg" className="max-w-full h-auto" />
    </div>
  </div>
</section>


      {/* <div className="absolute top-4/3 left-2/3 transform -translate-x-4/2 -translate-y-1/5">
        {" "}
        <BouncingImage />
      </div> */}

      {/* <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        {" "}
        <BouncingImage />
      </div>  
      {/* <div className="absolute top-4/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        {" "}
        <BouncingSmall />
      </div>  */}

    
    </>
  );
};

export default Hero;
