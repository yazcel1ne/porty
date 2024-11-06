import React, { useRef, useEffect } from "react";

const CardSlider = () => {
  return (
    <div class="relative">
      <div className="relative   font-raleway ">
        <div class="relative-container">
          <div class="pb-12 ">
            <p className=" text-center text-2xl font-raleway ml-2 font-bold text-white ">
              What They Say
            </p>
          </div>
          <div class="max-w-screen-xl px-4 mx-auto grid gap-8 md:gap-4 lg:gap-8 md:grid-cols-3">
            <div className="glassmorphism flex-col text-gray-300 mb-4 md:flex md:items-left md:justify-left transition-transform duration-300 transform rounded-[24px] shadow-lg py-12">
              {" "}
              <div class="font-raleway flex flex-col flex-grow pl-8 pr-8">
                <div class="text-white text-4xl mb-2">
                  <span>&#8220;</span>
                </div>

                <p>
                  "Celine is a hardworking and dedicated designer. She always
                  puts in the effort to finish every task with creativity and
                  care. Truly a pleasure to work with!"
                </p>

                <h1 class="font-semibold text-white pt-4">
                  Angeline S.
                  <p class="font-light">Web Designer, NMS</p>
                </h1>

                <div class="flex ">
                  <span class="text-yellow-500">&#9733;</span>
                  <span class="text-yellow-500">&#9733;</span>
                  <span class="text-yellow-500">&#9733;</span>
                  <span class="text-yellow-500">&#9733;</span>
                  <span class="text-yellow-500">&#9733;</span>
                </div>

                <div class="flex-grow"></div>
              </div>
            </div>
            {/* ---------------------- */}

            <div className="glassmorphism flex-col text-gray-300 mb-4 md:flex md:items-left md:justify-left transition-transform duration-300 transform rounded-[24px] shadow-lg py-12">
              {" "}
              <div class="font-raleway flex flex-col flex-grow pl-8 pr-8">
                <div class="text-white text-4xl mb-2">
                  <span>&#8220;</span>
                </div>

                <p>
                  We've teamed up on several projects, and her creativity always
                  impress. As a fellow designer, I greatly value her design
                  skills and dedication to producing high-quality work. I’m
                  looking forward to collaborating again soon!"
                </p>

                <h1 class="font-semibold text-white pt-4">
                  Marjon D.
                  <p class="font-light">WordPress Developer/Designer</p>
                </h1>

                <div class="flex ">
                  <span class="text-yellow-500">&#9733;</span>
                  <span class="text-yellow-500">&#9733;</span>
                  <span class="text-yellow-500">&#9733;</span>
                  <span class="text-yellow-500">&#9733;</span>
                  <span class="text-yellow-500">&#9733;</span>
                </div>

                <div class="flex-grow"></div>
              </div>
            </div>

            <div className="glassmorphism flex-col text-gray-300 mb-4 md:flex md:items-left md:justify-left transition-transform duration-300 transform rounded-[24px] shadow-lg py-12">
              {" "}
              <div class="font-raleway flex flex-col flex-grow pl-8 pr-8">
                <div class="text-white text-4xl mb-2">
                  <span>&#8220;</span>
                </div>

                <p>
                  "I’ve known Celine for some time, and she’s been instrumental
                  in helping me grow my business. Her support, and strategic
                  insight were key to our success, and I’m incredibly grateful
                  for all she’s contributed."
                </p>

                <h1 class="font-semibold text-white pt-4">
                  Cire G.
                  <p class="font-light">Founder, G and D Tire Center</p>
                </h1>

                <div class="flex ">
                  <span class="text-yellow-500">&#9733;</span>
                  <span class="text-yellow-500">&#9733;</span>
                  <span class="text-yellow-500">&#9733;</span>
                  <span class="text-yellow-500">&#9733;</span>
                  <span class="text-yellow-500">&#9733;</span>
                </div>

                <div class="flex-grow"></div>
              </div>
            </div>
            <div className></div>
          </div>

          {/* <img src="/Images/dia.png" alt="bg" class="background-image2" /> */}
        </div>
      </div>
      <div className="flex justify-center items-center w-full pb-16"></div>
    </div>
  );
};

export default CardSlider;
