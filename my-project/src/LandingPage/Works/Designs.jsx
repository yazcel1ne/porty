import React from "react";
import DesignHeader from "../../assets/DesignHeader";
import ViewButton from "../../Components/ViewButton";
import ViewMore from "../../Components/ViewMore";
import { BouncingImage, BouncingSmall } from "../../assets/BouncingBall";
import ImageModal from "./DesignComps.jsx/ImageModel";
import FigmaLink from "../../Components/FigmaLink";
import FigmaLink2 from "../../Components/FigmaLink2";

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
        <div class="max-w-screen-xl px-4 mx-auto grid gap-8 md:grid-cols-2">
          <div className=" flex flex-col text-white rounded-[24px] mb-4 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/karmine2.png" alt="Karmine" />

            <div class="py-4">
              <h2 className=" text-lg font-bold ">Karmine</h2>
              <ViewButton />
            </div>
          </div>

          {/* ---------------------- */}
          <div className=" flex flex-col text-white rounded-[24px] mb-4 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/plant2.png" alt="Oasis" />
            <div class="py-4">
              <h2 className="mt-2 text-lg font-bold ">Oasis</h2>
              <ViewButton />
            </div>
          </div>
        </div>
{/* ------------------------------------------------------------- */}

<div class="max-w-screen-xl px-4 mx-auto grid gap-8 md:grid-cols-2">
          <div className=" flex flex-col text-white rounded-[24px] mb-4 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/LoyaltyTXT.png" alt="LoyaltyTXT" />
            <div class="py-4">
              <h2 className="mt-2 text-lg font-bold ">LoyaltyTXT</h2>
              <ViewButton />
            </div>
          </div>

          {/* ---------------------- */}
          <div className=" flex flex-col text-white rounded-[24px] mb-4 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/Swiss.png" alt="Switzerland" />
            <div class="py-4">
              <h2 className="mt-2 text-lg font-bold ">Exploring Switzerland</h2>
              <ViewButton />
            </div>
          </div>
        </div>





        {/* ------------------------------------------------------------- */}

<div class="max-w-screen-xl px-4 mx-auto grid gap-8 md:grid-cols-2">
          <div className=" flex flex-col text-white rounded-[24px] mb-4 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/CB.png" alt="CyberRebirth" />
            <div class="py-4">
              <h2 className="mt-2 text-lg font-bold ">CyberRebirth</h2>
              <ViewButton />
            </div>
          </div>

          {/* ---------------------- */}
          <div className=" flex flex-col text-white rounded-[24px] mb-4 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/Astoria.png" alt="Astoria" />
            <div class="py-4">
              <h2 className="mt-2 text-lg font-bold ">Hotel Astoria</h2>
              <ViewButton />
            </div>
          </div>
        </div>


{/* 
        ---------------------------------------------- */}


<div class="max-w-screen-xl px-4 mx-auto grid gap-8 md:grid-cols-2">
          <div className=" flex flex-col text-white rounded-[24px] mb-4 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/DH.png" alt="DisputeHelp" />
            <div class="py-4">
              <h2 className="mt-2 text-lg font-bold ">DisputeHelp</h2>
              <ViewButton />
            </div>
          </div>

          {/* ---------------------- */}
          <div className=" flex flex-col text-white rounded-[24px] mb-4 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/PizzaPlace.png" alt="PizzaPlace" />
            <div class="py-4">
              <h2 className="mt-2 text-lg font-bold ">That Pizza Place</h2>
              <ViewButton />
            </div>
          </div>
        </div>


{/* 
        ---------------------------------------------- */}


        <div class="max-w-screen-xl px-4 mx-auto grid gap-8 md:grid-cols-2">
          <div className=" flex flex-col text-white rounded-[24px] mb-4 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/juice2.png" alt="Juice" />
            <div class="py-4">
              <h2 className="mt-2 text-lg font-bold ">JuiceLabs</h2>
              <ViewButton />
            </div>
          </div>

          {/* ---------------------- */}
          <div className=" flex flex-col text-white rounded-[24px] mb-4 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/DesignImages/car2.png" alt="Luminaire" />
            <div class="py-4">
              <h2 className="mt-2 text-lg font-bold ">Luminaire</h2>
              <ViewButton />
            </div>
          </div>
        </div>

        <div className=" pb-12 pt-8">
          <FigmaLink2 />
        </div>
      </div>
    </div>
  );
};

export default Designs;
