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
    color: "#F5D547",
  },
  {
    name: "Fax",
    value: 8,
    color: "#4F6BED",
  },
  {
    name: "Linked In",
    value: 45,
    color: "#1DB954",
  },
  {
    name: "Instagram",
    value: 16,
    color: "#FF4D6D",
  },
];

const PlanUsageSection = () => {
  return (
    <div className="
      grid
      grid-cols-1
      xl:grid-cols-[1.2fr_0.9fr]
      gap-4
    ">

      {/* Plan Usage Card */}
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
          mb-5
        ">

          <div>
            <h2 className="
              text-[18px]
              font-semibold
              text-[#111111]
            ">
              Plan Usage
            </h2>

            <p className="
              text-sm
              text-gray-400
              mt-1
            ">
              Free Plan
            </p>
          </div>

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
            This Month
          </button>

        </div>

        {/* Progress Bars */}
        <div className="space-y-5">

          {plans.map((plan, index) => (
            <div key={plan.label}>

              <p className="
                text-[15px]
                text-gray-400
                mb-2
              ">
                {plan.label}
              </p>

              <div className="
                h-[10px]
                bg-[#f1f1f1]
                rounded-full
                overflow-hidden
              ">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${plan.percent}%`,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.15,
                  }}
                  className="
                    h-full
                    bg-[#F5C518]
                    rounded-full
                  "
                />

              </div>

            </div>
          ))}

        </div>

      </motion.div>

      {/* Donut Chart Card */}
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

        {/* Heading */}
        <h2 className="
          text-[18px]
          font-semibold
          text-[#111111]
          mb-6
        ">
          Lead for Distribution
        </h2>

        {/* Content */}
        <div className="
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-8
        ">

          {/* Legend */}
          <div className="space-y-3">

            {chartData.map((item) => (
              <div
                key={item.name}
                className="
                  flex
                  items-center
                  gap-2
                "
              >

                <span
                  className="
                    w-[8px]
                    h-[8px]
                    rounded-full
                  "
                  style={{
                    backgroundColor: item.color,
                  }}
                />

                <span className="
                  text-[13px]
                  text-gray-600
                ">
                  {item.name}
                </span>

              </div>
            ))}

          </div>

          {/* Chart */}
          <div className="
            relative
            w-[190px]
            h-[190px]
          ">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={chartData}
                  dataKey="value"
                  innerRadius={48}
                  outerRadius={78}
                  paddingAngle={0}
                  cornerRadius={0}
                  stroke="none"
                  animationDuration={1200}
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

            {/* Labels */}

            {/* 8% */}
            <span className="
              absolute
              top-[26px]
              left-1/2
              -translate-x-1/2
              text-[11px]
              text-white
              font-medium
            ">
              8%
            </span>

            {/* 31% */}
            <span className="
              absolute
              right-[18px]
              top-1/2
              -translate-y-1/2
              text-[11px]
              text-white
              font-medium
            ">
              31%
            </span>

            {/* 16% */}
            <span className="
              absolute
              bottom-[26px]
              left-1/2
              -translate-x-1/2
              text-[11px]
              text-white
              font-medium
            ">
              16%
            </span>

            {/* 45% */}
            <span className="
              absolute
              left-[14px]
              top-1/2
              -translate-y-1/2
              text-[11px]
              text-white
              font-medium
            ">
              45%
            </span>

          </div>

        </div>

      </motion.div>

    </div>
  );
};

export default PlanUsageSection;