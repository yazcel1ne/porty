import React from "react";
import ContactButton from "../../Components/ContactButton";
import GradientText from "../../assets/GradientText";
import { BouncingImage } from "../../assets/BouncingBall";
import WavyBg from "../Pages/WavyBg";

const ClientWork = () => {
  return (
    <div className="relative font-raleway">
      <div className="relative-container">
        <div className="max-w-screen-xl px-4 my-10 mx-auto grid gap-8 md:grid-cols-1  ">
          <div className=" p-8 flex flex-col justify-center items-center text-white md:flex md:items-left md:justify-left rounded-[24px]  py-16 ">
            <div class="pb-12">
              <p className=" text-center text-2xl font-raleway ml-2 font-bold ">
                Clients I've Worked With
              </p>
            </div>

            {/* Marquee Container */}
            <div className="marquee-container overflow-hidden w-full">
              <div className="flex animate-marquee whitespace-nowrap">
                {/* Repeat the image set multiple times for a continuous effect */}
                {Array.from({ length: 2 }).map((_, idx) => (
                  <div key={idx} className="flex">
                    <div className="w-30 h-auto  ">
                      <img
                        src="/Images/Clients/nms.png"
                        alt="Image 1"
                        className="w-30 h-50  mx-2"
                      />
                    </div>
                    <div className="w-30 h-auto  ">
                      <img
                        src="/Images/Clients/dhelp.png"
                        alt="Image 2"
                        className="w-30 h-auto mx-2"
                      />
                    </div>
                    <div className="w-30 h-auto  ">
                      <img
                        src="/Images/Clients/chelp.png"
                        alt="Image 3"
                        className="w-30 h-auto mx-2"
                      />
                    </div>
                    <div className="w-30 h-auto  ">
                      <img
                        src="/Images/Clients/lgc.png"
                        alt="Image 4"
                        className="w-30 h-auto mx-2"
                      />
                    </div>
                    <div className="w-30 h-auto  ">
                      <img
                        src="/Images/Clients/aff.png"
                        alt="Image 6"
                        className="w-30 h-auto mx-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientWork;
