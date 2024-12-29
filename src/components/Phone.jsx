import React, { useState } from "react";
import { Form } from "antd";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState("+998");

  const onFinish = (values) => {
    console.log("Форма успешно отправлена:", values);
  };

  return (
    <Form
      name="phoneForm"
      onFinish={onFinish}
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      <h2 className="text-center">Введите ваш номер телефона</h2>

      <Form.Item
        name="phone"
        className="ml-[257px]"
        rules={[{ required: true, message: "Введите номер телефона!" }]}
      >
        <PhoneInput
          country="uz"
          value={phone}
          onChange={(value) => setPhone(value)}
          placeholder="+998 90 123 45 67"
          inputStyle={{
            backgroundColor: "#f0f0f0",
            width: "692px",
            height: "75px",
            paddingLeft: "60px", // Увеличение отступа для флага и кода страны
            fontSize: "16px",
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
          }}
          containerStyle={{
            width: "692px",
          }}
          buttonStyle={{
            padding: "10px", // Стиль кнопки (флаг страны)
          }}
        />
      </Form.Item>

     
    </Form>
  );
};

export default PhoneNumberInput;
