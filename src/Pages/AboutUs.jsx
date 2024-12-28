import React from 'react';
import { Form, Input, Button } from 'antd';
import 'tailwindcss/tailwind.css';

const RegistrationForm = () => {
  const onFinish = (values) => {
    console.log('Submitted:', values);
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="p-8 dark:bg-custom-gradient-light bg-custom-gradient mb-[138px] rounded-lg border border-white dark:border-black dark:border-t-purple-600  border-t-purple-600  shadow-lg w-[1170px] h-[460px]">
        <h1 className="text-black dark:text-white text-2xl font-semibold  text-center mb-6">Запишитесь на курсы</h1>
        <p className='text-black dark:text-white ml-[257px] mb-[10px] mt-[55px]'>Ваш контакт:</p>
        <Form
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
           
            name="name"
            className='ml-[257px]'
            rules={[{ required: true, message: 'Введите ваше имя!' }]}
          >
            <Input className="bg-gray-200 w-[692px] h-[75px]  "  placeholder="Имя" />
          </Form.Item>

          <Form.Item
            name="phone"
            className='ml-[257px]'
            rules={[{ required: true, message: 'Введите номер телефона!' }]}
          >
            <Input className="bg-gray-200 w-[692px] h-[75px] " placeholder="Номер телефона" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-[248px] h-[50px] ml-[450px] bg-slate-900 rounded-full border-8 border-transparent border-purple-500 transition-all duration-300 shadow-[0px_0px_10px_0px_#7744FFB2] text-white  "
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
