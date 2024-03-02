"use client";
import { generateRating } from "@/utils/common";
import React from "react";

interface ProductDetailsProps {
  product: any;
  id: string | number;
}

const HorizontalLine = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, id }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Images</div>
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">
          {product[parseInt(String(id))].desc}
        </h2>
        <div className="flex items-center gap-2">
          {generateRating(product[parseInt(String(id))].rating)}
          <div>{product[parseInt(String(id))].reviews} reviews</div>
        </div>
        <HorizontalLine />
        <div className="text-justify">
          <ul className="list-disc">
            {product[parseInt(String(id))].features.map(
              (feature: string, index: number) => (
                <li key={index}>{feature}</li>
              )
            )}
          </ul>
        </div>
        <HorizontalLine />
        <div>
          <span>CAT</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
