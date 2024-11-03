import React, { useState, useEffect } from "react";

const ImageModal = ({ src, alt, modalText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to manage visibility

  const openModal = () => {
    setShowModal(true); // Show modal immediately
    document.body.classList.add("modal-open");
    setTimeout(() => {
      setIsOpen(true); // Set isOpen after showModal to allow for the opening animation
    }, 0); // Timeout to ensure state update occurs after render
  };

  const closeModal = () => {
    setIsOpen(false); // Set isOpen to false for closing animation
  };

  const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      closeModal(); // Close modal on backdrop click
    }
  };

  useEffect(() => {
    if (!isOpen) {
      // If closing, wait for the exit animation to finish before hiding the modal
      const timer = setTimeout(() => {
        setShowModal(false);
        document.body.classList.remove("modal-open");
      }, 300); // Match duration with the transition time

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [isOpen]);

  return (
    <div>
      <div className="image-container">
        <img
          src={src}
          alt={alt}
          className="w-full h-80 object-cover object-top rounded-[24px] cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-3"
          onClick={openModal} // Open modal when image is clicked
        />
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          onClick={handleClose}
        >
          <div
            className={`w-11/12 md:w-3/4 lg:w-2/3 h-11/12 md:h-3/4 rounded-lg overflow-hidden shadow-lg flex flex-col relative transform transition-all duration-300 ${
              isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
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
            className="absolute top-10 right-10 mt-0 mr-0"
            onClick={closeModal} // Close modal when button is clicked
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.4)")}
          >
            <span style={{ fontSize: "32px", color: "black", fontWeight: "bold" }}>×</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
