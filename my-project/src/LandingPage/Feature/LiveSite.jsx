import React, { useState } from "react";
import Futuristic from "../Pages/Futuristic";

const LiveSite = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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
      title: "SMount",
      image: "/Images/DesignImages/sfc.png",
      link: "https://shiftcam.webflow.io/",
      tools: ["Figma", "Webflow", "UI/UX Redesign"],
    },
    {
      title: "ChargebackHelp",
      image: "/Images/DesignImages/CBH.png",
      link: "https://chargebackhelp.com/",
      tools: ["Figma", "WordPress", "Avada Builder"],
    },
    {
      title: "My Personal Portfolio",
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

  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart && touchEnd) {
      const distance = touchStart - touchEnd;
      if (distance > 50) {
        nextSlide();
      } else if (distance < -50) {
        prevSlide();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="relative font-raleway"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-screen-xl px-4 my-10 mx-auto">
        <div>
          <p className="text-3xl font-bold text-gray-300 text-center">
            Creative Showcase
          </p>
          <p className="text-gray-300 text-center pt-4 pb-8">
            Sites I Developed Using a Variety of Platforms and Front-End Tools.
            🎨 <span className="font-bold">Feel Free to Take a Look!</span> 😊
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center ">
          {/* Left Arrow Button (visible on large screens only) */}
          <button
            onClick={prevSlide}
            className="text-white px-4 py-2 focus:outline-none hidden sm:block"
          >
            <img
              src="/Images/DesignImages/arrowleft.svg"
              alt="Previous"
              className="w-10 h-10 transition-transform duration-200 hover:scale-110"
            />
          </button>

          {/* Slider Container */}
          <div className="relative overflow-hidden w-full py-8">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full flex-shrink-0 p-2"
                >
                  {projects
                    .slice(
                      pageIndex * itemsPerPage,
                      pageIndex * itemsPerPage + itemsPerPage
                    )
                    .map((project, index) => (
                      <a
                        href={project.link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="glassmorphismFeat2 flex flex-col p-8 rounded-lg shadow-lg bg-gray-800 hover:bg-gradient-to-r hover:from-[#050505] hover:to-[#251538] transition-transform transform hover:-translate-y-2 duration-300">
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
                            {project.tools.map((tool, idx) => (
                              <li
                                key={idx}
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
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button (visible on large screens only) */}
          <button
            onClick={nextSlide}
            className="text-white px-4 py-2 focus:outline-none hidden sm:block"
          >
            <img
              src="/Images/DesignImages/arrowright.svg"
              alt="Next"
              className="w-10 h-10 transition-transform duration-200 hover:scale-110"
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
  );
};

export default LiveSite;
