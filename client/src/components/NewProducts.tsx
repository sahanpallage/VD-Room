import React from "react";
import ProductCard from "./ProductCard";

const cardData = [
  {
    img: "/men-style-1.jpg",
    title: "Shirt",
    desc: "Red and Black Checkered Shirt",
    rating: 4,
    price: "3000",
  },
  {
    img: "/men-style-2.jpg",
    title: "Coat",
    desc: "Blue Denim Coat",
    rating: 5,
    price: "9000",
  },
  {
    img: "/men-style-3.jpg",
    title: "Sleeves",
    desc: "Blue Linen Long Sleeves",
    rating: 4.5,
    price: "3500",
  },
  {
    img: "/men-style-4.jpg",
    title: "Sleeves",
    desc: "White and Black Striped Long Sleeves",
    rating: 4.5,
    price: "5000",
  },
  {
    img: "/women-style-1.jpg",
    title: "Blazer",
    desc: "Red Women's Blazer",
    rating: 4,
    price: "6000",
  },
  {
    img: "/women-style-2.jpg",
    title: "Skinny",
    desc: "White Skinny",
    rating: 3.5,
    price: "2500",
  },
  {
    img: "/women-style-3.jpg",
    title: "Blazer",
    desc: "Pink Women's Blazer",
    rating: 5,
    price: "8000",
  },
  {
    img: "/women-style-4.jpg",
    title: "Coat",
    desc: "Wool Coat",
    rating: 5,
    price: "10000",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div
          className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 
        xl:gap-x-20 xl:gap-y-10"
        >
          {cardData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
