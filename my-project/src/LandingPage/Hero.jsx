import React from "react";
import NavBar from "./NavBar";
import {
  BouncingImage,
  BouncingSmall,
  BouncingMed,
  BouncingL,
} from "../assets/BouncingBall";
import "/src/styles/transitions.css";
import WavyBg from "./Pages/WavyBg";
import GradientText from "../assets/GradientText";

const Hero = () => {
  const downloadPdf = () => {
    window.open(
      "https://drive.google.com/file/d/12kAIOGVlefwqpo4bymclJlU8Oz5pRWqQ/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <NavBar />

      {/* <div class="dia-right w-100 border-gradient-a">
        <img src="/Images/dia.png" alt="bg" />
      </div> */}

      {/* <div class="dia-left w-20 border-gradient-a">
        <img src="/Images/dia.png" alt="bg" />
      </div> */}

      <section class="bg-transparent ">
        <div class="zindexdiv grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mt-20">
          <div class="mr-auto place-self-center lg:col-span-7">
            <div className="max-w-2xl mb-4 animate-left">
              <span class="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                <h1 className="text-4xl mb-4 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white ">
                  Hi!
                </h1>
              </span>
              <h1
                className="text-4xl font-extrabold mb-4 tracking-tight leading-none md:text-5xl xl:text-6xl text-white "
                style={{ animationDelay: "0.5s" }}
              >
                I'm Celine
              </h1>
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text font-raleway">
                <span className="text-6xl font-bold bg-gradient-to-r from-purple-700 via-pink-500 to-blue-400 text-transparent bg-clip-text animate-gradient">
                  Web Designer
                </span>
                <p class="max-w-2xl mb-4 mt-4 font-light text-white lg:mb-12 md:text-lg lg:text-xl dark:text-gray-400 relative z-10 typing-animation">
                  Frontend Developer | WordPress Developer
                </p>
              </div>
            </div>

            <div className="flex grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={downloadPdf}
                className="inline-flex items-center bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white font-raleway font-normal py-3 px-6 rounded-[24px] mr-4"
              >
                DOWNLOAD CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M21.1837 12.7051H15.9796L13.6327 15.0641C13.4286 15.2692 13.1224 15.4744 12.9184 15.5769C12.6122 15.6795 12.3061 15.7821 12 15.7821C11.6939 15.7821 11.3878 15.6795 11.0816 15.5769C10.7755 15.4744 10.5714 15.2692 10.3673 15.0641L8.02041 12.7051H2.81633C2.40816 12.7051 2 13.0128 2 13.5256V17.3205C2 18.7564 3.12245 19.9872 4.55102 20.0897C6.69388 20.2949 9.65306 20.5 12 20.5C14.3469 20.5 17.3061 20.2949 19.449 20.0897C20.8776 19.9872 22 18.7564 22 17.3205V13.5256C22 13.1154 21.5918 12.7051 21.1837 12.7051Z"
                    fill="white"
                  />
                  <path
                    d="M10.1633 12.7051L11.4898 14.0385C11.5918 14.141 11.6939 14.141 11.6939 14.2436C11.7959 14.2436 11.898 14.3462 12 14.3462C12.102 14.3462 12.2041 14.3462 12.3061 14.2436C12.4082 14.2436 12.5102 14.141 12.5102 14.0385L15.5714 10.9615C15.8776 10.6538 15.8776 10.141 15.5714 9.83333C15.3673 9.73077 15.2653 9.62821 15.0612 9.62821C14.8571 9.62821 14.6531 9.73077 14.551 9.83333L12.8163 11.5769V5.32051C12.8163 4.91026 12.5102 4.5 12 4.5C11.4898 4.5 11.1837 4.91026 11.1837 5.32051V11.6795L9.44898 9.9359C9.34694 9.73077 9.14286 9.62821 8.93878 9.62821C8.73469 9.62821 8.53061 9.73077 8.42857 9.9359C8.12245 10.2436 8.12245 10.7564 8.42857 11.0641L10.1633 12.7051Z"
                    fill="white"
                  />
                </svg>
              </button>

              <button className="inline-flex items-center border-2 border-white hover:border-purple-400 from-white to-white hover:bg-BB96F6 text-white hover:text-white font-raleway font-normal py-2 px-6 rounded-[24px] mr-4">
                {" "}
                GET IN TOUCH
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M18.2637 13.44L15.0237 11.82C16.3137 10.82 17.1437 9.26 17.1437 7.5C17.1437 4.47 14.6737 2 11.6437 2C8.61373 2 6.14373 4.47 6.14373 7.5C6.14373 9.63 7.36373 11.48 9.14373 12.39V15.65C6.99373 15.19 7.12373 15.21 6.88373 15.21C6.35373 15.21 5.85373 15.42 5.47373 15.8L4.07373 17.22L9.16373 22.31C9.59373 22.75 10.1937 23 10.8137 23H17.1137C18.0937 23 18.9237 22.3 19.0837 21.33L19.8837 16.62C20.1037 15.32 19.4537 14.04 18.2637 13.44ZM17.9137 16.29L17.1137 21H10.8137C10.7237 21 10.6437 20.96 10.5737 20.9L6.89373 17.22L11.1437 18.11V7.5C11.1437 7.22 11.3637 7 11.6437 7C11.9237 7 12.1437 7.22 12.1437 7.5V13.5H13.9037L17.3637 15.23C17.7637 15.43 17.9837 15.86 17.9137 16.29ZM8.14373 7.5C8.14373 5.57 9.71373 4 11.6437 4C13.5737 4 15.1437 5.57 15.1437 7.5C15.1437 8.45 14.7637 9.31 14.1437 9.94V7.5C14.1437 6.12 13.0237 5 11.6437 5C10.2637 5 9.14373 6.12 9.14373 7.5V9.94C8.52373 9.31 8.14373 8.45 8.14373 7.5Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/Images/hero21.png" alt="bg" />
          </div>
        </div>
      </section>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {" "}
        <BouncingSmall />
      </div>

      <div className="absolute top-4/3 left-2/3 transform -translate-x-4/2 -translate-y-1/5">
        {" "}
        <BouncingImage />
      </div>

    <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        {" "}
        <BouncingImage />
      </div> 
      {/* <div className="absolute top-4/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        {" "}
        <BouncingSmall />
      </div>  */}

      {/* <div>
        <div class="absolute top-20 right-0 bottom-0 w-20 border-gradient-a" >
          <img src="src/Images/donut.png" alt="bg" />
        </div>
      </div> */}
    </>
  );
};

export default Hero;
