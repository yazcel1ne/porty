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
      <div className="image-container">
        <img
          src={src}
          alt={alt}
          className="w-full h-80 object-cover object-top rounded-[24px] cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-3"
          onClick={toggleModal}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          onClick={handleClose}
        >
          <div className="w-11/12 md:w-3/4 lg:w-2/3 h-11/12 md:h-3/4 rounded-lg overflow-hidden shadow-lg flex flex-col relative">
            <div className="flex-1 overflow-y-auto p-4 hide-scrollbar">
              <p className="text-white mb-4 text-center">{modalText}</p>
              <img
                src={src}
                alt={alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <button
            className="absolute top-10 right-10 mt-0 mr-0 text-black"
            onClick={toggleModal}
            style={{
              backgroundColor: "rgba(100, 100, 100, 0.8)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "32px" }}>×</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
