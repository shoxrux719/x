import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: "Najot Ta'lim", "1 oylik to'lov": "1.500.000", 'Kurs davomiyligi': '2 oy' },
  { name: "Astrum", "1 oylik to'lov": "2.500.000", 'Kurs davomiyligi': '2 oy' },
  { name: "PDP", "1 oylik to'lov": "1.000.000", 'Kurs davomiyligi': '2 oy' },
  { name: "UStudy", "1 oylik to'lov": '2.000.000', 'Kurs davomiyligi': '2 oy' },
  { name: "HAAD LC", "1 oylik to'lov": '1.000.000', 'Kurs davomiyligi': '2 oy' },
  { name: "IT Bilim", "1 oylik to'lov": "1.500", 'Kurs davomiyligi': '2 oy' },
  { name: "IT Academy", "1 oylik to'lov": '1.500', 'Kurs davomiyligi': '2 oy' },
  { name: "IT Step", "1 oylik to'lov": '1.500', 'Kurs davomiyligi': '2 oy' },
  { name: "Kadirov Dev", "1 oylik to'lov": "1.500", 'Kurs davomiyligi': '2 oy' },
  { name: "MohirDev", "1 oylik to'lov": '1.500', 'Kurs davomiyligi': '2 oy' },
  { name: "S.A.", "1 oylik to'lov": '1.500', 'Kurs davomiyligi': '2 oy' },
  { name: "Let's Animate", "1 oylik to'lov": '1.500', 'Kurs davomiyligi': '2 oy' },
  { name: "ProWeb", "1 oylik to'lov": '1.500', 'Kurs davomiyligi': '2 oy' },
  { name: "Tehnikum", "1 oylik to'lov": '1.500', 'Kurs davomiyligi': '2 oy' },
];

// const formattedData = data.map(item => ({
//   ...item,
//   "1 oylik to'lov": parseFloat(item["1 oylik to'lov"].replace(/\./g, '').replace(',', '.')),
// }));

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " so'm";
};

const SubscriptionCard = () => {
  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-center text-xl font-bold mb-4">
         Учебных центров (по сумме показателей)
      </h3>
      <div style={{ height: 400, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={800}
            height={300}
            data={data}
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
            <Bar allowDecimals={true} type='number' dataKey="1 oylik to'lov" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            <Bar dataKey="Kurs davomiyligi" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SubscriptionCard;
