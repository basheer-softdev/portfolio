import React from "react";
import Noise from "../components/Noise";
import Image from "next/image";
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
      <Image src="/image.svg" alt="" className="z-50 w-full" width={1000} height={200}/>
    </div>
  );
};

export default HeroSection;
