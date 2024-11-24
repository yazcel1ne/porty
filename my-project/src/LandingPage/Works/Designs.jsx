import React from "react";
import DesignHeader from "../../assets/DesignHeader";
import ImageModal from "./DesignComps.jsx/ImageModal";
import FigmaLink from "../../Components/FigmaLink";
import BehanceLink from "../../Components/BehanceLink";
import LiveSite from "../Feature/LiveSite";

const Designs = () => {
  return (
    <div className="relative">

       <LiveSite/>
      <div>
        <DesignHeader />
        
      </div>
     
      <div className="relative-container ">
      
      
        {/* Grid container for the images */}
        <div className="max-w-screen-xl px-4 mx-auto grid gap-4 md:gap-8 md:grid-cols-3 ">
          
          {[
            {
              src: "/Images/DesignImages/karmine2.png",
              alt: "Karmine",
              title: "Karmine",
            },
            {
              src: "/Images/DesignImages/plant2.png",
              alt: "Oasis",
              title: "Oasis",
            },
            {
              src: "/Images/DesignImages/LoyaltyTXT.png",
              alt: "LoyaltyTXT",
              title: "LoyaltyTXT",
            },
            {
              src: "/Images/DesignImages/Swiss.png",
              alt: "Switzerland",
              title: "Exploring Switzerland",
            },
            {
              src: "/Images/DesignImages/CB.png",
              alt: "CB",
              title: "CyberRebirth",
            },
            {
              src: "/Images/DesignImages/Astoria.png",
              alt: "Astoria",
              title: "Hotel Astoria",
            },
            {
              src: "/Images/DesignImages/DH.png",
              alt: "DisputeHelp",
              title: "DisputeHelp",
            },
            {
              src: "/Images/DesignImages/PizzaPlace.png",
              alt: "PizzaPlace",
              title: "That Pizza Place",
            },
            {
              src: "/Images/DesignImages/juice2.png",
              alt: "Juice",
              title: "JuiceLabs",
            },
            {
              src: "/Images/DesignImages/car2.png",
              alt: "Luminaire",
              title: "Luminaire",
            },
            {
              src: "/Images/DesignImages/lux.png",
              alt: "Lux",
              title: "LuxWatch",
            },
            {
              src: "/Images/DesignImages/Urban.png",
              alt: "UrbanVibe",
              title: "UrbanVibe",
            },
          ].map((image, index) => (
            <div
              key={index}
              className="flex flex-col relative text-white rounded-[24px] overflow-hidden shadow-2xl" // Changed to shadow-2xl here
            >
              <ImageModal src={image.src} alt={image.alt} />
              <div className="absolute top-0 left-0 w-full glassmorphismDesign p-2 text-center">
                <h2 className="text-md font-semibold">{image.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    
      {/* Footer section with links */}
      <div className="flex justify-center items-center w-full pb-16 pt-16">
        <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 w-full max-w-md p-4 md:p-0">
          <div className="flex-shrink-0 w-full md:w-auto whitespace-nowrap text-center">
            <BehanceLink />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto whitespace-nowrap text-center">
            <FigmaLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designs;
