import React from "react";
import HeroSection from "./sections/HeroSection";
import ContactSection from "./sections/ContactSection";

const page = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ContactSection />
    </div>
  );
};

export default page;
