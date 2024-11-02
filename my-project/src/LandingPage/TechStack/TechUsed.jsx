import React from "react";
import TechHeader from "../../assets/TechHeader";
import WavyBg from "../Pages/WavyBg";

const TechUsed = () => {
  return (
    <div className=" relative ">
      <div className="relative font-raleway ">

        <div>
          <TechHeader />
        </div>

        <div class="">
          <div class="max-w-screen-xl px-4 mx-auto grid gap-8 md:grid-cols-2  ">
            <div>
              <div >
                <img
                  src="/Images/TechLogos/Palette.png"
                  alt="Palette"
                  class="mr-2 w-10 h-auto inline-block pb-2"
                />
                <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl text-white ">
                  <span>Design</span>
                </h1>
              </div>
              <div class="max-w-screen-xl  grid md:grid-cols-4 grid-cols-2 py-16 gap-4 glassmorphism rounded-[24px] shadow-lg">
                <div className="text-center md:pb-16 ">
                  <img
                    src="/Images/TechLogos/figma.svg"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">Figma</p>
                </div>

                <div className="text-center">
                  <img
                    src="/Images/TechLogos/wordpress.svg"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">WordPress</p>
                </div>

                <div className="text-center">
                  <img
                    src="/Images/TechLogos/oxygen.png"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">Oxygen</p>
                </div>
                <div className="text-center">
                  <img
                    src="/Images/TechLogos/elementor.png"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">Elementor</p>
                </div>
                <div className="text-center">
                  <img
                    src="/Images/TechLogos/avada.png"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">Avada</p>
                </div>
                <div className="text-center">
                  <img
                    src="/Images/TechLogos/ps.png"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">Photoshop</p>
                </div>
                <div className="text-center">
                  <img
                    src="/Images/TechLogos/canva.svg"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">Canva</p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="/Images/TechLogos/Keyboard.png"
                  alt="Palette"
                  class="mr-2 w-10 h-auto inline-block pb-3"
                />
                <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl text-white">
                  <span>Development</span>
                </h1>
              </div>

              <div class="max-w-screen-xl  grid md:grid-cols-4 grid-cols-2 py-16 gap-4 glassmorphism rounded-[24px] shadow-lg">
                <div className="text-center md:pb-16 ">
                  <img
                    src="/Images/TechLogos/html5.svg"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">HTML</p>
                </div>

                <div className="text-center ">
                  <img
                    src="/Images/TechLogos/css3.svg"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">CSS</p>
                </div>

                <div className="text-center">
                  <img
                    src="/Images/TechLogos/js.svg"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">Javascript</p>
                </div>

                <div className="text-center">
                  <img
                    src="/Images/TechLogos/reactjs.svg"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">React</p>
                </div>

                <div className="text-center">
                  <img
                    src="/Images/TechLogos/materialui.svg"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">Material UI</p>
                </div>

                <div className="text-center">
                  <img
                    src="/Images/TechLogos/bootstrap4.svg"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">Bootstrap</p>
                </div>

                <div className="text-center">
                  <img
                    src="/Images/TechLogos/tailwindcss.svg"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">Tailwind CSS</p>
                </div>

                <div className="text-center">
                  <img
                    src="/Images/TechLogos/github.svg"
                    alt="Logo"
                    className="mx-auto w-12 h-auto"
                  />
                  <p className="mt-2 text-white">Github</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechUsed;
