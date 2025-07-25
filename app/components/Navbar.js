import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full text-[#EAF9FB] z-50 flex justify-between items-center container py-8">
      <p>BASHEER</p>
      <ul className="flex list-none gap-10">
        <li>About</li>
        <li>Projects</li>
        <li>Careers</li>
      </ul>
      <p>Contact</p>
    </div>
  );
};

export default Navbar;
