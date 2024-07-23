"use client";
import React, { useState } from "react";
import {
  Button,
  Carousel,
  Checkbox,
  Input,
  Radio,
  RadioChangeEvent,
} from "antd";

import { GoogleOutlined, MailOutlined } from "@ant-design/icons";

const DoubleForm = () => {
  const options = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const [value3, setValue3] = useState("Apple");

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio3 checked", value);
    setValue3(value);
  };

  return (
    <div className="flex justify-center items-center h-screen  max-sm:hidden">
      <div className="w-[550px] h-[500px] rounded-xl shadow-xl p-10 bg-white">
        <Carousel
          autoplay
          arrows
          infinite={true}
          dotPosition="bottom"
          className="w-full h-full"
        >
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col items-center justify-center w-full h-full space-y-6">
              <Button
                type="primary"
                className="w-3/4 flex items-center justify-center space-x-2 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600"
              >
                <GoogleOutlined className="text-white" />
                <span>Sign Up with Google</span>
              </Button>
              <p className="text-gray-700">or</p>
              <div className="w-full flex flex-col items-center space-y-4">
                <div className="w-3/4">
                  <label className=" font-semibold block text-left text-gray-800 mb-1">
                    Email
                  </label>
                  <Input
                    placeholder="e.g. Alex@email.com"
                    className="w-full h-10 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div className="w-3/4">
                  <label className=" font-semibold block text-left text-gray-800 mb-1">
                    Password
                  </label>
                  <Input
                    placeholder="8+ characters"
                    className="w-full h-10 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <Button
                type="primary"
                className="w-3/4 flex items-center justify-center space-x-2 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600"
              >
                <MailOutlined className="text-white" />
                <span>Sign Up with Email</span>
              </Button>
              <p className="text-center text-gray-600 text-sm mt-4">
                You hereby confirm that you are fully able and competent to
                access Livebeam and comply with the Terms of Use & Service, and
                are at least eighteen (18) years of age or the age of majority
                under the law of the jurisdiction of your residence and the one
                you are accessing Livebeam from.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center h-full">
            <div className="w-full flex flex-col justify-center items-center space-y-6">
              <div className="space-y-4">
                <p className=" font-semibold text-gray-800">I am</p>
                <Radio.Group
                  options={options}
                  onChange={onChange3}
                  value={value3}
                  optionType="button"
                  className="flex justify-center space-x-4 w-96"
                  buttonStyle="solid"
                />
              </div>
              <div className="space-y-1">
                <p className=" font-semibold text-gray-800">My name</p>
                <Input
                  placeholder="e.g. Alex"
                  className="w-96 h-10 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <div className="space-y-1">
                <p className=" font-semibold text-gray-800">I was born</p>
                <Input
                  placeholder="MM/DD/YYYY"
                  className="w-96 h-10 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <label className="flex items-center space-x-2 mt-4 w-96 cursor-pointer">
                <Checkbox className="text-gray-800" />
                <p className="text-gray-700 text-sm">
                  I have read, understand, and agree to the Terms of Use,
                  Privacy Policy, Disclosures & Disclaimers.
                </p>
              </label>
              <div className="pb-14">
                <button className="w-96 h-12 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold text-lg text-white rounded-md">
                  Sign up now
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default DoubleForm;
