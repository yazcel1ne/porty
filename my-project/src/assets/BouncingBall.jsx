
import React from "react";
import "/src/styles/animations.css";

export const BouncingImage = () => {

  const duration = Math.floor(Math.random() * 1000) + 1000; 
  return (
    <div className="relative">
      <img
        src="src/Images/Ellipse.png"
        alt="Bouncing Image"
        style={{ animationDuration: `${duration}ms` }}
        className="animate-bounce"
      />
    </div>
  );
};

export const BouncingSmall = () => {

  const delay = Math.floor(Math.random() * 1000); 

  return (
    <div className="relative">
      <img
        src="src/Images/Ellipsesmall.png"
        alt="Bouncing Image"
        style={{ animationDelay: `-${delay}ms` }}
        className="animate-bounce"
      />
    </div>
  );
};

export const BouncingMed = () => {
  return (
    <div className="relative">
      <img
        src="src/Images/Ellipsemedium.png"
        alt="Bouncing Image"
        className="animate-bounce"
      />
    </div>
  );
};

export const BouncingL = () => {
  return (
    <div className="relative">
      <img
        src="src/Images/Ellipselarge.png"
        alt="Bouncing Image"
        className="animate-bounce"
      />
    </div>
  );
};
