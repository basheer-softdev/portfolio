import React from "react";
import HeroSection from "./sections/HeroSection";
import CopyRightsSection from "./sections/CopyRightsSection";
import ContactSection from "./sections/ContactSection";

const page = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ContactSection />
      {/* <CopyRightsSection /> */}

      {/* <p className="text-[#EAF9FB] z-50 font-extralight py-8">© 2025 MOHAMED BASHEER OFFICIAL. ALL RIGHTS RESERVED</p> */}
      {/* <div className="flex justify-between items-center text-[6vw] w-full px-28 text-[#EAF9FB] z-50 font-light">
        <p>08</p>
        <p>PROJECTS</p>
      </div> */}
    </div>
  );
};

export default page;
