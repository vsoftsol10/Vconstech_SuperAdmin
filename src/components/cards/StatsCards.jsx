import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";

const cards = [
  {
    title: "Active Users",
    value: "2,438",
    subtitle: "128 this Week",
    growth: "+4.6%",
  },
  {
    title: "Deactive User",
    value: "412",
    subtitle: "-23 this week",
    growth: "+4.6%",
  },
  {
    title: "Total Customers",
    value: "9,860",
    subtitle: "this Month",
    growth: "+4.6%",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">

      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
          }}
          whileHover={{
            y: -5,
          }}
          className="
            relative
            bg-white
            border
            border-gray-200
            rounded-2xl
            p-4 md:p-5
            overflow-hidden
            shadow-sm
            hover:shadow-xl
            hover:border-[#F5C518]
            transition-all
            duration-300
            cursor-pointer
          "
        >

          {/* Top */}
          <div className="flex items-center justify-between mb-4 md:mb-5">

            <span className="text-sm md:text-[15px] font-medium text-gray-500">
              {card.title}
            </span>

            {/* Icon */}
            <div className="
              w-[36px] md:w-[38px]
              h-[36px] md:h-[38px]
              rounded-full
              bg-gradient-to-br
              from-orange-300
              to-orange-400
              flex
              items-center
              justify-center
              shadow-md
            ">

              <FiUsers className="text-white text-base md:text-lg" />
            </div>
          </div>

          {/* Number */}
          <h2 className="
            text-[30px]
            sm:text-[34px]
            md:text-[38px]
            font-extrabold
            text-[#111111]
            leading-none
            tracking-tight
            mb-4 md:mb-5
          ">
            {card.value}
          </h2>

          {/* Bottom */}
          <div className="flex items-center justify-between gap-3">

            <span className="text-[12px] md:text-[13px] text-gray-400">
              {card.subtitle}
            </span>

            {/* Growth Badge */}
            <div className="
              px-2 md:px-3
              py-1
              rounded-full
              bg-green-100
              text-green-600
              text-[10px] md:text-[11px]
              font-bold
              whitespace-nowrap
            ">

              ▲ {card.growth}
            </div>
          </div>

          {/* Bottom Hover Line */}
          <div className="
            absolute
            bottom-0
            left-0
            w-0
            h-[3px]
            bg-gradient-to-r
            from-[#F5C518]
            to-yellow-300
            hover:w-full
            transition-all
            duration-500
          "></div>

        </motion.div>
      ))}

    </div>
  );
};

export default StatsCards;