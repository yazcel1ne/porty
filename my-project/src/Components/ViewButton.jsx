import React from "react";
import { Link } from "react-router-dom";

const ViewButton = () => {
  return (
    <div className="relative">
      <div className="flex-grow"></div>
      <Link
        to="/ComingSoon" // Replace "/other-page" with the path to your other page
        className="inline-flex items-center border-0 border-white hover:border-purple-400 from-white to-white hover:bg-BB96F6 text-purple-400 hover:text-white font-raleway font-semibold py-2 rounded-[24px] mr-4"
      >
        LIVE PREVIEW
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          class="ml-2"
        >
          <path
            d="M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355Z"
            fill="url(#paint0_linear_7134_1119)"
          />
          <path
            d="M8 11.25C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75H14.1893L12.4697 14.4697C12.1768 14.7626 12.1768 15.2374 12.4697 15.5303C12.7626 15.8232 13.2374 15.8232 13.5303 15.5303L16.5303 12.5303C16.671 12.3897 16.75 12.1989 16.75 12C16.75 11.8011 16.671 11.6103 16.5303 11.4697L13.5303 8.46967C13.2374 8.17678 12.7626 8.17678 12.4697 8.46967C12.1768 8.76256 12.1768 9.23744 12.4697 9.53033L14.1893 11.25H8Z"
            fill="url(#paint1_linear_7134_1119)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_7134_1119"
              x1="12"
              y1="2"
              x2="12"
              y2="22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BB96F6" />
              <stop offset="1" stop-color="#7D3DE3" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_7134_1119"
              x1="7.25"
              y1="12"
              x2="16.75"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1F1F1F" />
              <stop offset="0.52" stop-color="#191919" />
              <stop offset="1" stop-color="#141414" />
            </linearGradient>
          </defs>
        </svg>
      </Link>
    </div>
  );
};

export default ViewButton;
