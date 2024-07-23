import React from "react";

const JoinUs = () => {
  return (
    <div className="mb-28">
      <p className=" font-bold flex justify-center  mb-10 text-4xl text-shadow-lg max-sm:text-xl">
        Why join us?
      </p>
      <div className=" flex flex-col gap-10  justify-center items-center ">
        <div className=" flex gap-10 max-sm:flex  max-sm:flex-col ">
          <div className="p-10 w-96 h-64 rounded-3xl shadow-2xl max-sm:w-56">
            <div className="flex items-center space-x-4 mb-3">
              <img
                src="img/wind.png"
                alt=""
                className="w-8 h-8 max-sm:w-6,h-6 "
              />
              <p className="font-bold max-sm:text-xs">
                Chat with attractive streamers for free
              </p>
            </div>
            <p className="max-sm:text-xs text-center">
              It’s an excellent web platform for streaming. Write messages to
              the beautiful streamers for free and explore this magical universe
              of communication!
            </p>
          </div>

          <div className=" p-10 w-96  h-64 rounded-3xl shadow-2xl max-sm:hidden">
            <div className="flex items-center space-x-4 mb-3">
              <img src="img/lock.png" alt="" className="w-8 h-8" />
              <p className=" font-bold">Only verified users</p>
            </div>
            <p>
              We care about the privacy and security of our customers. All
              accounts are verified so look for an attractive stranger
              confidently!
            </p>
          </div>
        </div>
        <div className=" flex gap-10 max-sm:hidden ">
          <div className=" p-10 w-96  h-64 "></div>
          <div className=" p-10 w-96  h-64 rounded-3xl shadow-2xl">
            <div className="flex items-center space-x-4 mb-3">
              <img src="img/find.png" alt="" className="w-8 h-8" />
              <p className=" font-bold">Customized search</p>
            </div>
            <p>
              Match alluring partners for your own preferences. Maybe you will
              be interested in a hot slender European or shy beautiful Asian?
              Make your choice…
            </p>
          </div>
          <div className=" p-10 w-96  h-64 rounded-3xl shadow-2xl">
            <div className="flex items-center space-x-4 mb-3">
              <img src="img/ok.png" alt="" className="w-8 h-8" />
              <p className=" font-bold">Easy to use</p>
            </div>
            <p>
              Forget about hundreds of annoying notifications and inconvenient
              use. We have created the platform as easy to use and search as
              possible. Don’t waste your time studying functionality. Just
              enjoy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
