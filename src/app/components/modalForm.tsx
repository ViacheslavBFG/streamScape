"use client";

import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Button, Checkbox, Divider, Input, Modal, Radio } from "antd";

interface ModalFormProps {
  isOpen: boolean;
  closeModal: () => void;
}

const plainOptions = ["Apple", "Pear", "Orange"];
const options = [
  { label: "Male", value: "Apple" },
  { label: "Female", value: "Pear" },
];

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, closeModal }) => {
  const [value3, setValue3] = useState("Apple");

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio3 checked", value);
    setValue3(value);
  };

  return (
    <Modal
      visible={isOpen}
      onOk={closeModal}
      onCancel={closeModal}
      width={400}
      footer={[
        <div className="flex justify-center">
          <button
            key="back"
            onClick={closeModal}
            className=" rounded-md w-72 h-12 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  font-bold text-lg  text-white"
          >
            Sign up now
          </button>
        </div>,
      ]}
    >
      <div className="flex flex-col gap-10">
        <div>
          <label htmlFor="">
            <p className=" font-semibold">I am</p>
            <Radio.Group
              className=""
              options={options}
              onChange={onChange3}
              value={value3}
              optionType="button"
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            <p className=" font-semibold">My name</p>{" "}
            <Input placeholder="e.g. Alex" className="h-10" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            <p className=" font-semibold">I was born</p>{" "}
            <Input placeholder="MM/DD/YYYY" className="h-10" />
          </label>
        </div>
        <div className="flex justify-center ">
          <label
            htmlFor="agreement-checkbox"
            className="flex items-center  gap-5"
          >
            <Checkbox id="agreement-checkbox" />
            <p className=" text-gray-500 text-sm cursor-pointer">
              I have read understand and agree <br /> to Terms of Use, Privacy
              Policy,
              <br />
              Disclosures&Disclaimers.
            </p>
          </label>
        </div>
      </div>
    </Modal>
  );
};

export default ModalForm;
