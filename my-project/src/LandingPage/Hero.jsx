import React from "react";
import NavBar from "./NavBar";
import "/src/styles/transitions.css";
import FigmaLink from "../Components/FigmaLink";
import BehanceLink from "../Components/BehanceLink";
import HeroAnim from "/src/assets/HeroAnim.json";
import Ballanim from "/src/assets/Ballanim.json";
import uiuxanim from "/src/assets/uiuxanim.json";
import lappy2 from "/src/assets/lappy2.json";
import { Player } from "@lottiefiles/react-lottie-player"; // Import the Player component

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
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-none text-white pt-10 sm:pt-20">
                Hi!
              </h1>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 tracking-tight leading-none text-white pt-4"
                style={{ animationDelay: "0.5s" }}
              >
                I'm Celine
              </h1>
              <div >
                   <img
              src="/Images/TechLogos/Palette.png"
              alt="Designer Palette"
              className="hidden lg:block absolute top-[20%] left-[20%] w-10 h-10 bounce-animation"
              style={{ animationDelay: "0.2s" }}
            /> 
                <span className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-700 via-pink-500 to-blue-400 text-transparent bg-clip-text animate-gradient">
                  Web Designer
                </span>
                <p className="max-w-2xl mb-4 mt-4 font-light text-white lg:mb-12 md:text-lg lg:text-xl dark:text-gray-400 relative z-10 typing-animation">
                  Frontend Developer | WordPress Developer
                </p>

                <p className="mb-4 mt-4 font-light text-gray-200 lg:mb-12 relative z-10 ">
                I Design Innovative and Engaging Web Experiences, Driven by Passion and a Love for Creativity. {" "}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <BehanceLink />
              <FigmaLink />
            </div>
          </div>

          {/* Adjust the image for different screen sizes */}
          <div className="lg:flex lg:col-span-5 lg:mt-0 lg:justify-center lg:items-center relative">
            <img
              src="/Images/pic6.png"
              alt="bg"
              className="hidden lg:block w-full h-auto object-cover lg:max-w-[400px] xl:max-w-[500px] flip-in-animation"
            />

            {/* Add bouncing designer palette */}
            {/* <img
              src="/Images/TechLogos/Palette.png"
              alt="Designer Palette"
              className="hidden lg:block absolute top-[75%] left-[10%] w-16 h-16 bounce-animation"
              style={{ animationDelay: "0.2s" }}
            /> */}

            {/* Add bouncing keyboard */}
            {/* <img
              src="/Images/TechLogos/Keyboard.png"
              alt="Keyboard"
              className="hidden lg:block absolute top-[90%] left-[30%] w-18 h-18 bounce-animation"
              style={{ animationDelay: "0.4s" }}
            /> */}
            <Player
              autoplay
              loop
              src={lappy2}
              className="hidden lg:block absolute top-[60%]  right-[40%] w-15 h-15 opacity-75" // Adjust opacity as needed
              style={{ animationDelay: "3s" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
