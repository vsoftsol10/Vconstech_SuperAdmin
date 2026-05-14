import { motion } from "framer-motion";
import { FiUsers, FiTrendingUp } from "react-icons/fi";

const cards = [
  {
    title: "Total Customers",
    value: "9,860",
    subtitle: "this Month",
    growth: "+4.6%",
  },
  {
    title: "Active Users",
    value: "2,438",
    subtitle: "128 this Week",
    growth: "+4.6%",
  },
  {
    title: "Inactive User",
    value: "412",
    subtitle: "-23 this week",
    growth: "+4.6%",
  },
];

const StatsCards = () => {
  return (
    <div className="
      grid grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-3 sm:gap-4
    ">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="
            relative bg-white
            border border-gray-200
            rounded-2xl p-4 md:p-5
            shadow-sm hover:shadow-xl
            hover:border-[#F5C518]
            transition-all duration-300
            cursor-pointer overflow-hidden
          "
        >

          {/* Top */}
          <div className="flex items-center justify-between mb-4 md:mb-5">
            <span className="
              text-[13px] sm:text-[14px] md:text-[15px]
              font-medium text-gray-500 leading-tight
            ">
              {card.title}
            </span>

            <div className="
              w-[36px] sm:w-[38px] md:w-[40px]
              h-[36px] sm:h-[38px] md:h-[40px]
              rounded-full bg-yellow-50
              flex items-center justify-center
              shrink-0 ml-2
            ">
              <FiUsers className="text-[#F5C518] text-base sm:text-lg" />
            </div>
          </div>

          {/* Number — reduced size only */}
          <h2 className="
            text-[22px] sm:text-[24px] md:text-[26px]
            font-bold text-[#111111]
            leading-none tracking-tight
            mb-4 md:mb-5
          ">
            {card.value}
          </h2>

          {/* Bottom */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-400">
              {card.subtitle}
            </span>

            {/* Growth Badge */}
            <div className="
              flex items-center gap-0.5
              px-1.5 py-0.5
              rounded-full
              bg-green-100 text-green-600
              text-[9px] sm:text-[10px]
              font-bold whitespace-nowrap
            ">
              <FiTrendingUp size={8} />
              {card.growth}
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
      ))}
    </div>
  );
};

export default StatsCards;