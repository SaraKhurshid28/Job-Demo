import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineBarChart = () => {
  const data = [
    {
      name: "Jun",
      uv: 40,
    },
    {
      name: "Jul",
      uv: 30,
    },
    {
      name: "Aug",
      uv: 20,
    },
    {
      name: "Sep",
      uv: 90,
    },
    {
      name: "Oct",
      uv: 90,
    },
    {
      name: "Nov",
      uv: 39,
    },
    {
      name: "Dec",
      uv: 90,
    },
  ];

  return (
    <BarChart
      width={380}
      height={400}
      data={data}
      margin={{
        top: 30,

        bottom: 5,
      }}
      barSize={10}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#ED8936" />
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  );
};

export default LineBarChart;
