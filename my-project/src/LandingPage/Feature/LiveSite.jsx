import React, { useState } from "react";
import ContactButton from "../../Components/ContactButton";
import GradientText from "../../assets/GradientText";
import { BouncingImage } from "../../assets/BouncingBall";
import WavyBg from "../Pages/WavyBg";
import Futuristic from "../Pages/Futuristic";
import ViewButton from "../../Components/ViewButton";

const LiveSite = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Happy Wally Redesign",
      image: "/Images/hwally.png",
      link: "https://h-wally-redesign.vercel.app/",
      tools: ["Figma", "ReactJS + Vite", "Material UI"],
    },
    {
      title: "DisputeHelp",
      image: "/Images/DesignImages/DH.png",
      link: "https://disputehelp.com/",
      tools: ["Figma", "WordPress", "Elementor Pro"],
    },
    {
      title: "ChargebackHelp",
      image: "/Images/DesignImages/CBH.png",
      link: "https://chargebackhelp.com/",
      tools: ["Figma", "WordPress", "Avada Builder"],
    },
    {
      title: "My Persontal Portfolio",
      image: "/Images/DesignImages/myport.jpg",
      link: "https://celine-terrado.vercel.app/",
      tools: ["Figma", "ReactJS + Vite", "TailwindCSS"],
    },
    {
      title: "PEVRLIRA Portfolio",
      image: "/Images/DesignImages/pevr.png",
      link: "https://pevrlira.me/",
      tools: ["Figma", "WordPress", "Elementor"],
    },
  ];

  // Calculate total pages for the project
  const totalPages = Math.ceil(projects.length / 3);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative font-raleway">
      <div className="relative-container">
        <div className="max-w-screen-xl px-4 my-10 mx-auto grid gap-8 md:grid-cols-1">
          <div>
            <p className="text-3xl font-raleway font-bold text-gray-300 text-center">
              Featured Showcase
            </p>
            <p className="text-gray-300 text-center pt-4 pb-8">
              Sites I Developed Using a Variety of Platforms and Front-End
              Tools. 🎨{" "}
              <span className="font-bold">Feel Free to Take a Look!</span> 😊
            </p>
          </div>

          {/* Container for projects */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 w-full pl-16 pr-16">
            {/* Left Arrow Button (Image) */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white z-10"
            >
              <img
                src="/Images/DesignImages/arrowleft.svg"
                alt="Previous"
                className="w-10 h-10"
              />
            </button>

            {/* Projects */}
            {projects
              .slice(currentIndex * 3, currentIndex * 3 + 3)
              .map((project, index) => (
                <a
                  href={project.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
<div className="glassmorphismFeat2 font-raleway flex flex-col pl-8 pr-8 pt-8 pb-8 rounded-lg shadow-lg bg-gray-800 hover:bg-gradient-to-r hover:from-[#050505] hover:to-[#3d1768] transition-transform transform hover:-translate-y-2 duration-300">
  <Futuristic />
  <img
    src={project.image}
    alt="Project Thumbnail"
    className="w-full h-48 object-cover rounded-xl"
  />
  <h2 className="text-md font-semibold text-gray-300 pt-4 pb-4">
    {project.title}
  </h2>
  <ul>
    {project.tools.map((tool, index) => (
      <li
        key={index}
        className="flex items-start text-gray-300 mb-2"
      >
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white-500 mr-2">
          ✔
        </span>
        {tool}
      </li>
    ))}
  </ul>
</div>


                </a>
              ))}

            {/* Right Arrow Button (Image) */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white z-10"
            >
              <img
                src="/Images/DesignImages/arrowright.svg"
                alt="Next"
                className="w-10 h-10"
              />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-4 py-4">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-purple-600" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSite;
