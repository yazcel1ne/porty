// Parallax.jsx
import React from "react";
import WavyBg from "./WavyBg";

const Parallax = () => {
  return (
    <div className="parallax relative overflow-hidden min-h-screen">
      <div className="waveWrapper absolute top-0 left-0 w-full h-full z-0">
        <WavyBg />
      </div>
      <div className="waveWrapper absolute top-0 left-0 w-full h-full overflow-hidden z-10">
        {/* Other content goes here */}
      </div>
    </div>
  );
};

export default Parallax;

