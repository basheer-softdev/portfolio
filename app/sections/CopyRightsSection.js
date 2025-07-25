import React from "react";
import Noise from "../components/Noise";

const CopyRightsSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <p className="para-1 w-full text-center text-[#5A5E5F]">MOHAMED</p>
    </div>
  );
};

export default CopyRightsSection;
