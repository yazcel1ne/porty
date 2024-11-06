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
import WavyBg2 from "./Pages/WavyBg2.jsx";
import Futuristic from "./Pages/Futuristic.jsx";
import Say from "./Testimonial/Say.jsx";
import ClientWork from "./ClientAff/ClientWork.jsx";

function MainLanding() {
  const servicesRef = useRef(null);

  return (
    <>
      <div className=" parallax ">
        <section className="glassmorphismHero  h-full py-12 font-raleway">
          <Futuristic />

          <Hero />
        </section>

        <section
          id="my-services"
          className="relative    h-full py-12 font-raleway"
        >
          <WavyBg />

          <MyServices />
        </section>
        <section
          id="my-designs"
          className=" glassmorphismNoRadius h-full  py-12  font-raleway"
        >
          <Designs />
        </section>
        <section
          id="my-services"
          className="relative  h-full py-12 font-raleway"
        >
          <WavyBg />
          <TechUsed />
        </section>
        <section
          id=" my-services"
          className="glassmorphismNoRadius   py-12 font-raleway"
        >
          <CTA />
        </section>

        <section id=" my-services" className="  py-12 font-raleway">
          <ClientWork />
        </section>
        <section
          id=" my-services"
          className="glassmorphismNoRadius   py-12 font-raleway"
        >
          <Say />
        </section>

        <section id="contact" className="relative h-full  py-12 font-raleway">
          <ContactUs />
        </section>
        <section
          id=" my-services"
          className=" glassmorphismNoRadius  h-full  py-12 font-raleway"
        >
          <Footer />
        </section>
      </div>
    </>
  );
}

export default MainLanding;
