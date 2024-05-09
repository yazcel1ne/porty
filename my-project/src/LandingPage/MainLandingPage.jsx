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
        <section className="bg-gradient-custom h-screen pt-12 pb-24 font-raleway">
          <Hero />
        </section>
        <section id="my-services" className=" h-full  pb-24 font-raleway">
          <MyServices />
        </section>
        <section className="bg-gradient-custom h-full pt-12 pb-24  font-raleway">
          <Designs />
        </section>
        <section id="my-services" className=" pb-24 font-raleway">
          <TechUsed />
        </section>
        <section
          id=" my-services"
          className="bg-gradient-custom pt-12 pb-12 font-raleway"
        >
          <CTA />
        </section>
        <section className=" h-full pt-12 pb-12 font-raleway">
          <ContactUs />
        </section>
        <section
          id=" my-services"
          className="bg-gradient-custom h-full pt-12 pb-12 font-raleway"
        >
          <Footer />
        </section>
      </div>
    </>
  );
}

export default MainLanding;
