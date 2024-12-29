import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: "Najot Ta'lim", "1 oylik to'lov": "1500000", 'Kurs davomiyligi': 2 },
  { name: "Astrum", "1 oylik to'lov": "2500000", 'Kurs davomiyligi': 2 },
  { name: "PDP", "1 oylik to'lov": "1000000", 'Kurs davomiyligi': 2 },
  { name: "UStudy", "1 oylik to'lov": '2000000', 'Kurs davomiyligi': 2 },
  { name: "HAAD LC", "1 oylik to'lov": '1000000', 'Kurs davomiyligi': 2 },
  { name: "IT Bilim", "1 oylik to'lov": "1500", 'Kurs davomiyligi': 2 },
  { name: "IT Academy", "1 oylik to'lov": '1500', 'Kurs davomiyligi': 2 },
  { name: "IT Step", "1 oylik to'lov": '1500', 'Kurs davomiyligi': 2 },
  { name: "Kadirov Dev", "1 oylik to'lov": "1500", 'Kurs davomiyligi': 2 },
  { name: "MohirDev", "1 oylik to'lov": '1500', 'Kurs davomiyligi': 2 },
  { name: "S.A.", "1 oylik to'lov": '1500', 'Kurs davomiyligi': 2 },
  { name: "Let's Animate", "1 oylik to'lov": '1500', 'Kurs davomiyligi': 2 },
  { name: "ProWeb", "1 oylik to'lov": '1500', 'Kurs davomiyligi': 2 },
  { name: "Tehnikum", "1 oylik to'lov": '1500', 'Kurs davomiyligi': 2 },
];

// Преобразование данных
const formattedData = data.map((item) => ({
  ...item,
  "1 oylik to'lov": parseFloat(item["1 oylik to'lov"].replace(/\./g, '')) || 0,
}));

// Функция форматирования чисел
const formatNumber = (num) => {
  return `${num.toLocaleString()} so'm`;
};

const SubscriptionCard = () => {
  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-center text-xl font-bold mb-4">
        Учебных центров (по сумме показателей)
      </h3>
      <div style={{ height: 500, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={formattedData}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#555555" />
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis 
              stroke="#ffffff" 
              domain={[0, 'dataMax + 500000']} 
              tickFormatter={(value) => formatNumber(value)} 
            />
            <Tooltip formatter={(value) => formatNumber(value)} />
            <Legend wrapperStyle={{ color: '#ffffff' }} />
            <Bar dataKey="1 oylik to'lov" fill="#ff7300" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SubscriptionCard;
