import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import axios from "axios";

const RegistrationForm = () => {
  const [phone, setPhone] = useState("+998");

  const onFinish = async (values) => {
    const newData = {
      name: values.name,
      phone: phone,
      date: new Date().toLocaleString(),
    };
  
    try {
      const botToken = "7689974869:AAG-SKLe4QJQlo-_8UDL0AzL5Xz4nt6qa2M"; // Токен вашего бота
      const chatId = "@XakatonData"; // Публичное имя вашего канала
      const text = `*Новое сообщение:*\n\n*Имя:* ${newData.name}\n*Телефон:* ${newData.phone}\n*Дата:* ${newData.date}`;
  
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId, // Здесь указываем ID канала
        text: text,
        parse_mode: "Markdown", // Форматирование сообщения
      });
  
      message.success("Данные успешно отправлены в Telegram!");
    } catch (error) {
      console.error("Ошибка отправки данных в Telegram:", error);
      message.error("Не удалось отправить данные, попробуйте снова.");
    }
  };
  

  return (
    <div className="flex justify-center items-center">
      <div className="p-8 dark:bg-custom-gradient-light bg-custom-gradient mb-[138px] rounded-lg border border-white dark:border-black dark:border-t-purple-600 border-t-purple-600 shadow-lg w-[1170px] h-[460px]">
        <h1 className="text-black dark:text-white text-2xl font-semibold text-center mb-6">
          Запишитесь на курсы
        </h1>
        <p className="text-black dark:text-white ml-[257px] mb-[10px] mt-[55px]">
          Ваш контакт:
        </p>
        <Form layout="vertical" onFinish={onFinish} autoComplete="off">
          {/* Поле для имени */}
          <Form.Item
            name="name"
            className="ml-[257px]"
            rules={[{ required: true, message: "Введите ваше имя!" }]}
          >
            <Input
              className="bg-gray-200 w-[692px] h-[75px]"
              placeholder="Имя"
            />
          </Form.Item>

          {/* Поле для телефона */}
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
                paddingLeft: "60px",
                fontSize: "16px",
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
              }}
              containerStyle={{
                width: "692px",
              }}
              buttonStyle={{
                padding: "10px",
              }}
            />
          </Form.Item>

          {/* Кнопка отправки */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-[248px] h-[50px] ml-[450px] bg-slate-900 rounded-full border-8 border-transparent border-purple-500 transition-all duration-300 shadow-[0px_0px_10px_0px_#7744FFB2] text-white"
            >
              Записаться на курсы
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>  
  );
};

export default RegistrationForm;
