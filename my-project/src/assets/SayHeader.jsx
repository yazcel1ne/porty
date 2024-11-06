import React, { useRef, useEffect, useState } from "react";
import "/src/styles/transitions.css";
import GradientText from "./GradientText";

const SayHeader = () => {
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
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 flex justify-end items-end">
        <div className="max-w-3xl text-right">
          <h1 className=" text-3xl font-extrabold tracking-tight leading-none md:text-4xl md:text-5xl text-white pr-4 border-r-4 border-gradient-a">
            What They <GradientText>Say</GradientText>
          </h1>
          {/* <p className="text-white">
            We recognize the uniqueness of each client and opportunity,
            guaranteeing a response to every query within one business day
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SayHeader;
