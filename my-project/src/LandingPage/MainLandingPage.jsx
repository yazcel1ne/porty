import React, { useRef } from "react";
import Hero from "./Hero.jsx";
import MyServices from "./Services/MyServices.jsx";
import Designs from "./Works/Designs.jsx";
import TechUsed from "./TechStack/TechUsed.jsx";
import CTA from "./CTABlock/CTA.jsx";
import Parallax from "./Pages/Parallax.jsx";
import WavyBg from "./Pages/WavyBg.jsx";
import "/src/styles/animatedBg.css";
import ParticleCanvas from "../assets/ParticleCanvas.jsx";
import Footer from "./Footer.jsx";
import ContactUs from "./Contact/ContactUs.jsx";

function MainLanding() {
  const servicesRef = useRef(null);

  return (
    <>
      <div className=" parallax ">
        <section className="bg-gradient-custom h-screen py-12 font-raleway">
          <Hero />
        </section>
        <section
          id="my-services"
          className="relative md:h-screen h-full py-12 font-raleway"
        >
          <WavyBg />

          <MyServices />
        </section>
        <section className=" bg-gradient-custom h-full  py-12  font-raleway">
          <Designs />
        </section>
        <section
          id="my-services"
          className="relative md:h-screen h-full py-12 font-raleway"
        >
          <WavyBg />
          <TechUsed />
        </section>
        <section
          id=" my-services"
          className="bg-gradient-custom  py-12 font-raleway"
        >
          <CTA />
        </section>
        <section className="relative h-full  py-12 font-raleway">
          <ContactUs />
        </section>
        <section
          id=" my-services"
          className=" bg-gradient-custom h-full  py-12 font-raleway"
        >
          <Footer />
        </section>
      </div>
    </>
  );
}

export default MainLanding;
