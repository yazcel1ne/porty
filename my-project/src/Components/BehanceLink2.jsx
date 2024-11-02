import React from 'react';

const BehanceLink2 = () => {
  const openLinkInNewTab = () => {
    window.open(
      'https://www.behance.net/celineterrado',
      '_blank'
    );
  };

  return (
    <button 
      onClick={openLinkInNewTab}
      className="border border-white text-white hover:bg-purple-600 hover:text-white font-raleway font-normal py-2 px-1 rounded-[24px] transition duration-300 ease-in-out"
    >
      BEHANCE PORTFOLIO
    </button>
  );
};

export default BehanceLink2;
