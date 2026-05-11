import { motion } from "framer-motion";
import ActionMenu from "./ActionMenu";

export default function SubscriptionMobileCards({
  filtered,
}) {
  return (
    <div className="md:hidden divide-y divide-gray-100">

      {filtered.length === 0 ? (
        <p className="text-center py-10 text-gray-400 text-sm">
          No records found
        </p>
      ) : (
        filtered.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="p-4 hover:bg-yellow-50 transition-colors"
          >
<div className="flex items-start justify-between mb-2">
  <div>
    <p className="font-semibold text-gray-800 text-sm">
      {row.name}
    </p>

    <p className="text-xs text-gray-400 mt-0.5">
      {row.plan}
    </p>
  </div>

  <div className="flex items-center gap-2">
    <span
      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
        row.status === "Active"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {row.status}
    </span>

    <ActionMenu row={row} />
  </div>
</div>

<div className="flex gap-4 text-xs text-gray-500 mt-2">
  <div>
    <span className="text-gray-400 block mb-0.5">
      Expires
    </span>

    <span className="font-medium text-gray-700">
      {row.expire}
    </span>
  </div>

  <div>
    <span className="text-gray-400 block mb-0.5">
      Renews
    </span>

    <span className="font-medium text-gray-700">
      {row.renew}
    </span>
  </div>
</div>

          </motion.div>
        ))
      )}

    </div>
  );
}