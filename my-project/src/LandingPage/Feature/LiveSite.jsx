import React from "react";
import ContactButton from "../../Components/ContactButton";
import GradientText from "../../assets/GradientText";
import { BouncingImage } from "../../assets/BouncingBall";
import WavyBg from "../Pages/WavyBg";
import Futuristic from "../Pages/Futuristic";
import ViewButton from "../../Components/ViewButton";

const LiveSite = () => {
  return (
    <div className="relative font-raleway ">
      <div class="relative-container">
        <div class="max-w-screen-xl px-4 my-10  mx-auto grid gap-8 md:grid-cols-1 ">
          <div class="glassmorphismFeat p-8 pb-8 flex flex-col justify-center  text-white  md:flex md:items-left md:justify-left rounded-[24px] shadow-lg ">
            <div class="pb-8">
              <p className=" text-center pb-8 text-3xl font-raleway ml-2 font-bold bg-gradient-to-r from-purple-700 via-pink-500 to-blue-400 text-transparent bg-clip-text animate-gradient">
                Featured Sites I Developed
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              <div class="glassmorphismFeat2 font-raleway flex flex-col flex-grow pl-8 pr-8 pt-8 pb-8 rounded-lg shadow-lg transform transition-transform hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-xl">
                <Futuristic />
                <img
                  src="/Images/hwally.png"
                  alt="Project Thumbnail"
                  class="w-full h-48 object-cover rounded-xl mb-4"
                />

                <h2 class="text-md font-semibold">Happy Wally Redesign</h2>
                <p class="pt-2 pb-2">Made using:</p>
                <ul>
                  <li class="flex items-start text-gray-300 mb-2">
                    <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white-500 mr-2">
                      ✔
                    </span>
                    Figma
                  </li>
                  <li class="flex items-start text-gray-300 mb-2">
                    <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white-500 mr-2">
                      ✔
                    </span>
                    ReactJS + Vite
                  </li>
                  <li class="flex items-start text-gray-300 mb-2">
                    <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white-500 mr-2">
                      ✔
                    </span>
                    Material UI
                  </li>
                </ul>

                <a href="https://h-wally-redesign.vercel.app/" target="_blank">
                  <button className=" bg-gradient-to-r from-purple-500 to-purple-800 hover:from-purple-600 hover:to-purple-800 text-white font-raleway font-normal py-3 px-6 rounded-[24px] md:w-auto w-full">
                    Live Preview
                  </button>
                </a>
              </div>

              {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

              <div class="glassmorphismFeat2 font-raleway flex flex-col flex-grow pl-8 pr-8 pt-8 pb-8 rounded-lg shadow-lg transform transition-transform hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-xl">
                <Futuristic />
                <img
                  src="/Images/DesignImages/DH.png"
                  alt="Project Thumbnail"
                  class="w-full h-48 object-cover rounded-xl mb-4"
                />

                <h2 class="text-md font-semibold">DisputeHelp</h2>
                <p class="pt-2 pb-2">Made using:</p>
                <ul>
                  <li class="flex items-start text-gray-300 mb-2">
                    <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white-500 mr-2">
                      ✔
                    </span>
                    Figma
                  </li>
                  <li class="flex items-start text-gray-300 mb-2">
                    <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white-500 mr-2">
                      ✔
                    </span>
                    WordPress
                  </li>
                  <li class="flex items-start text-gray-300 mb-2">
                    <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white-500 mr-2">
                      ✔
                    </span>
                    Elementor Pro
                  </li>
                </ul>

                <a href="https://disputehelp.com/" target="_blank">
                  <button className=" bg-gradient-to-r from-purple-500 to-purple-800 hover:from-purple-600 hover:to-purple-800 text-white font-raleway font-normal py-3 px-6 rounded-[24px] md:w-auto w-full">
                    Live Preview
                  </button>
                </a>
              </div>

              {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

              <div class="glassmorphismFeat2 font-raleway flex flex-col flex-grow pl-8 pr-8 pt-8 pb-8 rounded-lg shadow-lg transform transition-transform hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-xl">
                <Futuristic />
                <img
                  src="/Images/DesignImages/CBH.png"
                  alt="Project Thumbnail"
                  class="w-full h-48 object-cover rounded-xl mb-4"
                />

                <h2 class="text-md font-semibold">ChargebackHelp</h2>
                <p class="pt-2 pb-2">Made using:</p>
                <ul>
                  <li class="flex items-start text-gray-300 mb-2">
                    <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white-500 mr-2">
                      ✔
                    </span>
                    Figma
                  </li>
                  <li class="flex items-start text-gray-300 mb-2">
                    <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white-500 mr-2">
                      ✔
                    </span>
                    WordPress
                  </li>
                  <li class="flex items-start text-gray-300 mb-2">
                    <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white-500 mr-2">
                      ✔
                    </span>
                    Avada Builder
                  </li>
                </ul>

                <a href="https://chargebackhelp.com/" target="_blank">
                  <button className=" bg-gradient-to-r from-purple-500 to-purple-800 hover:from-purple-600 hover:to-purple-800 text-white font-raleway font-normal py-3 px-6 rounded-[24px] md:w-auto w-full">
                    Live Preview
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSite;
