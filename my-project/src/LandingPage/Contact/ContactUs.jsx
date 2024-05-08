import React from "react";
import TechHeader from "../../assets/TechHeader";
import WavyBg from "../Pages/WavyBg";
import ContactForm from "./ContactForm";
import DesignHeader from "../../assets/DesignHeader";
import ContactHeader from "../../assets/ContactHeader";

const ContactUs = () => {
  return (
    <>
      <div className="relative h-full font-raleway ">
        <div class="relative-container">
          <div class="max-w-screen-xl mx-auto grid gap-8 md:grid-cols-2">
            <div class="max-w-screen-xl  grid grid-cols-4 py-16 gap-4 rounded-[24px]">
              {" "}
           
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 ">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
            </div>

            

            <div class="max-w-screen-xl   grid grid-cols-1 gap-4 rounded-[24px]">

            <ContactHeader />
              
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
