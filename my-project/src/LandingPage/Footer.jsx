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
              src="/Images/logofull.png"
              alt="Logo"
              class="self-center text-2xl font-semibold whitespace-nowrap text-white"
            />            
          </div>
          <div className="flex items-center">
           
          </div>
        </div>
        <div className="border-b-2 border-gradient-b mb-4" />
        <div className="flex md:justify-between grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <p className="text-white">celinetodesigns@email.com</p>
          <p className="text-white">&copy; 2024 Company Name</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
