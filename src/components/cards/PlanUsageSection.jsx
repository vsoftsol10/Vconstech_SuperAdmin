import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const plans = [
  {
    label: "Free Plan",
    percent: 58,
  },
  {
    label: "Basic Plan",
    percent: 58,
  },
  {
    label: "Premium Plan",
    percent: 72,
  },
  {
    label: "Advance Plan",
    percent: 48,
  },
];

const chartData = [
  {
    name: "Email",
    value: 31,
    color: "#F5C518",
  },
  {
    name: "Fax",
    value: 8,
    color: "#4285F4",
  },
  {
    name: "Linked In",
    value: 45,
    color: "#22C55E",
  },
  {
    name: "Instagram",
    value: 16,
    color: "#FF4D6D",
  },
];

const ProgressBar = ({ label, percent, delay }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percent);
    }, delay);

    return () => clearTimeout(timer);
  }, [percent, delay]);

  return (
    <div className="space-y-2">

      {/* Label */}
      <div className="flex items-center justify-between">

        <span className="text-[15px] text-gray-400 font-medium">
          {label}
        </span>

      </div>

      {/* Track */}
      <div className="w-full h-[10px] bg-[#efefef] rounded-full overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{
            duration: 1,
            delay: delay / 1000,
          }}
          className="
            h-full
            rounded-full
            bg-[#F5C518]
          "
        />

      </div>

    </div>
  );
};

const DonutChart = () => {
  return (
    <div className="
      flex
      flex-col
      sm:flex-row
      items-center
      justify-center
      gap-6
      w-full
    ">

      {/* Legend */}
      <div className="flex flex-col gap-3">

        {chartData.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2"
          >

            <span
              className="w-[10px] h-[10px] rounded-full"
              style={{
                backgroundColor: item.color,
              }}
            />

            <span className="text-[13px] text-gray-600">
              {item.name}
            </span>

          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="relative w-[220px] h-[220px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={chartData}
              dataKey="value"
              innerRadius={55}
              outerRadius={75}
              paddingAngle={0}
              stroke="none"
              isAnimationActive={true}
              animationDuration={1400}
              animationBegin={200}
            >

              {chartData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                />
              ))}

            </Pie>

          </PieChart>

        </ResponsiveContainer>

        {/* Percentage Labels */}

        {/* 8% */}
        <span className="
            absolute
            top-[48px]
            left-1/2
            -translate-x-1/2
            text-[12px]
            font-semibold
            text-blue-500
        ">
         8%
        </span>

        {/* 31% */}
        <span className="
            absolute
            right-[18px]
            top-1/2
            -translate-y-1/2
            text-[12px]
            font-semibold
            text-yellow-500
        ">
        31%
        </span>

        {/* 45% */}
        <span className="
            absolute
            left-[18px]
            top-1/2
            -translate-y-1/2
            text-[12px]
            font-semibold
            text-green-500
        ">
        45%
        </span>

        {/* 16% */}
        <span className="
            absolute
            bottom-[48px]
            left-1/2
            -translate-x-1/2
            text-[12px]
            font-semibold
            text-pink-500
        ">
        16%
        </span>      

        </div>

    </div>    
  );
};

const PlanUsageSection = () => {
  return (
    <div className="
      grid
      grid-cols-1
      xl:grid-cols-[1.4fr_1fr]
      gap-4
    ">

      {/* Plan Usage Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
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
          mb-6
          gap-3
          flex-wrap
        ">

          <div>
            <h2 className="text-[20px] font-semibold text-[#111111]">
              Plan Usage
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              Free Plan
            </p>
          </div>

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

        {/* Progress Bars */}
        <div className="space-y-5">

          {plans.map((plan, index) => (
            <ProgressBar
              key={plan.label}
              label={plan.label}
              percent={plan.percent}
              delay={index * 150}
            />
          ))}

        </div>

      </motion.div>

      {/* Donut Chart Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
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
          flex
          items-center
          justify-center
          min-h-[320px]
        "
      >

        <DonutChart />

      </motion.div>

    </div>
  );
};

export default PlanUsageSection;