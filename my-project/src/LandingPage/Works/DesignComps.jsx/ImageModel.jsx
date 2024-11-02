import React, { useState } from "react";

const ImageModal = ({ src, alt, modalText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  };

  const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div>
      <img
        src={src}
        alt={alt}
        className="w-full h-80 object-cover object-top rounded-[24px] transition-transform duration-300 transform hover:scale-105 cursor-pointer"
        onClick={toggleModal}
      />

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          onClick={handleClose}
        >
          <div className="max-w-full max-h-full overflow-auto text-center pt-24">
            <p className="text-white mb-4">{modalText}</p>
            <img src={src} alt={alt} className="max-w-full max-h-full" />
            <button
              className="absolute top-0 right-0 mt-[130px] mr-5 text-white"
              onClick={toggleModal}
              style={{
                backgroundColor: "rgba(50, 50, 50, 0.8)", // Dark grayish background
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "20px" }}>×</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
