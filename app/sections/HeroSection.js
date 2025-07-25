import React from "react";
import Noise from "../components/Noise";
import Navbar from "../components/Navbar";

const HeroSection = () => {
  return (
    <div className="hero-section relative flex justify-center items-center w-full h-screen p-8">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      {/* <Navbar /> */}
      <p className="portfolio text-[#EAF9FB] z-50 text-[12vw] sm:text-[12.5vw] lg:text[13vw] 2xl:text-[13.4vw]">
        PORTFOLIO
      </p>
    </div>
  );
};

export default HeroSection;
