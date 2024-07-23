"use client";
import { Button } from "antd";
import React, { useState } from "react";
import ModalForm from "./modalForm";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className=" max-sm:p-5">
      <div className="flex flex-col gap-5 max-sm:flex justify-center items-center">
        <p className=" text-5xl font-bold text-shadow-lg max-sm:text-xl text-center">
          It’s a hot place for your <br /> streaming fantasy.
        </p>
        <p className=" max-sm: text-sm text-center">
          It’s a free space for watching streams <br /> and chatting with
          alluring people.
        </p>
        <img className=" sm:hidden" src="/img/hand11.png" alt="" />
        <Button
          onClick={showModal}
          className=" w-64 h-16 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold text-lg  text-white animate-pulse "
        >
          Write to her
        </Button>
        <ModalForm isOpen={isModalOpen} closeModal={closeModal} />

        <div className=" sm:hidden flex justify-center flex-col items-center">
          <p className="max-sm:flex justify-center items-center text-xl font-bold text-shadow-lg text-center mb-2">
            It’s a dedicated space for your bold fantasies!
          </p>
          <p className=" max-sm: text-sm text-center">
            Hundreds of attractive admirers are already waiting for you here.
            Don’t delay – dive into the world of streaming, flirting and hot
            communication right now!
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
