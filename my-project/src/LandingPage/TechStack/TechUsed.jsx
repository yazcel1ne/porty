import React from "react";
import TechHeader from "../../assets/TechHeader";

const TechUsed = () => {
  return (
    <>
      <div class="zindexdiv">
        <div className=" font-raleway ">
          <TechHeader />
        </div>

        <div>
          <div className="max-w-screen-xl mx-auto lg:gap-8 xl:gap-8 flex  grid gap-8 md:grid-cols-2 ">
            <div>
              <img
                src="/Images/TechLogos/Palette.png"
                alt="Palette"
                class="mr-2 w-8 h-auto inline-block pb-4"
              />
              <h1 class=" text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl text-white">
                <span>Design</span>
              </h1>
            </div>

            <div>
              <img
                src="/Images/TechLogos/Keyboard.png"
                alt="Palette"
                class="mr-2 w-8 h-auto inline-block pb-4"
              />
              <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl text-white">
                <span>Development</span>
              </h1>
            </div>
          </div>

          <div class="max-w-screen-xl mx-auto grid gap-8 md:grid-cols-2">
            <div class="max-w-screen-xl  grid grid-cols-4 py-16 gap-4 bg-purpbg rounded-[24px]">
              <div className="text-center pb-16">
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
            <div class="max-w-screen-xl  py-16 grid grid-cols-4 gap-4 bg-purpbg rounded-[24px]">
              <div className="text-center">
                <img
                  src="/Images/TechLogos/html5.svg"
                  alt="Logo"
                  className="mx-auto w-12 h-auto"
                />
                <p className="mt-2 text-white">HTML</p>
              </div>

              <div className="text-center pb-16">
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
    </>
  );
};

export default TechUsed;
