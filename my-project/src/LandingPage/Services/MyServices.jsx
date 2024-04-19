import React from "react";

const MyServices = () => {
  return (
    <>
      <div className="relative h-screen font-raleway">
        <img
          src="src/Images/donutflip.png"
          alt="bg"
          class="absolute top-0 left-0"
        />

        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1 ">
          <h1 class="inline-flex max-w-3xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-white pl-4 border-l-4 border-gradient-a">
            Services <span class="gradient-text ml-2">Offered</span>
          </h1>

          <p class="text-white">
            We recognize the uniqueness of each client and opportunity,
            guaranteeing a response to every query within one business day
          </p>
        </div>

        <div class="relative-container">
          <img src="src/Images/dia.png" alt="bg" class="background-image" />
          <div class="max-w-screen-xl px-4 py-8 mx-auto grid grid-cols-3 gap-4">
            <div class="bg-purpbg h-32 flex items-center justify-center text-white">
              Box 1
            </div>
            <div class="bg-purpbg h-32 flex items-center justify-center text-white">
              Box 2
            </div>
            <div class="bg-purpbg h-32 flex items-center justify-center text-white">
              Box 3
            </div>
          </div>

          <img src="src/Images/dia.png" alt="bg" class="background-image2" />
        </div>
      </div>
    </>
  );
};

export default MyServices;
