import React from "react";
import FirstMobCar from "./FirstMobCar";

const FindPeople = () => {
  return (
    <div className="mb-28">
      <div className="mb-10">
        <FirstMobCar />
      </div>
      <p className="flex items-center justify-center text-4xl font-bold mb-10 text-shadow-lg max-sm:text-xl  ">
        Here you can find
      </p>
      <div className="flex flex-col items-center gap-5 text-xs ">
        <div className="flex items-center gap-3  p-7  w-1/3 rounded-3xl shadow-2xl justify-center max-sm:w-56 max-sm:text-center max-sm:flex-col  ">
          <img src="img/tv.png" alt="" className="w-6 h-6" />
          <p>Watching streams of everyone you really like;</p>
        </div>
        <div className="flex items-center gap-3  p-7  w-1/3 rounded-3xl shadow-2xl justify-center max-sm:w-56 max-sm:text-center max-sm:flex-col ">
          <img src="img/girl.png" alt="" className="w-6 h-6" />
          <p>Free communication with pretty streamers;</p>
        </div>
        <div className="flex items-center gap-3  p-7  w-1/3 rounded-3xl shadow-2xl justify-center max-sm:w-56 max-sm:text-center max-sm:flex-col ">
          <img src="img/message.png" alt="" className="w-6 h-6" />
          <p>Sweet connection with people you match;</p>
        </div>
        <div className="flex items-center gap-3  p-7  w-1/3 rounded-3xl shadow-2xl justify-center max-sm:w-56 max-sm:text-center max-sm:flex-col">
          <img src="img/ski.png" alt="" className="w-6 h-6" />
          <p>
            New acquaintances with someone who has <br /> similar interests;
          </p>
        </div>
        <div className="flex items-center gap-3  p-7  w-1/3 rounded-3xl shadow-2xl justify-center max-sm:w-56 max-sm:flex-col max-sm:text-center ">
          <img src="img/volume.png" alt="" className="w-6 h-6" />
          <p>
            Fascinating hobbies and exciting occupations <br /> from you fancy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FindPeople;
