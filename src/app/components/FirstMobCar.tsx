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
    <div className=" sm:hidden max-sm:mb-10">
      <Slider {...settings}>
        <div>
          <img
            className=" rounded-2xl"
            src="/img/g1.gif"
            width="189"
            height="280"
          />
        </div>
        <div>
          <img
            className=" rounded-2xl"
            src="/img/g1.gif"
            width="189"
            height="280"
          />
        </div>
        <div>
          <img
            className=" rounded-2xl"
            src="/img/g1.gif"
            width="189"
            height="280"
          />
        </div>
      </Slider>
    </div>
  );
};

export default FirstMobCar;
