import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "itbilim.academy", value: "1903" },
  { name: "itacademy", value: 12695 },
  { name: "itstep", value: 16411 },
  { name: "kadirovdev", value: "25728" },
  { name: "astrum", value: 26387 },
  { name: "mohirdev", value: 36214 },
  { name: "spaceacademy", value: 38240 },
  { name: "letsanimate", value: 42956 },
  { name: "pdp", value: 48128 },
  { name: "ustudy", value: 53271 },
  { name: "proweb", value: 59138 },
  { name: "haad", value: 74257 },
  { name: "najottalim", value: 150752 },
  { name: "tehnikum", value: 256198 },
];

const SubscriptionCard = () => {
  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-center text-xl font-bold mb-4">
         Учебных центров (по сумме показателей)
      </h3>
      <div className="w-full h-full">
        <ResponsiveContainer>
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis type="number" tick={{ fill: "#fff" }} />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#fff" }}
              width={20}
            />
            <Tooltip
              cursor={{ fill: "#333" }}
              contentStyle={{ backgroundColor: "#222", borderColor: "#444" }}
            />
            <Bar
              dataKey="value"
              fill="#ff7f7f"
              barSize={20}
              radius={[0, 10, 10, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SubscriptionCard;
