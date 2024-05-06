import React from "react";
import ContactButton from "../../Components/ContactButton";


const TechUsed = () => {
  return (
    <div>
      <div class="max-w-screen-xl px-4 my-10  mx-auto grid gap-8 md:grid-cols-1">
        <div class="bg-purpbg p-16 flex flex-col justify-center items-center text-white  md:flex md:items-left md:justify-left border border-gradient-a">
          <h1 class="text-4xl mb-12 font-extrabold tracking-tight leading-none md:text-7xl xl:text-5xl mb-6 text-center">
            Transform Your Digital Vision into reality
          </h1>

          <p class="mb-12 md:text-2xl xl:text-2xl text-center">
            I design intuitive interfaces that enhance user engagement and
            satisfaction. I ensure a cohesive visual identity across all
            platforms, delivering stunning designs that elevate your brand.
          </p>
          <ContactButton />

          
        </div>
      </div>
    </div>
  );
};

export default TechUsed;
