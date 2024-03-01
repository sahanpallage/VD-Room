import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Feedback = () => {
  return (
    <div>
      <div className="container pt-16 pb-16 grid-cols-2">
        <h2 className="font-medium text-2xl pb-4">Feedbacks</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className="font-medium text-xl text-center flex-flex-col items-center gap-1">
              <Image
                src="/user-1.jpg"
                alt="user"
                width={80}
                height={80}
                className="rounded-full inline-block"
              />
              <h2 className="text-gray-500 font-black text-[20px]">John Doe</h2>
              <p>CEO, XYZ Company</p>
              <FaQuoteLeft
                className="text-accent inline-block py-2"
                size="3em"
              />
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="bg-red-600 bg-[url(/cta-banner.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
              <button className="bg-blackish text-white p-2 rounded-md">
                25% DISCOUNT
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727]">
                Summer Collection
              </h2>
              <p className="text-gray-500 text-[20px]">
                Starting @ LKR 3000 <b>Shop Now</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
