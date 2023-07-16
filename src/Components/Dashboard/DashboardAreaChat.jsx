import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

import "./Dashboard.css";
const DashboardAreaChat = () => {
  const data = [
    {
      name: "Jan",
      first: 400,
      second: 240,
    },
    {
      name: "Feb",
      first: 300,
      second: 139,
    },
    {
      name: "Mar",
      first: 200,
      second: 400,
    },
    {
      name: "Apr",
      first: 278,
      second: 390,
    },
    {
      name: "May",
      first: 189,
      second: 300,
    },
    {
      name: "Jun",
      first: 239,
      second: 380,
    },
    {
      name: "Jul",
      first: 349,
      second: 430,
    },
    {
      name: "Aug",
      first: 249,
      second: 400,
    },
    {
      name: "Sep",
      first: 140,
      second: 420,
    },
    {
      name: "Oct",
      first: 390,
      second: 330,
    },
    {
      name: "Nov",
      first: 329,
      second: 423,
    },
    {
      name: "Dec",
      first: 196,
      second: 430,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="80%">
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 50, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="first"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="second"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DashboardAreaChat;
