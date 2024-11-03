import React from 'react';

const FigmaLink = () => {
  const openLinkInNewTab = () => {
    window.open(
      'https://www.figma.com/design/IVADVoACseE9MmvM9wG25Y/Celine-Daile-Terrado---Portfolio',
      '_blank'
    );
  };

  return (
    <button 
      onClick={openLinkInNewTab}
      className="border border-white text-white hover:bg-purple-600 hover:text-white font-raleway font-normal py-3 px-6 rounded-[24px] transition duration-300 ease-in-out md:w-auto w-full"
    >
      Figma Portfolio
    </button>
  );
};

export default FigmaLink;

