"use client";
import React from "react";
// @ts-ignore
import "slick-carousel/slick/slick.css";
// @ts-ignore
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
    <div className="mb-28  pl-32 pr-32 max-sm:hidden">
      <Slider {...settings}>
        <div>
          <img
            className=" rounded-2xl"
            src="/img/g1.gif"
            width="389"
            height="480"
          />
        </div>
        <div>
          <img
            className=" rounded-2xl"
            src="/img/g1.gif"
            width="389"
            height="480"
          />
        </div>
        <div>
          <img
            className=" rounded-2xl"
            src="/img/g1.gif"
            width="389"
            height="480"
          />
        </div>
        <div>
          <img
            className=" rounded-2xl"
            src="/img/g1.gif"
            width="389"
            height="480"
          />
        </div>
        <div>
          <img
            className=" rounded-2xl"
            src="/img/g1.gif"
            width="389"
            height="480"
          />
        </div>
      </Slider>
    </div>
  );
};

export default СarouselFirst;
