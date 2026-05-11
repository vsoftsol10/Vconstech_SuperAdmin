import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { motion } from "framer-motion";

const data = [
  { month: "Jan", users: 190 },
  { month: "Feb", users: 310 },
  { month: "Mar", users: 240 },
  { month: "Apr", users: 80 },
  { month: "May", users: 210 },
  { month: "Jun", users: 215 },
  { month: "Jul", users: 185 },
  { month: "Aug", users: 165 },
  { month: "Sep", users: 125 },
  { month: "Oct", users: 135 },
  { month: "Nov", users: 155 },
  { month: "Dec", users: 205 },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}) => {
  if (
    active &&
    payload &&
    payload.length
  ) {
    return (
      <div className="
        bg-[#1E1E1E]
        rounded-xl
        px-3
        py-2
        shadow-xl
        border
        border-[#2d2d2d]
        min-w-[90px]
      ">

        <p className="
          text-white
          text-[13px]
          font-semibold
          mb-[2px]
        ">
          {label}
        </p>

        <p className="
          text-[#F5C518]
          text-[12px]
          font-medium
        ">
          Users : {payload[0].value}
        </p>

      </div>
    );
  }

  return null;
};

const ActiveUsersChart = () => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-4
        shadow-sm
        transition-all
        duration-300
      "
    >

      {/* Header */}
      <div className="
        flex
        items-center
        justify-between
        mb-6
      ">

        <h2 className="
          text-[18px]
          font-semibold
          text-[#111111]
        ">
          Active Users Over Time
        </h2>

        <button className="
          border
          border-gray-200
          text-gray-400
          text-sm
          px-4
          py-2
          rounded-lg
          hover:border-[#F5C518]
          transition-all
          duration-300
        ">
          This Year
        </button>

      </div>

      {/* Chart */}
      <div className="
        w-full
        h-[300px]
      ">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -15,
              bottom: 0,
            }}
          >

            {/* Grid */}
            <CartesianGrid
              stroke="#f1f1f1"
              vertical={false}
            />

            {/* X Axis */}
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#8a8a8a",
              }}
            />

            {/* Y Axis */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "#8a8a8a",
              }}
              ticks={[0, 100, 200, 300, 400]}
            />

            {/* Tooltip */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#d4d4d4",
                strokeWidth: 1,
              }}
            />

            {/* Line */}
            <Line
              type="monotone"
              dataKey="users"
              stroke="#EAB308"
              strokeWidth={2.5}
              dot={{
                r: 5,
                fill: "#ffffff",
                stroke: "#EAB308",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
                fill: "#EAB308",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
              animationDuration={1500}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </motion.div>
  );
};

export default ActiveUsersChart;