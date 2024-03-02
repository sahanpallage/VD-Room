"use client";
import { generateRating } from "@/utils/common";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { PiVirtualRealityFill } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";

interface propsType {
  id: number;
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<propsType> = ({
  id,
  img,
  title,
  desc,
  rating,
  price,
}) => {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    cursor: "pointer",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.3s",
  };

  return (
    <div
      onClick={() => router.push(`/product/${id}`)}
      className="pt-3 px-3 border border-gray-200 rounded-xl max-w-[400px]"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <Image
          className="w-full h-fit rounded-xl"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className="flex justify-between items-center">
          <div className="text-blackish font-medium flex gap-4">
            LKR{price}
            <del className="text-gray-500 font-normal">
              LKR {parseInt(price) + 2000}
            </del>
          </div>
          <button className="bg-blackish text-white px-4 py-1 rounded-lg ml-2 mr-2">
            <TiShoppingCart />
          </button>
          <button className="bg-accent text-white px-4 py-1 rounded-lg">
            <PiVirtualRealityFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
