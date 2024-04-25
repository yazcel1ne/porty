import React from "react";
import TechHeader from "../../assets/TechHeader";

const TechUsed = () => {
  return (
    <>
      <div>
        <TechHeader />
      </div>

      <div class="relative-container">
        <div class="max-w-screen-xl mx-auto grid gap-4 md:grid-cols-2">
{/* 
        <div className="max-w-screen-xl px-4  mx-auto lg:gap-8 xl:gap-0 lg:py-4 flex  ">
        <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl text-white">
          <span className="gradient-text ml-2">Design</span>
        </h1>
      </div> */}


          <div class="max-w-screen-xl  px-4 mx-auto grid grid-cols-4 gap-4 bg-purpbg border-2 border-gradient-a">
            <div class=" h-32  w-32 flex items-center justify-center text-white">
              Figma
            </div>
            <div class=" h-32  w-32 flex items-center justify-center text-white">
              WordPress
            </div>
            <div class=" h-32  w-32 flex items-center justify-center text-white">
              Oxygen Builder
            </div>
            <div class=" h-32  w-32 flex items-center justify-center text-white">
              Elementor
            </div>
            <div class=" h-32  w-32 flex items-center justify-center text-white">
              Avada
            </div>
            <div class=" h-32  w-32 flex items-center justify-center text-white">
              Photoshop{" "}
            </div>
            <div class=" h-32  w-32 flex items-center justify-center text-white">
              Canva
            </div>
          </div>
          <div class="max-w-screen-xl  px-4 mx-auto grid grid-cols-4 gap-4 bg-purpbg border-2 border-gradient-a">
            <div class=" h-32 flex items-center justify-center text-white">
              HTML
            </div>
            <div class=" h-32 w-32 flex items-center justify-center text-white">
              CSS
            </div>
            <div class="h-32  w-32 flex items-center justify-center text-white">
              Javascript
            </div>
            <div class=" h-32  w-32 flex items-center justify-center text-white">
              React
            </div>
            <div class="h-32  w-32 flex items-center justify-center text-white">
              Bootstrap
            </div>
            <div class=" h-32  w-32 flex items-center justify-center text-white">
              Tailwind CSS{" "}
            </div>
            <div class=" h-32  w-32 flex items-center justify-center text-white">
              Github
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechUsed;
