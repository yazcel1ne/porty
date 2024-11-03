import React from "react";
import WavyBg from "./Pages/WavyBg";

const Footer = () => {
  return (
    <div className="relative">
      <footer className="max-w-screen-xl px-4 my-1 mx-auto grid gap-8 md:grid-cols-1">
        <div className="container mx-auto p-4 pt-6 md:p-6">
          <div className="flex justify-center mb-4">
            <div className="flex items-center">
              <img
                src="/Images/logo5.png"
                alt="Logo"
                className="self-center text-2xl font-semibold whitespace-nowrap text-white"
              />
            </div>
            <div className="flex items-center"></div>
          </div>
          <div>
            <p className="text-center text-white">
              ©Copyright. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
