import React from "react";
import NavBar from "./NavBar";
import "/src/styles/transitions.css";
import FigmaLink from "../Components/FigmaLink";
import BehanceLink from "../Components/BehanceLink";

import lappy2 from "/src/assets/lappy2.json";
import { Player } from "@lottiefiles/react-lottie-player"; // Import the Player component

const Hero = () => {
  return (
    <>
      <NavBar />

      <section className="bg-transparent">
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12 min-h-screen ">
          {/* Left Content */}
          <div className="mr-auto place-self-center lg:col-span-7 ">
            <div className="flex items-center justify-center ">
              <div className="max-w-2xl mb-4 animate-left">
                {/* Headings */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-snug text-white ">
                  Hi!
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-snug text-white pt-4 pb-4">
                  I'm Celine
                </h1>
                <div>
                  <img
                    src="/Images/TechLogos/Palette.png"
                    alt="Designer Palette"
                    className="hidden lg:block absolute top-[2%] left-[20%] w-10 h-10 bounce-animation"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <span className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-700 via-pink-500 to-blue-400 text-transparent bg-clip-text animate-gradient">
                    Web Designer
                  </span>
                </div>

                {/* Paragraph */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mb-4 mt-4 font-light text-white lg:mb-12 dark:text-gray-400 relative z-10 typing-animation break-words">
                  Frontend Developer | WordPress Developer
                </p>
                <p className=" font-light text-gray-200 lg:mb-4 ">
                  I Design Innovative and Engaging Web Experiences Driven by
                  Passion and a Love for Creativity. 😎
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <BehanceLink />
              <FigmaLink />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:flex lg:col-span-5 lg:mt-0 lg:justify-center lg:items-center relative">
            <img
              src="/Images/pic6.png"
              alt="bg"
              className="hidden lg:block w-full h-auto object-cover lg:max-w-[300px] xl:max-w-[400px] flip-in-animation"
            />
            <Player
              autoplay
              loop
              src={lappy2}
              className="hidden lg:block absolute top-[50%] right-[40%] w-[300px] h-[250px] opacity-75"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
