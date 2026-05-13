import { motion } from "framer-motion";
import Toggle from "./Toggle";

export default function CustomerMobileCards({
  filteredCustomers,
  handleToggle,
  emptyMessage,
}) {
  return (
    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-3
      gap-3 sm:gap-4
    ">
      {filteredCustomers.length === 0 ? (
        <div className="col-span-full text-center py-12 text-gray-400 text-sm">
          {emptyMessage}
        </div>
      ) : (
        filteredCustomers.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
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

            {/* Top — name + plan badge + menu */}
            <div className="flex items-start justify-between mb-3">

              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="
                  w-[40px] h-[40px]
                  rounded-full bg-yellow-50
                  flex items-center justify-center
                  text-[#F5C518] font-bold text-base
                  shrink-0
                ">
                  {c.name?.charAt(0)}
                </div>

                {/* Name + ID */}
                <div>
                  <p className="
                    text-[13px] sm:text-[14px]
                    font-semibold text-[#111111]
                    leading-tight
                  ">
                    {c.name}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {c.id} · {c.company}
                  </p>
                </div>

              </div>

              {/* Menu button */}
              <button className="
                text-gray-400 hover:text-gray-700
                text-xl leading-none p-1 shrink-0
              ">
                ⋮
              </button>

            </div>

            {/* Email & Phone */}
            <div className="mb-3 space-y-1">
              <p className="text-[11px] sm:text-[12px] text-gray-500">
                {c.email}
              </p>
              <p className="text-[11px] sm:text-[12px] text-gray-400">
                {c.phone}
              </p>
            </div>

            {/* Plan Badge */}
            <div className="mb-4">
              <span className={`
                px-2.5 py-1
                rounded-full
                text-[11px] font-semibold
                ${c.planColor}
              `}>
                {c.plan}
              </span>
            </div>

            {/* Bottom — date + members + toggle */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] sm:text-[12px] text-gray-400">
                {c.date}
              </span>

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="
                  text-[11px] sm:text-[12px]
                  font-medium text-gray-600
                  whitespace-nowrap
                ">
                  {c.members} members
                </span>
                <Toggle
                  active={c.active}
                  onToggle={() => handleToggle(c.id)}
                />
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
        ))
      )}
    </div>
  );
}