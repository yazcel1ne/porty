import React from 'react';

const BehanceLink = () => {
  const openLinkInNewTab = () => {
    window.open(
      'https://www.behance.net/celineterrado',
      '_blank'
    );
  };

  return (
    <button 
      onClick={openLinkInNewTab}
      className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white font-raleway font-normal py-3 px-6 rounded-[24px] md:w-auto w-full"
    >
      BEHANCE PORTFOLIO
    </button>
  );
};

export default BehanceLink;

