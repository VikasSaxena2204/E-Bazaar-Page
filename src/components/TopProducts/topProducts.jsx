import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women's Shirt",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="container">
      {/* Header section */}
      <div className="text-left mb-24">
        <p data-aos="fade-up" className="text-sm text-primary text-center">
          Top Rated Products for You
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Best Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
        </p>
      </div>

      {/* Body section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
        {ProductsData.map(({ id, img, title, description }) => (
          <div
            key={id}
            data-aos="zoom-in"
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-blue-800 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
          >
            {/* Image section */}
            <div className="h-[100px] flex justify-center items-center">
              <img
                src={img}
                alt={title}
                className="max-w-[140px] block transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
              />
            </div>
            {/* Details section */}
            <div className="p-4 text-center">
              {/* Star rating */}
              <div className="w-full flex items-center justify-center gap-1">
                {[...Array(4)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                {description}
              </p>
              <button
                className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                onClick={handleOrderPopup}
                aria-label={`Order ${title}`}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
