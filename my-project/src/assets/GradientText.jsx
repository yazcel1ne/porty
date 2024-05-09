import React from 'react';

const GradientText = ({ children }) => {
  return (
    <span className="md:text-5xl text-3xl font-raleway ml-2 font-bold bg-gradient-to-r from-purple-700 via-pink-500 to-blue-400 text-transparent bg-clip-text animate-gradient">
      {children}
    </span>
  );
};



export default GradientText;
