import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: "itbilim.academy", summa: "1903" },
//   { name: "itacademy", summa: 12695 },
//   { name: "itstep", summa: 16411 },
//   { name: "kadirovdev", summa: "25728" },
//   { name: "astrum", summa: 26387 },
//   { name: "mohirdev", summa: 36214 },
//   { name: "spaceacademy", summa: 38240 },
//   { name: "letsanimate", summa: 42956 },
//   { name: "pdp", summa: 48128 },
//   { name: "ustudy", summa: 53271 },
//   { name: "proweb", summa: 59138 },
//   { name: "haad", summa: 74257 },
//   { name: "najottalim", summa: 150752 },
//   { name: "tehnikum", summa: 256198 },
// ];

const data = [
  {
    name: "Najot Ta'lim",
    uv: 1000,
    "O'quvchilar soni": "2500",
    "1 oylik to'lov": "240.033",
  },
  {
    name: 'Haad',
    uv: 3000,
    "O'quvchilar soni": 500,
    "1 oylik to'lov": 2210,
  },
  {
    name: 'LC Mohirdev	',
    uv: 2000,
    "O'quvchilar soni": 300,
    "1 oylik to'lov": 2290,
  },
  {
    name: 'Proweb',
    uv: 2780,
    "O'quvchilar soni": 300,
    "1 oylik to'lov": 2000,
  },
  {
    name: 'S.A',
    uv: 1890,
    "O'quvchilar soni": 1000,
    "1 oylik to'lov": 2181,
  },
  {
    name: 'Lets Animate',
    uv: 2390,
    "O'quvchilar soni": 300,
    "1 oylik to'lov": 2500,
  },
  {
    name: 'Ustudy',
    uv: 3490,
    "O'quvchilar soni": 600,
    "1 oylik to'lov": 2100,
  },
  {
    name: 'Astrum',
    uv: 3490,
    "O'quvchilar soni": 2000,
    "1 oylik to'lov": 2100,
  },
  {
    name: 'Tehnikum',
    uv: 3490,
    "O'quvchilar soni": 500,
    "1 oylik to'lov": 2100,
  },
  {
    name: 'Step Academy',
    uv: 3490,
    "O'quvchilar soni": 1500,
    "1 oylik to'lov": 2100,
  },
  {
    name: 'PDP',
    uv: 3490,
    "O'quvchilar soni": 1200,
    "1 oylik to'lov": 2100,
  },
  {
    name: 'Kadirov Dev',
    uv: 3490,
    "O'quvchilar soni": 400,
    "1 oylik to'lov": 2100,
  },
  {
    name: 'IT Academy	',
    uv: 3490,
    "O'quvchilar soni": 2000,
    "1 oylik to'lov": 2100,
  },

];


const NumberOfSubscribers = () => {
  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-center text-xl font-bold mb-4">
      Количество учеников 
      учебных центров       </h3>
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
            <Tooltip />
            <Legend />
            <Bar dataKey="O'quvchilar soni" fill="#1E90FF " activeBar={<Rectangle fill="white" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NumberOfSubscribers;
