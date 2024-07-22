import { Button } from "antd";
import React from "react";

const Fishing = () => {
  return (
    <div className="flex justify-center items-center pr-28 pl-28">
      <div className=" flex flex-col gap-10">
        <p className=" text-4xl font-bold text-shadow-lg">
          It’s a dedicated space for your bold fantasies!
        </p>
        <p>
          Hundreds of attractive admirers are already waiting for <br /> you
          here. Don’t delay – dive into the world of streaming, <br /> flirting,
          and hot communication right now!
        </p>
        <Button className="w-96 h-16 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold text-lg  text-white ">
          Write to her
        </Button>
      </div>
      <div>
        <img src="img/hand22.png" alt="" width={750} height={818} />
      </div>
    </div>
  );
};

export default Fishing;