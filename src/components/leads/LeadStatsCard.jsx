import { motion } from "framer-motion";

const LeadStatsCard = ({
  title,
  value,
  subtitle,
  growth,
  icon: Icon,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{ duration: 0.2 }}
      className="
        relative
        bg-white
        border
        border-[#F5D76E]
        rounded-2xl
        p-5
        shadow-sm
        hover:shadow-md
        transition-all
        duration-300
        overflow-hidden
      "
    >

      {/* Top */}
      <div className="flex items-start justify-between mb-5">

        <span className="text-[14px] font-medium text-gray-700">
          {title}
        </span>

        <div
          className="
            w-[30px]
            h-[30px]
            rounded-full
            bg-[#FFF7D6]
            flex
            items-center
            justify-center
          "
        >
          <Icon
            size={15}
            className="text-[#C89B00]"
          />
        </div>

      </div>

      {/* Value */}
      <h2
        className="
          text-[40px]
          font-extrabold
          text-[#111]
          leading-none
          tracking-tight
        "
      >
        {value}
      </h2>

      {/* Bottom */}
      <div className="flex items-center justify-between mt-5">

        <span className="text-[12px] text-gray-500">
          {subtitle}
        </span>

        <div
          className="
            px-2.5
            py-1
            rounded-full
            bg-green-100
            text-green-600
            text-[10px]
            font-bold
          "
        >
          {growth}
        </div>

      </div>

    </motion.div>
  );
};

export default LeadStatsCard;