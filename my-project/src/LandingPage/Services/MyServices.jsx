import React, { useRef, useEffect } from "react";
import LearnMore from "../../Components/LearnMore";
import { BouncingImage, BouncingSmall } from "../../assets/BouncingBall";
import ParticleCanvas from "../../assets/ParticleCanvas";
import WavyBg from "../Pages/WavyBg";

import FadeUpHeader from "../../assets/FadeUpHeader";
import FigmaLink from "../../Components/FigmaLink";
import FigmaLink2 from "../../Components/FigmaLink2";

const MyServices = () => {
  return (
    <div class="relative">
      <div className="relative   font-raleway ">
        {/* <img
          src="/Images/donutflip.png"
          alt="bg"
          class="absolute top-0 left-0"
        /> */}
        <div>
          <FadeUpHeader />
        </div>

        <div class="relative-container">
          <div class="max-w-screen-xl px-4 mx-auto grid gap-8 md:grid-cols-3">
          <div className="bg-purpbg flex-col text-white mb-4 md:flex md:items-left md:justify-left transition-transform duration-300 transform hover:scale-105 rounded-[24px]  shadow-lg">
          {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                class="ml-8 mt-8"
              >
                <g clip-path="url(#clip0_7070_1579)">
                  <path
                    d="M9.375 35.625H20.625V39.375H13.125C12.6277 39.375 12.1508 39.5725 11.7992 39.9241C11.4475 40.2758 11.25 40.7527 11.25 41.25C11.25 41.7473 11.4475 42.2242 11.7992 42.5758C12.1508 42.9274 12.6277 43.125 13.125 43.125H31.875C32.3723 43.125 32.8492 42.9274 33.2008 42.5758C33.5525 42.2242 33.75 41.7473 33.75 41.25C33.75 40.7527 33.5525 40.2758 33.2008 39.9241C32.8492 39.5725 32.3723 39.375 31.875 39.375H24.375V35.625H35.625C37.7854 35.6223 39.8788 34.8748 41.5523 33.5086C43.2259 32.1425 44.3773 30.2411 44.8125 28.125H0.1875C0.622681 30.2411 1.77409 32.1425 3.44765 33.5086C5.12122 34.8748 7.21462 35.6223 9.375 35.625V35.625Z"
                    fill="url(#paint0_linear_7070_1579)"
                  />
                  <path
                    d="M35.625 1.875H9.375C6.88951 1.87798 4.50667 2.86665 2.74916 4.62416C0.991654 6.38167 0.00297723 8.76451 0 11.25L0 24.375H45V11.25C44.997 8.76451 44.0083 6.38167 42.2508 4.62416C40.4933 2.86665 38.1105 1.87798 35.625 1.875V1.875Z"
                    fill="url(#paint1_linear_7070_1579)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_7070_1579"
                    x1="22.5"
                    y1="28.125"
                    x2="22.5"
                    y2="43.125"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#BB96F6" />
                    <stop offset="1" stop-color="#7D3DE3" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_7070_1579"
                    x1="22.5"
                    y1="1.875"
                    x2="22.5"
                    y2="24.375"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#BB96F6" />
                    <stop offset="1" stop-color="#7D3DE3" />
                  </linearGradient>
                  <clipPath id="clip0_7070_1579">
                    <rect width="45" height="45" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div class="font-raleway p-8 flex flex-col flex-grow">
                <h1 class="text-2xl  font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl mb-6">
                  Web & Mobile Design
                </h1>
                <p class="mb-0">
                  I design intuitive interfaces that enhance user engagement and
                  satisfaction. I ensure a cohesive visual identity across all
                  platforms, delivering stunning designs that elevate your
                  brand.{" "}
                </p>
                <div class="flex-grow"></div>
               
              </div>
            </div>
            {/* ---------------------- */}

            <div className="bg-purpbg flex-col text-white mb-4 md:flex md:items-left md:justify-left transition-transform duration-300 transform hover:scale-105 rounded-[24px]  shadow-lg">              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="45"
                viewBox="0 0 46 45"
                fill="none"
                class="ml-8 mt-8"
              >
                <path
                  d="M38.0802 16.6346C38.0802 16.0577 38.0802 15.6731 38.0802 15.2885C37.6917 9.13462 32.8356 4.13462 26.6197 3.75C25.4543 3.75 24.2888 3.75 23.3176 3.75C20.4039 3.75 16.3248 4.13462 13.6054 4.32692C10.8859 4.51923 8.94348 6.44231 8.74924 8.94231C8.55499 12.0192 8.1665 17.9808 8.1665 22.4038C8.1665 26.6346 8.55499 32.5962 8.74924 35.8654C8.94348 38.3654 10.8859 40.4808 13.4111 40.6731C16.1305 40.8654 20.2097 41.25 23.1233 41.25C26.037 41.25 30.1161 40.8654 32.8356 40.6731C35.3607 40.4808 37.3032 38.3654 37.4974 35.8654C37.6917 32.7885 38.0802 26.8269 38.0802 22.4038C38.2744 20.8654 38.0802 18.9423 38.0802 16.6346ZM17.296 24.7115H21.1809C21.9579 24.7115 22.7348 25.2885 22.7348 26.25C22.7348 27.2115 22.1521 27.7885 21.1809 27.7885H17.296C16.519 27.7885 15.742 27.2115 15.742 26.25C15.742 25.2885 16.519 24.7115 17.296 24.7115ZM25.0658 33.5577H17.296C16.519 33.5577 15.742 32.9808 15.742 32.0192C15.742 31.0577 16.3248 30.4808 17.296 30.4808H25.0658C25.8428 30.4808 26.6197 31.0577 26.6197 32.0192C26.6197 32.9808 25.8428 33.5577 25.0658 33.5577ZM28.9507 15.0962C27.591 15.0962 26.6197 13.9423 26.6197 12.7885V6.63462C31.0874 7.01923 34.778 10.4808 35.1665 15.0962H28.9507Z"
                  fill="url(#paint0_linear_7070_1585)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7070_1585"
                    x1="23.1665"
                    y1="3.75"
                    x2="23.1665"
                    y2="41.25"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#BB96F6" />
                    <stop offset="1" stop-color="#7D3DE3" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="font-raleway p-8 flex flex-col flex-grow">
              <h1 class="text-2xl  font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl mb-6">
                  WordPress Development
                </h1>
                <p class="mb-0">
                  Experienced in WordPress development, crafting custom themes
                  and plugins. Emphasis on optimizing sites for SEO and
                  performance. Dedicated to realizing clients' visions with
                  tailored solutions.
                </p>
                <div class="flex-grow"></div>
               
              </div>
            </div>

            <div className="bg-purpbg flex-col text-white mb-4 md:flex md:items-left md:justify-left transition-transform duration-300 transform hover:scale-105 rounded-[24px]  shadow-lg">              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="45"
                viewBox="0 0 46 45"
                fill="none"
                class="ml-8 mt-8"
              >
                <path
                  d="M33.8949 41.25C38.037 41.25 41.3949 37.8921 41.3949 33.75C41.3949 29.6079 38.037 26.25 33.8949 26.25H33.4829L22.6048 37.1212C22.151 37.5748 21.896 38.1358 21.896 38.7774C21.896 40.113 22.9787 41.25 24.3143 41.25H33.8949Z"
                  fill="url(#paint0_linear_7070_1591)"
                />
                <path
                  d="M25.2407 9.2978L23.2631 11.2754C22.3896 12.152 21.8982 13.3384 21.896 14.5759L21.896 30.0224C21.896 31.9998 21.896 32.9885 22.4839 33.2248C23.0718 33.4611 23.756 32.7474 25.1245 31.32L36.0709 19.902C38.9246 16.9254 38.8749 12.2136 35.9591 9.2978C32.9993 6.33799 28.2005 6.33799 25.2407 9.2978Z"
                  fill="url(#paint1_linear_7070_1591)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.0835 11.25V33.75C19.0835 37.8921 15.7256 41.25 11.5835 41.25C7.44136 41.25 4.0835 37.8921 4.0835 33.75V11.25C4.0835 7.10786 7.44136 3.75 11.5835 3.75C15.7256 3.75 19.0835 7.10786 19.0835 11.25ZM11.5835 35.625C12.619 35.625 13.4585 34.7855 13.4585 33.75C13.4585 32.7145 12.619 31.875 11.5835 31.875C10.548 31.875 9.7085 32.7145 9.7085 33.75C9.7085 34.7855 10.548 35.625 11.5835 35.625Z"
                  fill="url(#paint2_linear_7070_1591)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7070_1591"
                    x1="22.7392"
                    y1="3.75"
                    p
                    x2="22.7392"
                    y2="41.25"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#BB96F6" />
                    <stop offset="1" stop-color="#7D3DE3" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_7070_1591"
                    x1="22.7392"
                    y1="3.75"
                    x2="22.7392"
                    y2="41.25"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#BB96F6" />
                    <stop offset="1" stop-color="#7D3DE3" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_7070_1591"
                    x1="22.7392"
                    y1="3.75"
                    x2="22.7392"
                    y2="41.25"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#BB96F6" />
                    <stop offset="1" stop-color="#7D3DE3" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="font-raleway p-8 flex flex-col flex-grow">
              <h1 class="text-2xl  font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl mb-6">
                  Graphic & Logo Design
                </h1>
                <p class="mb-0">
                  Experienced at creating unique visuals that resonate with
                  clients' target audiences. Through close collaboration from
                  concept to completion and bring brands to life with
                  captivating visuals.
                </p>
                <div class="flex-grow"></div>
                
              </div>
            </div>
            <div className >
        
            </div>
            <FigmaLink2/>
          </div>

          {/* <img src="/Images/dia.png" alt="bg" class="background-image2" /> */}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
