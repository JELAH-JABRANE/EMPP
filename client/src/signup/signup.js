import React, { useEffect, useState } from "react";
import {
  LockOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Button, Input, Form, message } from "antd";
import axios from "axios";

export const Signup = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  // API URL
  const API_URL = "http://localhost:3000/api/login";

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        API_URL,
        {
          Email: values.Email,
          Password: values.Password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data; // No need to destructure twice
      console.log("Login Success:", data);

      localStorage.setItem("token", data.token);

      // Show a success message
      message.success("Login successful!");

      // Redirect to dashboard or another page
      window.location.href = "/Dashbord";
    } catch (error) {
      console.error("Login Failed:", error);
      message.error(
        "La connexion a échoué. Veuillez vérifier vos informations d'identification."
      );
    }
  };

  return (
    <div className="wrapper">
    <div className="main-container">
      <div className="form-container">
        <div className="content">
          <div>
            <p style={{ fontWeight: "600" }}>Connectez-vous à votre compte</p>
          </div>
          <div></div>

          <Form
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            form={form}
            name="horizontal_login"
            layout="vertical"
            onFinish={onFinish}
          >
            {/* Email Input */}
            <Form.Item
              name="Email" // Moved to Form.Item
              rules={[
                { required: true, message: "Veuillez saisir votre email !" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>

            {/* Password Input */}
            <Form.Item
              name="Password" // Moved to Form.Item
              rules={[
                {
                  required: true,
                  message: "Veuillez saisir votre mot de passe !",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !clientReady ||
                    !form.isFieldsTouched(true) ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  Log in
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>

    </div>
  );
};
