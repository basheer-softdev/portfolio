import React from "react";
import Noise from "./components/Noise";

const page = () => {
  return (
    <main className="!flex !justify-center !items-center !w-full !h-screen">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <p className="text-[#EAF9FB] z-50 text-[200px]">PORTFOLIO</p>
    </main>
  );
};

export default page;
