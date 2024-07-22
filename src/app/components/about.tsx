import { Button } from "antd";
import React from "react";

const About = () => {
  return (
    <div className=" flex flex-col justify-center items-center   p-20  shadow-2xl  rounded-3xl w-4/5 ml-auto mr-auto gap-10 mb-28">
      <p className=" text-4xl font-bold text-shadow-lg">About</p>
      <p className=" text-center">
        It’s a global <span className=" font-bold">streaming platform</span> for
        communication and <br /> meeting incredibly beautiful people. We created
        an <br /> excellent place where you can enjoy your time and{" "}
        <span className=" font-bold">
          find <br /> appropriate matches{" "}
        </span>{" "}
        at first.
      </p>
      <p className=" text-center">
        {" "}
        Approximately 80% of our users have already found their <br /> lovelies.
        <span className=" font-bold">Watch streams </span> without hindrance and
        meet <br /> someone{" "}
        <span className=" font-bold">who interests you.</span>
      </p>
      <Button className="w-96 h-16 bg-gradient-to-r from-green-400 to-blue-500  font-bold text-lg  text-white ">
        Join for free
      </Button>
    </div>
  );
};

export default About;
