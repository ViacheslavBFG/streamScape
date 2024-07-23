"use client";
import { Button } from "antd";
import React, { useState } from "react";
import ModalForm from "./modalForm";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className=" flex flex-col justify-center items-center   p-20  shadow-2xl  rounded-3xl w-4/5 ml-auto mr-auto gap-10 mb-28 max-sm:p-10">
      <p className=" text-4xl font-bold text-shadow-lg max-sm:text-xl">About</p>
      <p className=" text-center max-sm:text-sm max-sm: ">
        It’s a global <span className=" font-bold">streaming platform</span> for
        communication and <br /> meeting incredibly beautiful people. We created
        an <br /> excellent place where you can enjoy your time and{" "}
        <span className=" font-bold">
          find <br /> appropriate matches{" "}
        </span>{" "}
        at first.
      </p>
      <p className=" text-center max-sm:text-sm">
        {" "}
        Approximately 80% of our users have already found their <br /> lovelies.
        <span className=" font-bold">Watch streams </span> without hindrance and
        meet <br /> someone{" "}
        <span className=" font-bold">who interests you.</span>
      </p>
      <Button
        className=" max-sm:w-40   w-96 h-16 bg-gradient-to-r from-green-400 to-blue-500  font-bold text-lg  text-white animate-pulse "
        onClick={showModal}
      >
        Join for free
      </Button>

      <ModalForm isOpen={isModalOpen} closeModal={closeModal} />


    </div>
  );
};

export default About;
