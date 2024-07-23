"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "antd";
import ModalForm from "./ModalForm";

const StreamingGirls = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="mb-28">
      <div className="flex flex-col items-center gap-5 mb-10">
        <p className="text-4xl font-bold text-shadow-lg">
          It’s a universe of communication and <br /> streaming without borders!
        </p>
        <p className=" font-semibold">
          Let yourself to be free – share your thoughts, <br /> delight, and
          fears with beautiful strangers!
        </p>
      </div>

      <div className="mb-12">
        <Slider {...settings}>
          <div>
            <iframe
              className=" rounded-2xl"
              src="https://giphy.com/embed/QahYIZycdqqQ4MOCHl"
              width="289"
              height="380"
            />
          </div>
          <div>
            <iframe
              className=" rounded-2xl"
              src="https://giphy.com/embed/vCLiKMqfytMCwlwMwx"
              width="289"
              height="380"
            />
          </div>
          <div>
            <iframe
              className=" rounded-2xl"
              src="https://giphy.com/embed/TDuIiZSNUGsWvjHrmE"
              width="289"
              height="380"
            />
          </div>
          <div>
            <iframe
              className=" rounded-2xl"
              src="https://giphy.com/embed/s95qZGWCLDimIPqDu9"
              width="289"
              height="380"
            />
          </div>
          <div>
            <iframe
              className=" rounded-2xl"
              src="https://giphy.com/embed/J0lg1Fq3gnPBAP8jEe"
              width="289"
              height="380"
            />
          </div>
          <div>
            <iframe
              className=" rounded-2xl"
              src="https://giphy.com/embed/SK0gbwzzsOc0jnByoi"
              width="289"
              height="380"
            />
          </div>
          <div>
            <iframe
              className=" rounded-2xl"
              src="https://giphy.com/embed/hvq9ijtCCwkju0vJg3"
              width="289"
              height="380"
            />
          </div>
        </Slider>
      </div>
      <div className="flex justify-center">
        <Button onClick={showModal} className="w-96 h-16 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold text-lg  text-white ">
          Join for free
        </Button>
      </div>
      <ModalForm isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default StreamingGirls;
