// YourComponentFile.jsx
import React from "react";
import "/src/styles/animations.css";

export const BouncingImage = () => {
  // Generate a random duration between 1s and 2s
  const duration = Math.floor(Math.random() * 1000) + 1000; // Random duration between 1000ms and 2000ms

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
  // Generate a random delay between 0s and 1s
  const delay = Math.floor(Math.random() * 1000); // Random delay between 0ms and 1000ms

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
