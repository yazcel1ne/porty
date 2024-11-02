import React from "react";
import DesignHeader from "../../assets/DesignHeader";
import ViewButton from "../../Components/ViewButton";
import ViewMore from "../../Components/ViewMore";
import { BouncingImage, BouncingSmall } from "../../assets/BouncingBall";
import ImageModal from "./DesignComps.jsx/ImageModel";
import FigmaLink from "../../Components/FigmaLink";
import FigmaLink2 from "../../Components/FigmaLink2";
import BehanceLink from "../../Components/BehanceLink";

const Designs = () => {
  return (
    <div class="relative">
      {/* <img
        src="src/Images/donut.png"
        alt="bg"
        class="absolute top-40 right-0"
      /> */}
      <div>
        <DesignHeader />
      </div>

      <div class="relative-container">
        <div class="max-w-screen-xl px-4 mx-auto grid gap-0 md:gap-8 md:grid-cols-2">
          <div className=" flex flex-col text-white rounded-[24px] mb-10 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/karmine2.png" alt="Karmine" />

            <div class="py-2">
              <h2 className=" text-lg font-semibold ">Karmine</h2>
            </div>
          </div>

          {/* ---------------------- */}
          <div className=" flex flex-col text-white rounded-[24px] mb-10 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/plant2.png" alt="Oasis" />
            <div class="py-2">
              <h2 className=" text-lg font-semibold ">Oasis</h2>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------- */}

        <div class="max-w-screen-xl px-4 mx-auto grid gap-0 md:gap-8 md:grid-cols-2">
          <div className=" flex flex-col text-white rounded-[24px] mb-10 md:flex md:items-left md:justify-left ">
            <ImageModal
              src="/Images/DesignImages/LoyaltyTXT.png"
              alt="LoyaltyTXT"
            />
            <div class="py-2">
              <h2 className=" text-lg font-semibold ">LoyaltyTXT</h2>
            </div>
          </div>

          {/* ---------------------- */}
          <div className=" flex flex-col text-white rounded-[24px] mb-10 md:flex md:items-left md:justify-left ">
            <ImageModal
              src="/Images/DesignImages/Swiss.png"
              alt="Switzerland"
            />
            <div class="py-2">
              <h2 className=" text-lg font-semibold ">Exploring Switzerland</h2>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}

        <div class="max-w-screen-xl px-4 mx-auto grid gap-0 md:gap-8 md:grid-cols-2">
          <div className=" flex flex-col text-white rounded-[24px] mb-10 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/CB.png" alt="CyberRebirth" />
            <div class="py-2">
              <h2 className=" text-lg font-semibold ">CyberRebirth</h2>
            </div>
          </div>

          {/* ---------------------- */}
          <div className=" flex flex-col text-white rounded-[24px] mb-10 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/Astoria.png" alt="Astoria" />
            <div class="py-2">
              <h2 className=" text-lg font-semibold ">Hotel Astoria</h2>
            </div>
          </div>
        </div>

        {/* 
        ---------------------------------------------- */}

        <div class="max-w-screen-xl px-4 mx-auto grid gap-0 md:gap-8 md:grid-cols-2">
          <div className=" flex flex-col text-white rounded-[24px] mb-10 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/DH.png" alt="DisputeHelp" />
            <div class="py-2">
              <h2 className=" text-lg font-semibold ">DisputeHelp</h2>
            </div>
          </div>

          {/* ---------------------- */}
          <div className=" flex flex-col text-white rounded-[24px] mb-10 md:flex md:items-left md:justify-left ">
            <ImageModal
              src="/Images/DesignImages/PizzaPlace.png"
              alt="PizzaPlace"
            />
            <div class="py-4">
              <h2 className=" text-lg font-semibold ">That Pizza Place</h2>
            </div>
          </div>
        </div>

        {/* 
        ---------------------------------------------- */}

        <div class="max-w-screen-xl px-4 mx-auto grid gap-0 md:gap-8 md:grid-cols-2">
          <div className=" flex flex-col text-white rounded-[24px] mb-8 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/juice2.png" alt="Juice" />
            <div class="py-2">
              <h2 className=" text-lg font-semibold ">JuiceLabs</h2>
            </div>
          </div>

          {/* ---------------------- */}
          <div className=" flex flex-col text-white rounded-[24px] mb-10 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/car2.png" alt="Luminaire" />
            <div class="py-2">
              <h2 className=" text-lg font-semibold ">Luminaire</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
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
