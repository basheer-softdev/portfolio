import React from "react";
import Noise from "../components/Noise";

const ContactSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full px-8">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <p className="text-[#EAF9FB] z-50 portfolio !text-[10.2vw]">CONTACT ME</p>
      <div className="flex justify-between w-full z-50">
        <div className="text-[#EAF9FB] z-50">
          <p>basheer.softdev@gmail.com</p>
          <p>+91 9024947541</p>
        </div>
        <div>
          <p>Name ( required )</p>
          <div>
            <div>
              <p>First Name</p>
              <input type="text" name="" id="" />
            </div>
            <div>
              <p>First Name</p>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div>
            <p>Email (required)</p>
            <input type="text" name="" id="" />
          </div>
          <div>
            <p>Message (required)</p>
            <textarea name="" cols={10} id=""></textarea>
          </div>
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
