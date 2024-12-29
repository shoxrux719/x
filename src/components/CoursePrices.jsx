import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: "PDP", "To'laydigan summa": "1.000" },
  { name: "UStudy", "To'laydigan summa": '120' },
  { name: "HAAD LC", "To'laydigan summa": '1.000' },
  { name: "Najot Ta'lim", "To'laydigan summa": "3.000" },
  { name: "IT Bilim", "To'laydigan summa": "500" },
  { name: "IT Academy", "To'laydigan summa": '500' },
  { name: "Astrum", "To'laydigan summa": "2.000" },
  { name: "IT Step", "To'laydigan summa": '400' },
  { name: "Kadirov Dev", "To'laydigan summa": "200" },
  { name: "MohirDev", "To'laydigan summa": '1.500' },
  { name: "S.A.", "To'laydigan summa": '1.500' },
  { name: "Let's Animate", "To'laydigan summa": '1.500' },
  { name: "ProWeb", "To'laydigan summa": '500' },
  { name: "Tehnikum", "To'laydigan summa": '200' },
];

const formattedData = data.map(item => ({
  ...item,
  "To'laydigan summa": parseFloat(item["To'laydigan summa"].replace(/\./g, '').replace(',', '.')),
}));

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const CoursePrices = () => {
  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-center text-xl font-bold mb-4">
        Рейтинг учебных центров (по сумме показателей)
      </h3>
      <div style={{ height: 400, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={800}
            height={300}
            data={formattedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => formatNumber(value)} />
            <Legend />
            <Bar allowDecimals={true} type='number' dataKey="To'laydigan summa" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CoursePrices;