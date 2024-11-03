import React from "react";
import DesignHeader from "../../assets/DesignHeader";
import ViewButton from "../../Components/ViewButton";
import ViewMore from "../../Components/ViewMore";
import { BouncingImage, BouncingSmall } from "../../assets/BouncingBall";
import ImageModal from "./DesignComps.jsx/ImageModal";
import FigmaLink from "../../Components/FigmaLink";
import FigmaLink2 from "../../Components/FigmaLink2";
import BehanceLink from "../../Components/BehanceLink";

const Designs = () => {
  return (
    <div className="relative">
      <div>
        <DesignHeader />
      </div>

      <div className="relative-container ">
        {/* Grid container for the first set of images */}
        <div className="max-w-screen-xl px-4 mx-auto grid gap-0 md:gap-8 md:grid-cols-3">
          <div className="flex flex-col relative text-white rounded-[24px] mb-8 overflow-hidden">
            <ImageModal src="/Images/DesignImages/karmine2.png" alt="Karmine" />
            <div
              className="absolute top-0 left-0 w-full glassmorphism2
             p-2 text-center"
            >
              <h2 className="text-lg font-semibold">Karmine</h2>
            </div>
          </div>

          <div className="flex flex-col relative text-white rounded-[24px] mb-8 overflow-hidden">
            <ImageModal src="/Images/DesignImages/plant2.png" alt="Oasis" />
            <div
              className="absolute -0 left-0 w-full glassmorphism2
             p-2 text-center"
            >
              <h2 className="text-lg font-semibold">Oasis</h2>
            </div>
          </div>

          <div className="flex flex-col relative text-white rounded-[24px] mb-8 overflow-hidden">
            <ImageModal
              src="/Images/DesignImages/LoyaltyTXT.png"
              alt="LoyaltyTXT"
            />
            <div
              className="absolute -0 left-0 w-full glassmorphism2
             p-2 text-center"
            >
              <h2 className="text-lg font-semibold">LoyaltyTXT</h2>
            </div>
          </div>
        </div>

        {/* Additional grid containers */}
        <div className="max-w-screen-xl px-4 mx-auto grid gap-0 md:gap-8 md:grid-cols-3">
          <div className="flex flex-col relative text-white rounded-[24px] mb-8 overflow-hidden">
            <ImageModal
              src="/Images/DesignImages/Swiss.png"
              alt="Switzerland"
            />
            <div
              className="absolute -0 left-0 w-full glassmorphism2
             p-2 text-center"
            >
              <h2 className="text-lg font-semibold">Exploring Switzerland</h2>
            </div>
          </div>

          <div className="flex flex-col relative text-white rounded-[24px] mb-8 overflow-hidden">
            <ImageModal src="/Images/DesignImages/CB.png" alt="CB" />
            <div
              className="absolute -0 left-0 w-full glassmorphism2
             p-2 text-center"
            >
              <h2 className="text-lg font-semibold">CyberRebirth</h2>
            </div>
          </div>

          <div className="flex flex-col relative text-white rounded-[24px] mb-8 overflow-hidden">
            <ImageModal src="/Images/DesignImages/Astoria.png" alt="Astoria" />
            <div
              className="absolute -0 left-0 w-full glassmorphism2
             p-2 text-center"
            >
              <h2 className="text-lg font-semibold">Hotel Astoria</h2>
            </div>
          </div>
        </div>

        {/* Repeat similar structure for additional grids */}
        <div className="max-w-screen-xl px-4 mx-auto grid gap-0 md:gap-8 md:grid-cols-3">
          <div className="flex flex-col relative text-white rounded-[24px] mb-8 overflow-hidden">
            <ImageModal src="/Images/DesignImages/DH.png" alt="DisputeHelp" />
            <div
              className="absolute -0 left-0 w-full glassmorphism2
             p-2 text-center"
            >
              <h2 className="text-lg font-semibold">DisputeHelp</h2>
            </div>
          </div>

          <div className="flex flex-col relative text-white rounded-[24px] mb-8 overflow-hidden">
            <ImageModal
              src="/Images/DesignImages/PizzaPlace.png"
              alt="PizzaPlace"
            />
            <div
              className="absolute -0 left-0 w-full glassmorphism2
             p-2 text-center"
            >
              <h2 className="text-lg font-semibold">That Pizza Place</h2>
            </div>
          </div>

          <div className="flex flex-col relative text-white rounded-[24px] mb-8 overflow-hidden">
            <ImageModal src="/Images/DesignImages/juice2.png" alt="Juice" />
            <div
              className="absolute -0 left-0 w-full glassmorphism2
             p-2 text-center"
            >
              <h2 className="text-lg font-semibold">JuiceLabs</h2>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl px-4 mx-auto grid gap-0 md:gap-8 md:grid-cols-3">
          <div className="flex flex-col relative text-white rounded-[24px] mb-8 overflow-hidden">
            <ImageModal src="/Images/DesignImages/car2.png" alt="Luminaire" />
            <div
              className="absolute -0 left-0 w-full glassmorphism2
             p-2 text-center"
            >
              <h2 className="text-lg font-semibold">Luminaire</h2>
            </div>
          </div>

          <div className="flex flex-col relative text-white rounded-[24px] mb-8 overflow-hidden">
            <ImageModal src="/Images/DesignImages/lux.png" alt="Lux" />
            <div
              className="absolute -0 left-0 w-full glassmorphism2
             p-2 text-center"
            >
              <h2 className="text-lg font-semibold">LuxWatch</h2>
            </div>
          </div>

          <div className="flex flex-col relative text-white rounded-[24px] mb-8 overflow-hidden">
            <ImageModal src="/Images/DesignImages/Urban.png" alt="UrbanVibe" />
            <div
              className="absolute -0 left-0 w-full glassmorphism2
             p-2 text-center"
            >
              <h2 className="text-lg font-semibold">UrbanVibe</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Footer section with links */}
      <div className="flex justify-center w-full pb-16 pt-16">

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 w-full max-w-md p-4 md:p-0">
          <div className="flex-shrink-0 w-full md:w-auto whitespace-nowrap">
            <BehanceLink />
          </div>
          <div className="flex-shrink-0 w-full md:w-auto whitespace-nowrap">
            <FigmaLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designs;
