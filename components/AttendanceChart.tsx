"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    school: 120,
    dormitory: 80,
  },
  {
    name: "February",
    school: 150,
    dormitory: 90,
  },
  {
    name: "March",
    school: 180,
    dormitory: 110,
  },
  {
    name: "April",
    school: 200,
    dormitory: 130,
  },
  {
    name: "May",
    school: 170,
    dormitory: 100,
  },
];

const LoanChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Loan Data</h1>
        <Image src="/moreDark.png" alt="Options" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="school"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
            name="School"
          />
          <Bar
            dataKey="dormitory"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
            name="Dormitory"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LoanChart;
