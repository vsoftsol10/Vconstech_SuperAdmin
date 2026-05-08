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
  { day: "Mon", users: 190 },
  { day: "Tue", users: 310 },
  { day: "Wed", users: 240 },
  { day: "Thu", users: 80 },
  { day: "Fri", users: 210 },
  { day: "Sat", users: 215 },
  { day: "Sun", users: 185 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="
        bg-[#111111]
        px-3
        py-2
        rounded-xl
        shadow-xl
      ">

        <p className="text-[#F5C518] text-xs font-medium mb-1">
          {label}
        </p>

        <p className="text-white text-sm font-semibold">
          {payload[0].value} Users
        </p>

      </div>
    );
  }

  return null;
};

const ActiveUsersChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3 }}
      className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-4
        md:p-5
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
      "
    >

      {/* Header */}
      <div className="
        flex
        items-center
        justify-between
        gap-3
        flex-wrap
        mb-6
      ">

        <h2 className="text-[18px] font-semibold text-[#111111]">
          Active Users Over Time
        </h2>

        <button className="
          text-sm
          text-gray-400
          border
          border-gray-200
          px-4
          py-2
          rounded-lg
          hover:border-[#F5C518]
          transition-all
          duration-300
        ">
          This Month
        </button>

      </div>

      {/* Chart */}
      <div className="w-full h-[260px] md:h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

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
              dataKey="day"
              tick={{
                fontSize: 12,
                fill: "#9ca3af",
              }}
              axisLine={false}
              tickLine={false}
            />

            {/* Y Axis */}
            <YAxis
              tick={{
                fontSize: 12,
                fill: "#9ca3af",
              }}
              axisLine={false}
              tickLine={false}
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
            />

            {/* Tooltip */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#F5C518",
                strokeDasharray: "4 4",
              }}
            />

            {/* Glow Shadow Line */}
            <Line
              type="monotone"
              dataKey="users"
              stroke="#F5C518"
              strokeWidth={10}
              opacity={0.12}
              dot={false}
              activeDot={false}
              animationDuration={1600}
            />

            {/* Main Line */}
            <Line
              type="monotone"
              dataKey="users"
              stroke="#F5C518"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#ffffff",
                stroke: "#F5C518",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 7,
                fill: "#ffffff",
                stroke: "#F5C518",
                strokeWidth: 3,
              }}
              animationDuration={1800}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </motion.div>
  );
};

export default ActiveUsersChart;