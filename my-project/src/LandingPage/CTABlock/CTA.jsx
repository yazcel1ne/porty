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
          <div class="bg-purpbg p-8 flex flex-col justify-center items-center text-white  md:flex md:items-left md:justify-left rounded-[24px]">
            <div class="pb-8">
              <GradientText>
               
                Transform Your Digital Vision into reality
              </GradientText>
            </div>

            <p class="mb-12 md:text-2xl xl:text-2xl text-center">
              I design intuitive interfaces that enhance user engagement and
              satisfaction. I ensure a cohesive visual identity across all
              platforms, delivering stunning designs that elevate your brand.
            </p>
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
