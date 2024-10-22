import React from "react";
import WavyBg from "./Pages/WavyBg";

const Footer = () => {
  return (
    <div class="relative">

    <footer className="max-w-screen-xl px-4 my-10  mx-auto grid gap-8 md:grid-cols-1">
      <div className="container mx-auto p-4 pt-6 md:p-6">
        <div className="flex justify-center mb-4">
          <div className="flex items-center">
          <img
              src="/Images/logo5.png"
              alt="Logo"
              class="self-center text-2xl font-semibold whitespace-nowrap text-white"
            />     
                   
          </div>
          <div className="flex items-center">
         
          </div>
        </div>
       
 

        <div className="border-b-2 border-gradient-b mb-4" />
   


      </div>
    </footer>
    </div>
  );
};

export default Footer;
