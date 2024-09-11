import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck, GiReceiveMoney } from "react-icons/gi"; // Changed icon

const Banner = () => {
  const features = [
    { icon: <GrSecure className="icon" />, text: "Quality Products" },
    { icon: <IoFastFood className="icon" />, text: "Fast Delivery" },
    { icon: <GiFoodTruck className="icon" />, text: "Easy Payment Method" },
    { icon: <GiReceiveMoney className="icon" />, text: "Get Offers" } // New icon
  ];

  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Women fashion banner"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* Text and Features Section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Festive Season Sale - Up to 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Discover exclusive deals on a wide range of products! Shop now and
              enjoy discounts, fast delivery, and easy payment methods.
            </p>
            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div
                  data-aos="fade-up"
                  className="flex items-center gap-4"
                  key={index}
                >
                  {feature.icon}
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Common styling for icons (to avoid repetitive class definitions)
const iconStyles = `
  .icon {
    text-4xl h-12 w-12 shadow-sm p-4 rounded-full
  }
  .bg-violet-100 { background-color: #EDE7F6; }
  .dark:bg-violet-400 { background-color: #7C4DFF; }
`;

export default Banner;
