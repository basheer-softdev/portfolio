import React from "react";
import Noise from "../components/Noise";

const ContactSection = () => {
  return (
    <div className="contact-section relative flex flex-col justify-center items-center w-full">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <div className="z-50 flex flex-col justify-center items-center gap-2 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-white/10 p-3 focus:outline-none text-[#EAF9FB]"
          />
          <input
            type="text"
            placeholder="name@gmail.com"
            className="w-full bg-white/10 p-3 focus:outline-none text-[#EAF9FB]"
          />
        </div>
        <textarea
          className="w-full bg-white/10 p-3 focus:outline-none text-[#EAF9FB] resize-none"
          rows={20}
          name=""
          id=""
          placeholder="Type Your Message"
        ></textarea>
        <button className="w-full bg-white/10 p-3 focus:outline-none text-[#EAF9FB] cursor-pointer">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
