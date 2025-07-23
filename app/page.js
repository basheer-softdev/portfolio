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
      <p className="!font-stretch-ultra-expanded">P</p>
      <p>ORTFOLIO</p>
    </main>
  );
};

export default page;
