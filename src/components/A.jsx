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

const ACopy = () => {
  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-center text-xl font-bold mb-4">
        Количество учеников
        учебных центров
      </h3>
      <div style={{ height: 400, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
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
            <Bar dataKey="name" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="1 oylik to'lov" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            <Bar dataKey="Kurs davomiyligi" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ACopy;
