import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around  max-sm:flex-col ">
      <div className=" flex flex-col sm:gap-5 max-sm:mb-3">
        <p>support@gmail.com</p>
        <p>Unsubscribe</p>
      </div>
      <div className=" flex flex-col sm:gap-5 max-sm:mb-3">
        <p className=" font-semibold sm:mb-2">Legal terms</p>
        <p>Terms of Use</p>
        <p>Diclosures&Disclaimers</p>
      </div>
      <div className=" flex flex-col sm:gap-5 max-sm:mb-3">
        <p className=" font-semibold sm:mb-2">Privacy info</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
      <div className=" flex flex-col sm:gap-5 max-sm:mb-3">
        <p className=" font-semibold  sm:mb-2">About</p>
        <p>About Us</p>
      </div>
    </div>
  );
};

export default Footer;
