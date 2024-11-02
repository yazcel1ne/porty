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
      {/* Hover effect on the image */}
      <div className="image-container">
        <img
          src={src}
          alt={alt}
          className="w-full h-80 object-cover object-top rounded-[24px] cursor-pointer transition-transform duration-300 hover:scale-125 hover:-rotate-6" // Adjusted scale and rotation
          onClick={toggleModal}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          onClick={handleClose}
        >
          {/* Modal container at 70% size */}
          <div className="w-3/4 h-3/4 rounded-lg overflow-hidden shadow-lg flex flex-col relative">
            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto p-4">
              <p className="text-black mb-4 text-center">{modalText}</p>
              <img
                src={src}
                alt={alt}
                className="w-full h-auto object-cover" // No animation on the modal image
              />
            </div>
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-black"
              onClick={toggleModal}
              style={{
                backgroundColor: "rgba(200, 200, 200, 0.8)", // Light grayish background
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
