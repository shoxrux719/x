import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: "PDP", "O'quvchilari soni": "1.000" },
  { name: "UStudy", "O'quvchilari soni": '120' },
  { name: "HAAD LC", "O'quvchilari soni": '1.000' },
  { name: "Najot Ta'lim", "O'quvchilari soni": "3.000" },
  { name: "IT Bilim", "O'quvchilari soni": "500" },
  { name: "IT Academy", "O'quvchilari soni": '500' },
  { name: "Astrum", "O'quvchilari soni": "2.000" },
  { name: "IT Step", "O'quvchilari soni": '400' },
  { name: "Kadirov Dev", "O'quvchilari soni": "200" },
  { name: "MohirDev", "O'quvchilari soni": '1.500' },
  { name: "S.A.", "O'quvchilari soni": '1.500' },
  { name: "Let's Animate", "O'quvchilari soni": '1.500' },
  { name: "ProWeb", "O'quvchilari soni": '500' },
  { name: "Tehnikum", "O'quvchilari soni": '200' },
];

const formattedData = data.map(item => ({
  ...item,
  "O'quvchilari soni": parseFloat(item["O'quvchilari soni"].replace(/\./g, '').replace(',', '.')),
}));

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const WorkingStudents = () => {
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
            <Bar allowDecimals={true} type='number' dataKey="O'quvchilari soni" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WorkingStudents;
