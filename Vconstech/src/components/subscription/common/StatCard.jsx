import { motion } from "framer-motion";
// import { CardIcon } from "../../../icons/SubscriptionIcons";
// import { CardIcon } from "../../../../icons/SubscriptionIcons";
import { CardIcon } from "../icons/SubscriptionIcons";
export default function StatCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl border border-gray-100 p-3 md:p-4 shadow-sm"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500 font-medium leading-tight">
          {card.label}
        </span>

        <span className="text-gray-300 hidden sm:block">
          <CardIcon />
        </span>
      </div>

      <div className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">
        {card.value}
      </div>

      <div className="flex items-center justify-between gap-1 flex-wrap">
        <span className="text-xs text-gray-400">
          {card.sub}
        </span>

        <span
          className={`text-xs font-bold px-2 py-0.5 rounded-full ${
            card.badgeType === "green"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {card.badge}
        </span>
      </div>
    </motion.div>
  );
}