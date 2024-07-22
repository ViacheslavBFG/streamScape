"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import Slider from "react-slick";

const СarouselFirst = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="mb-28">
      <Slider {...settings}>
        <div>
          <iframe
            className=" rounded-2xl"
            src="https://giphy.com/embed/mB7UO5OfvApvPUhV2i"
            width="389"
            height="480"
          />
        </div>
        <div>
          <iframe
            className=" rounded-2xl"
            src="https://giphy.com/embed/8NUmPVeHnzbtdeSCUB"
            width="389"
            height="480"
          />
        </div>
        <div>
          <iframe
            className=" rounded-2xl"
            src="https://giphy.com/embed/3mFI6xx3tNPexrap9F"
            width="389"
            height="480"
          />
        </div>
        <div>
          <iframe
            className=" rounded-2xl"
            src="https://giphy.com/embed/CGruC8OC0Q7uKqVrJ0"
            width="389"
            height="480"
          />
        </div>
        <div>
          <iframe
            className=" rounded-2xl"
            src="https://giphy.com/embed/HyK8lWaXrwW1oNOhbT"
            width="389"
            height="480"
          />
        </div>
      </Slider>
    </div>
  );
};

export default СarouselFirst;
