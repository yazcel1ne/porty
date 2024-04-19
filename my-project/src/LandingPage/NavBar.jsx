import React from "react";
import GradientButton from "../Components/Button";

const NavBar = () => {
  return (
    <>
      <nav className="bg-transparent font-raleway ">
        <div className="container mx-auto flex justify-between items-center px-20 ">
          <div className="text-white font-bold">Logo</div>
          <ul className="flex items-center">
            {" "}
            {/* Updated */}
            <li className="mr-6">
              <a className="text-white hover:text-gray-300" href="#">
                HOME
              </a>
            </li>
            <li className="mr-6">
              <a className="text-white hover:text-gray-300" href="#">
                SERVICES
              </a>
            </li>
            <li className="mr-6">
              <a className="text-white hover:text-gray-300" href="#">
                DESIGN
              </a>
            </li>
            <li>
              {" "}
              {/* Added */}
              <GradientButton />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
