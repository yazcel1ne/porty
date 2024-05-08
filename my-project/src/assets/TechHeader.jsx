import React, { useRef, useEffect } from "react";
import "/src/styles/transitions.css";
import GradientText from "./GradientText";

const TechHeader = () => {
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
       <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-1">
        <h1 className="inline-flex max-w-3xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-white pl-4 border-l-4 border-gradient-a">Techh
        <GradientText>Stack</GradientText>

        </h1>
        {/* <p className="text-white">
          We recognize the uniqueness of each client and opportunity,
          guaranteeing a response to every query within one business day
        </p> */}
      </div>
    </div>
  );
};

export default TechHeader;
