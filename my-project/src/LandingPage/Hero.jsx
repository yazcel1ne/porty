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

      <section className="bg-transparent">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mt-10 sm:mt-20">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="max-w-2xl mb-4 animate-left">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none text-white pt-10 sm:pt-20">
                  Hi!
                </h1>
              </span>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold mb-4 tracking-tight leading-none text-white"
                style={{ animationDelay: "0.5s" }}
              >
                I'm Celine
              </h1>
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text font-raleway">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-700 via-pink-500 to-blue-400 text-transparent bg-clip-text animate-gradient">
                  Web Designer
                </span>
                <p className="max-w-2xl mb-4 mt-4 font-light text-white lg:mb-12 md:text-lg lg:text-xl dark:text-gray-400 relative z-10 typing-animation">
                  Frontend Developer | WordPress Developer
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <BehanceLink />
              <FigmaLink />
            </div>
          </div>

          {/* Adjust the image for different screen sizes */}
          <div className="lg:flex lg:col-span-5 lg:mt-0 lg:justify-center lg:items-center">
            <img
              src="/Images/pic6.png"
              alt="bg"
              className="hidden lg:block w-full h-auto object-cover lg:max-w-[400px] xl:max-w-[500px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
