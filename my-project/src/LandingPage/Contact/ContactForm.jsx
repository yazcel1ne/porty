import React from "react";
import GradientText from "../../assets/GradientText";

const ContactForm = () => {
  return (
    <div className=" glassmorphism font-raleway rounded-[24px] shadow-lg">
      <div className="py-8 lg:py-8 px-8 mx-auto max-w-screen-md">
        <p className="block mb-2 text-2xl font-medium text-white">
          Let me know what you think.
        </p>
        <form
          action="https://formspree.io/f/xkndydgq"
          method="POST"
          className="space-y-8"
        >
          <input type="hidden" name="_gotcha" />
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="What's on your mind?"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your Message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
           className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-600 hover:to-purple-800 text-white font-raleway font-normal py-3 px-6 rounded-[24px] md:w-auto w-full">          
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
