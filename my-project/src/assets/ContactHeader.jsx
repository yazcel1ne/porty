import React, { useRef, useEffect } from "react";
import "/src/styles/transitions.css";
import GradientText from "./GradientText";

const ContactHeader = () => {
  const fadeRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fadeRef.current.classList.add("active");
      }
    }, options);

    if (fadeRef.current) {
      observer.observe(fadeRef.current);
    }

    return () => {
      if (fadeRef.current) {
        observer.unobserve(fadeRef.current);
      }
    };
  }, []);

  return (
    <div ref={fadeRef} className="fade-up">
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-1">
        <h1 className="max-w-3xl  text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-white pl-4 border-l-4 border-gradient-a">
          Contact
          <GradientText>Me</GradientText>
        </h1>
        {/* <p className="text-white">
          We recognize the uniqueness of each client and opportunity,
          guaranteeing a response to every query within one business day
        </p> */}
      </div>
    </div>
  );
};

export default ContactHeader;
