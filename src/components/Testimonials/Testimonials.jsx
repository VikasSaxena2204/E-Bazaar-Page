import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Tushar Singh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Suryakant Sharma",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Ganesh Deva",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 6,
    name: "Shiv Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map(({ id, name, text, img }) => (
              <div
                key={id}
                className="px-4"
              >
                <div className="flex flex-col items-center gap-6 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-300 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={img}
                      alt={`Testimonial from ${name}`}
                      className="rounded-full w-24 h-24 object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">{text}</p>
                    <h1 className="text-xl font-bold text-black/80 dark:text-light mt-2">
                      {name}
                    </h1>
                  </div>
                  <p className="text-black/20 text-6xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
