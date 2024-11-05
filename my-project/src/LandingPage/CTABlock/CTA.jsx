import React from "react";
import ContactButton from "../../Components/ContactButton";
import GradientText from "../../assets/GradientText";
import { BouncingImage } from "../../assets/BouncingBall";
import WavyBg from "../Pages/WavyBg";

const CTA = () => {
  return (
    <div className="relative font-raleway ">
      <div class="relative-container">
        <div class="max-w-screen-xl px-4 my-10  mx-auto grid gap-8 md:grid-cols-1 ">
          <div class="glassmorphism p-8 flex flex-col justify-center items-center text-white  md:flex md:items-left md:justify-left rounded-[24px] shadow-lg">
            <div class="pb-8">
              <p className="mt-12 text-center text-3xl font-raleway ml-2 font-bold bg-gradient-to-r from-purple-700 via-pink-500 to-blue-400 text-transparent bg-clip-text animate-gradient">
                Transform your digital vision into reality.
              </p>
            </div>

            <p class="mb-12 text-center px-5 text-gray-300">
              I design intuitive interfaces that enhance user engagement and
              satisfaction. I ensure a cohesive visual identity across all
              platforms, delivering stunning designs that elevate your brand.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
