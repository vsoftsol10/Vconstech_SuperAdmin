import { motion } from "framer-motion";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

const LeadStatsCard = ({
  title,
  value,
  subtitle,
  growth,
  growthType,
  icon: Icon,
}) => {
  const isPositive = growthType === "positive";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="
        relative bg-white
        border border-gray-200
        rounded-2xl p-4
        shadow-sm hover:shadow-xl
        hover:border-[#F5C518]
        transition-all duration-300
        cursor-pointer overflow-hidden
      "
    >

      {/* Top */}
      <div className="flex items-center justify-between mb-3">
        <span className="
          text-[12px] sm:text-[13px] md:text-[14px]
          font-medium text-gray-500 leading-tight
        ">
          {title}
        </span>

        <div className="
          w-[32px] sm:w-[34px] md:w-[36px]
          h-[32px] sm:h-[34px] md:h-[36px]
          rounded-full bg-yellow-50
          flex items-center justify-center
          shrink-0 ml-2
        ">
          <Icon size={15} className="text-[#F5C518]" />
        </div>
      </div>

      {/* Number — smaller */}
      <h2 className="
        text-[22px] sm:text-[26px] md:text-[28px]
        font-extrabold text-[#111111]
        leading-none tracking-tight
        mb-3
      ">
        {value}
      </h2>

      {/* Bottom */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] sm:text-[12px] text-gray-400">
          {subtitle}
        </span>

        {/* Growth Badge — smaller */}
        <div className={`
          flex items-center gap-0.5
          px-1.5 py-0.5
          rounded-full
          text-[9px] sm:text-[10px] font-bold
          whitespace-nowrap
          ${isPositive
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-500"
          }
        `}>
          {isPositive
            ? <FiTrendingUp size={8} />
            : <FiTrendingDown size={8} />
          }
          {growth}
        </div>
      </div>

      {/* Bottom Hover Line */}
      <div className="
        absolute bottom-0 left-0
        w-0 h-[3px]
        bg-gradient-to-r from-[#F5C518] to-yellow-300
        hover:w-full transition-all duration-500
      "></div>

    </motion.div>
  );
};

export default LeadStatsCard;