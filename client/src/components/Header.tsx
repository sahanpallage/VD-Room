import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header__icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header__icon_wrapper">
              <FaTwitter />
            </div>
            <div className="header__icon_wrapper">
              <FaInstagram />
            </div>
          </div>
          <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - LKR 4000
          </div>
          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD</option>
              <option value="LKR Rs">LKR</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
