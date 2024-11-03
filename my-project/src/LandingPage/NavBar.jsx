import React, { useState } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home"); // Initialize the active link state

  const downloadPdf = () => {
    window.open(
      "https://drive.google.com/file/d/1s3rTegsEIkH2P7YuZQUwW9jmeznJPkX5/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <nav className="bg-gradient-custom fixed w-full z-10 top-0 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/Images/logo5.png"
              alt="Logo"
              className="self-center text-2xl font-semibold whitespace-nowrap text-white"
            />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={downloadPdf}
              className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white font-raleway font-normal py-3 px-6 rounded-[24px]"
            >
              DOWNLOAD CV
            </button>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:ml-auto">
              <li>
                <a
                  href="#"
                  onClick={() => setActiveLink("home")} // Update active link state
                  className={`block py-2 px-3 ${activeLink === "home" ? "text-gradient" : "text-white"} md:bg-transparent md:p-0`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const servicesSection = document.getElementById("my-services");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" });
                    }
                    setActiveLink("services"); // Update active link state
                  }}
                  className={`block py-2 px-3 ${activeLink === "services" ? "text-gradient" : "text-white"} md:bg-transparent md:p-0`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const designsSection = document.getElementById("my-designs");
                    if (designsSection) {
                      designsSection.scrollIntoView({ behavior: "smooth" });
                    }
                    setActiveLink("designs"); // Update active link state
                  }}
                  className={`block py-2 px-3 ${activeLink === "designs" ? "text-gradient" : "text-white"} md:bg-transparent md:p-0`}
                >
                  Designs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                    setActiveLink("contact"); // Update active link state
                  }}
                  className={`block py-2 px-3 ${activeLink === "contact" ? "text-gradient" : "text-white"} md:bg-transparent md:p-0`}
                >
                  Contact Me
                </a>
              </li>
              {/* Add more list items as needed */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
