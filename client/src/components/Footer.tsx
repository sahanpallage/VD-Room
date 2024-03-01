import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-blackish text-gray-500 text-center py-4 pb-16 md:pb-4 flex justify-center items-center flex-col">
      <div className="flex items-center">
        Copyright <AiOutlineCopyright className="mx-2" /> VD Room <br />
      </div>
      All Rights Reserved 2024.
    </div>
  );
};

export default Footer;
