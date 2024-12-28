import { Input, Button as AntButton, Form, Select } from 'antd'; // Импортируем Button и Form из Ant Design
import React from 'react';

const onFinish = (values) => {
  console.log('Submitted:', values);
};

const RegisterPage = () => {
  return (
    <>
      <div className="bg-black text-white">
        {/* Секция с изображением и текстом */}
        <section className="relative">
          <img
            alt="Abstract blue network background "
            className="h-96 mb-[123px] object-cover"
            src="https://storage.googleapis.com/a1aa/image/klL7ueSrtixyCa80ntUPEHh9Aybve1fsxGkgffhbTWKgmBEfE.jpg"
            width="1920"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold">
              Помогаем вашему бизнесу расти
            </h1>
            <p className="mt-2 text-lg">
              Наращивайте свой интеллектуальный капитал с NewLine и занимайте новые позиции на рынке IT
            </p>
          </div>
        </section>

        {/* Форма записи */}
        <div className="flex justify-center items-center">
          <div className="p-8 bg-white mb-[138px] rounded-lg border border-white dark:border-black shadow-lg  w-[1167px] h-[585px] ">
            <h1 className="text-black  text-2xl font-semibold text-center mb-6">
              Запишитесь на курсы
            </h1>
            <p className="text-black dark:text-white ml-[257px] mb-[10px] mt-[55px]">
              Ваш контакт:
            </p>
            <Form
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="name"
                className="ml-[257px]"
                rules={[{ required: true, message: 'Введите ваше имя!' }]}
              >
                <Input
                  className="bg-gray-200 w-[692px] h-[75px]"
                  placeholder="Имя"
                />
              </Form.Item>

              <Form.Item
                name="phone"
                className="ml-[257px]"
                rules={[{ required: true, message: 'Введите номер телефона!' }]}
              >
                <Input
                  className="bg-gray-200 w-[692px] h-[75px]"
                  placeholder="Номер телефона"
                />
              </Form.Item>
              <Form.Item
                name="mchj"
                className="ml-[257px]"
                rules={[{ required: true, message: 'Введите MCHJ(бренд)' }]}
              >
               <Select>
                <Option>hello</Option>
               </Select>
              </Form.Item>

              <Form.Item className="text-center">
                <AntButton
                  type="primary"
                  htmlType="submit"
                  className="w-[248px] h-[50px] bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg border-0 hover:opacity-90"
                >
                  Записаться на курсы
                </AntButton>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
