import React from "react";
import Noise from "./Noise";

const RepeatedText = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full">
        <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <p className="portfolio text-[#5A5E5F] z-50 leading-28">PORTFOLIO</p>
      <p className="portfolio text-[#A2B0B2] z-50 leading-28">PORTFOLIO</p>
      <p className="portfolio text-[#EAF9FB] z-50 leading-28">PORTFOLIO</p>
    </div>
  );
};

export default RepeatedText;
