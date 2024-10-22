import React from 'react';

const FigmaLink2 = () => {
  const openLinkInNewTab = () => {
    window.open('https://www.figma.com/design/IVADVoACseE9MmvM9wG25Y/Celine-Daile-Terrado---Portfolio', '_blank'); // Replace with the desired link
  };

  return (
    <div className="flex justify-center items-center ">
      <button 
        onClick={openLinkInNewTab}
        className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white font-raleway font-normal py-3 px-6 rounded-[24px]"
      >
        OPEN MY FIGMA PORTFOLIO
      </button>
    </div>
  );
};

export default FigmaLink2;
