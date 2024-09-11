import React from "react";
import Banner from "../../assets/website/blue-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10 bg-opacity-50 rounded-lg" style={BannerImg}>
        <div className="space-y-6 max-w-xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 bg-white text-gray-800 rounded"
          />
          <button
            className="bg-primary hover:scale-105 duration-300 text-white py-2 px-6 rounded-full mt-4"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
