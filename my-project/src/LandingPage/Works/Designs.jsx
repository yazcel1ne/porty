import React from "react";
import DesignHeader from "../../assets/DesignHeader";
import ViewButton from "../../Components/ViewButton";
import ViewMore from "../../Components/ViewMore";
import { BouncingImage, BouncingSmall } from "../../assets/BouncingBall";
import ImageModal from "./DesignComps.jsx/ImageModel";

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
            <ImageModal src="/Images/karmine.png" alt="Karmine" />

            <div class="py-4">
              <h2 className=" text-lg font-bold ">Karmine</h2>
              <ViewButton />
            </div>
          </div>

          {/* ---------------------- */}
          <div className=" flex flex-col text-white rounded-[24px] mb-4 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/plant.png" alt="Karmine" />
            <div class="py-4">
              <h2 className="mt-2 text-lg font-bold ">Oasis</h2>
              <ViewButton />
            </div>
          </div>
        </div>

        <div class="max-w-screen-xl px-4 mx-auto grid gap-8 md:grid-cols-2">
          <div className=" flex flex-col text-white rounded-[24px] mb-4 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/juice.png" alt="Karmine" />
            <div class="py-4">
              <h2 className="mt-2 text-lg font-bold ">JuiceLabs</h2>
              <ViewButton />
            </div>
          </div>

          {/* ---------------------- */}
          <div className=" flex flex-col text-white rounded-[24px] mb-4 md:flex md:items-left md:justify-left ">
            <ImageModal src="/Images/car.png" alt="Karmine" />
            <div class="py-4">
              <h2 className="mt-2 text-lg font-bold ">Luminaire</h2>
              <ViewButton />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-full pt-24">
          <ViewMore />
        </div>

        <img
          src="/Images/donut.png"
          alt="bg"
          class="absolute top-50 right-0"
        />
        {/* <div className=" absolute top-400 right-40">
          {" "}
          <BouncingSmall />
        </div> */}
        <div className=" absolute pt-0 pl-40">
          {" "}
          <BouncingImage />
        </div>
      </div>
    </div>
  );
};

export default Designs;
