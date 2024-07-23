"use client";
import React from "react";
// @ts-ignore
import "slick-carousel/slick/slick.css";
// @ts-ignore
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import Slider from "react-slick";

const FirstMobCar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="sm:hidden max-sm:mb-10 max-sm:ml-10 flex justify-center items-center">
      <Slider {...settings} className="w-full max-w-sm">
        <div className="flex justify-center items-center">
          <img
            className="rounded-2xl"
            src="/img/g1.gif"
            alt="Gif 1"
            width="189"
            height="280"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            className="rounded-2xl"
            src="/img/g1.gif"
            alt="Gif 2"
            width="189"
            height="280"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            className="rounded-2xl"
            src="/img/g1.gif"
            alt="Gif 3"
            width="189"
            height="280"
          />
        </div>
      </Slider>
    </div>
  );
};

export default FirstMobCar;
