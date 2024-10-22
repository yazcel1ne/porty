import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <button 
      onClick={goToHome}
      className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white font-raleway font-normal py-3 px-6 rounded-[24px]"
    >
     BACK TO HOME
    </button>
  );
};

export default BackButton;
