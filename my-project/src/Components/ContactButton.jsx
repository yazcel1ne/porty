import React from 'react';

const ContactButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToContact}
      className="bg-gradient-to-r from-purple-500 to-purple-800 hover:from-purple-600 hover:to-purple-800 text-white font-raleway font-normal py-3 px-6 rounded-[24px] md:w-auto w-full"
    >
      Contact Me
    </button>
  );
};

export default ContactButton;
