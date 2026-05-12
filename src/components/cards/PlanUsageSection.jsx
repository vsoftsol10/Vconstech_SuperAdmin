import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const plans = [
  { label: "Free Plan",    percent: 58 },
  { label: "Basic Plan",   percent: 58 },
  { label: "Premium Plan", percent: 72 },
  { label: "Advance Plan", percent: 48 },
];

const chartData = [
  { name: "Email",     value: 31, color: "#F5D547" },
  { name: "Fax",       value: 8,  color: "#4F6BED" },
  { name: "Linked In", value: 45, color: "#1DB954" },
  { name: "Instagram", value: 16, color: "#FF4D6D" },
];

const total = chartData.reduce((sum, d) => sum + d.value, 0);

function getLabelPosition(startAngle, sweep, r = 63) {
  const mid = startAngle + sweep / 2;
  const rad = (mid - 90) * (Math.PI / 180);
  return {
    x: 95 + r * Math.cos(rad),
    y: 95 + r * Math.sin(rad),
  };
}

const PlanUsageSection = () => {
  let currentAngle = 0;

  const labelPositions = chartData.map((item) => {
    const sweep = (item.value / total) * 360;
    const pos = getLabelPosition(currentAngle, sweep);
    currentAngle += sweep;
    return { ...item, ...pos };
  });

  return (
    <div className="
      grid
      grid-cols-1
      lg:grid-cols-[1.2fr_0.9fr]
      gap-4
    ">

      {/* Plan Usage Card */}
      <motion.div
        whileHover={{ y: -2 }}
        className="
          bg-white border border-gray-200
          rounded-2xl p-4 sm:p-5
          shadow-sm transition-all duration-300
        "
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#111111]">
              Plan Usage
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Free Plan
            </p>
          </div>
          <button className="
            border border-gray-200 text-gray-400
            text-xs sm:text-sm
            px-3 sm:px-4 py-1.5 sm:py-2
            rounded-lg hover:border-[#F5C518]
            transition-all duration-300 whitespace-nowrap
          ">
            This Month
          </button>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {plans.map((plan, index) => (
            <div key={plan.label}>
              <p className="text-[13px] sm:text-[15px] text-gray-400 mb-2">
                {plan.label}
              </p>
              <div className="h-[8px] sm:h-[10px] bg-[#f1f1f1] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${plan.percent}%` }}
                  transition={{ duration: 1, delay: index * 0.15 }}
                  className="h-full bg-[#F5C518] rounded-full"
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
          bg-white border border-gray-200
          rounded-2xl p-4 sm:p-5
          shadow-sm transition-all duration-300
        "
      >
        <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#111111] mb-4 sm:mb-6">
          Lead for Distribution
        </h2>

        <div className="flex flex-row items-center justify-center gap-4 sm:gap-8">

          {/* Legend */}
          <div className="space-y-2 sm:space-y-3 shrink-0">
            {chartData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span
                  className="w-[8px] h-[8px] rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[11px] sm:text-[13px] text-gray-600">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="relative w-[160px] h-[160px] sm:w-[190px] sm:h-[190px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
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
                  startAngle={90}
                  endAngle={-270}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {labelPositions.map((item) => (
              <span
                key={item.name}
                className="absolute text-[9px] sm:text-[10px] text-white font-semibold"
                style={{
                  left: `${item.x}px`,
                  top: `${item.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {item.value}%
              </span>
            ))}
          </div>

        </div>
      </motion.div>

    </div>
  );
};

export default PlanUsageSection;