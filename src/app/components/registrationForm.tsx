"use client";

import React from "react";

import type { FormProps } from "antd";
import { Button, Checkbox, Divider, Form, Input, Space } from "antd";
import { GoogleOutlined, MailOutlined } from "@ant-design/icons";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const RegistrationForm = () => {
  return (
    <div className=" flex flex-col gap-2">
      <div className="  ">
        <Button className=" text-blue-500 animate-bounce">Log in</Button>
      </div>
      <div className="p-10 bg-white rounded-2xl shadow-2xl  w-96 ">
        <Button
          type="primary"
          icon={<GoogleOutlined />}
          block
          style={{ marginBottom: "16px" }}
        >
          Sign up with Google
        </Button>

        <Divider>or</Divider>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Button type="primary" icon={<MailOutlined />} block>
            Sign up with Email
          </Button>
        </Form>
        <div>
          <p className=" text-sm pt-8 flex text-center text-shadow-xl text-gray-600">
            You hereby confirm that you are fully able and competent to access
            Livebeam and comply with the Terms of Use & Service, and are at
            least eighteen (18) years of age or the age of majority under the
            law of the jurisdiction of your residence and the one you are
            accessing Livebeam from.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
