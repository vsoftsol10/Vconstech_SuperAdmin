import { motion } from "framer-motion";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { stats } from "../../data/customerData";

export default function CustomerStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          whileHover={{ y: -5 }}
          className="
            relative bg-white
            border border-gray-200
            rounded-2xl p-3 sm:p-4 md:p-5
            shadow-sm hover:shadow-xl
            hover:border-[#F5C518]
            transition-all duration-300
            cursor-pointer overflow-hidden
          "
        >

          {/* Top — label + doc icon */}
          <div className="flex items-start justify-between mb-3">
            <span className="
              text-[11px] sm:text-[12px] md:text-[13px]
              font-medium text-gray-500
              leading-tight pr-2
            ">
              {s.label}
            </span>

            {/* Doc Icon inline */}
            <div className="
              w-[30px] sm:w-[32px] md:w-[34px]
              h-[30px] sm:h-[32px] md:h-[34px]
              rounded-full bg-yellow-50
              flex items-center justify-center
              shrink-0
            ">
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#F5C518"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
          </div>

          {/* Number */}
          <h2 className="
            text-[20px] sm:text-[22px] md:text-[24px]
            font-extrabold text-[#111111]
            leading-none tracking-tight
            mb-3
          ">
            {s.value}
          </h2>

          {/* Bottom — subtitle + badge */}
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            <span className="
              text-[10px] sm:text-[11px] md:text-[12px]
              text-gray-400 truncate
            ">
              {s.sub}
            </span>

            <div className={`
              flex items-center gap-0.5
              px-1.5 py-0.5
              rounded-full shrink-0
              text-[9px] sm:text-[10px] font-bold
              whitespace-nowrap
              ${s.badgeType === "up"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-500"
              }
            `}>
              {s.badgeType === "up"
                ? <FiTrendingUp size={8} />
                : <FiTrendingDown size={8} />
              }
              {s.badge}
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
}