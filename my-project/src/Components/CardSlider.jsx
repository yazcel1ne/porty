import React, { useState, useEffect, useRef } from "react";
import SayHeader from "../assets/SayHeader";
import Futuristic from "../LandingPage/Pages/Futuristic";

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true); // Initially paused until section is in view
  const sliderRef = useRef(null); // Reference to the slider section

  const testimonials = [
    {
      quote:
        "Celine is a hardworking and dedicated designer. She always puts in the effort to finish every task with creativity and care. Truly a pleasure to work with!",
      name: "Angeline S.",
      position: "Web Designer, NMS",
    },
    {
      quote:
        "We've teamed up on several projects, and her creativity always impress. As a fellow designer, I greatly value her design skills and dedication to producing high-quality work. I’m looking forward to collaborating again soon!",
      name: "Marjon D.",
      position: "WordPress Developer/Designer",
    },
    {
      quote:
        "I worked with Celine on my website portfolio, and I couldn't be happier with the results. She goes above and beyond to ensure that every detail aligns with your vision. Celine doesn’t just design; she truly listens, explores multiple options, and takes that extra step to elevate the user interface. Her dedication to creating a platform that looks great AND functions seamlessly is unmatched. It's clear she genuinely cares about delivering something that captures exactly what you want—and then some!",
      name: "Pamela L.",
      position: "Licensed Geologist/Writer",
    },
    {
      quote:
        "I collaborated with Celine on some design and graphic work or my business, and I couldn't be happier with the results. Celine is incredibly talented and brings a unique creative vision to each project. She works quickly without sacrificing quality, which made the entire process smooth and stress-free.",
      name: "Lisa S.",
      position: "Entrepreneur, PMU",
    },
    {
      quote:
        "She has a great eye for design and always manages to create websites that are not only beautiful but also easy to use. Her attention to detail and thoughtful approach really stand out in every project. If you're looking for a designer who combines creativity with a user-first mindset, Celine is the one!",
      name: "Sheena C.",
      position: "UI/UX Designer",
    },
    {
      quote:
        "Celine is exceptionally talented and impressively quick in her work. Her creativity and efficiency made the entire process seamless and enjoyable. I highly recommend her to anyone looking for top-notch design delivered with speed and professionalism.",
      name: "Katelyn C.",
      position: "Business Owner",
    },
  ];

  const totalPages = Math.ceil(testimonials.length / 3);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsPaused(false); // Activate slider when section is in view
        } else {
          setIsPaused(true); // Pause slider when section is out of view
        }
      },
      { threshold: 0.2 } // Trigger when 50% of the section is visible
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current); // Start observing the slider section
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current); // Cleanup observer on component unmount
      }
    };
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval); // Cleanup interval on component unmount or pause
    }
  }, [isPaused]);

  return (
    <div
      className="relative font-raleway"
      ref={sliderRef} // Assign the ref to the slider section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative-container">
        <SayHeader />
        <div className="max-w-screen-xl px-6 py-4 mx-auto my-10 overflow-hidden">
          {/* Slider Wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out gap-x-6"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array(totalPages)
              .fill(null)
              .map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className={`flex min-w-full gap-6 flex-col sm:flex-row ${
                    pageIndex === 1 ? "pr-6" : ""
                  }`}
                >
                  {testimonials
                    .slice(pageIndex * 3, pageIndex * 3 + 3)
                    .map((testimonial, index) => (
                      <div
                        key={index}
                        className="glassmorphism flex-col text-gray-300 p-6 rounded-[24px] shadow-lg flex-1 transition-transform duration-300 hover:-translate-y-2"
                      >
                        <div className="absolute inset-0">
                          <Futuristic />
                        </div>
                        <div className="font-raleway">
                          <div className="text-purple-600 text-6xl mb-2">
                            <span>❞</span>
                          </div>
                          <p className="text-gray-300">{testimonial.quote}</p>
                          <h1 className="font-semibold text-gray-300 pt-4">
                            {testimonial.name}
                            <p className="font-light">{testimonial.position}</p>
                          </h1>
                          <div className="flex text-yellow-500">
                            {Array(5)
                              .fill(null)
                              .map((_, starIndex) => (
                                <span key={starIndex}>&#9733;</span>
                              ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
          </div>

          {/* Navigation Arrows and Dots */}
          <div className="flex justify-center items-center mt-8 relative space-x-9">
            {/* Left Arrow */}
            <button
              onClick={() =>
                setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
              }
              className="text-white flex-shrink-0"
            >
              <img
                src="/Images/DesignImages/arrowleft.svg"
                alt="Previous"
                className="w-10 h-10 transform transition-transform duration-200 hover:scale-110"
              />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-4">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentIndex ? "bg-purple-600" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button onClick={nextSlide} className="text-white flex-shrink-0">
              <img
                src="/Images/DesignImages/arrowright.svg"
                alt="Next"
                className="w-10 h-10 transform transition-transform duration-200 hover:scale-110"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
