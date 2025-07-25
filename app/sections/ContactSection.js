import React from "react";
import Noise from "../components/Noise";

const ContactSection = () => {
  return (
    <div className="relative w-full h-screen">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <p className="text-[#EAF9FB] z-50">Contact Me</p>
    </div>
  );
};

export default ContactSection;
