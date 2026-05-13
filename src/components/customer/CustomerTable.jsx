import { motion } from "framer-motion";
import Toggle from "./Toggle";

export default function CustomerTable({
  filteredCustomers,
  handleToggle,
  emptyMessage,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse">

          {/* Head */}
          <thead>
            <tr className="bg-[#f0f0ee]">
              {[
                "Customer ID",
                "Customer Name",
                "Company",
                "Plan",
                "Phone",
                "Email",
                "Date",
                "Active",
                "Member",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="
                    px-4 md:px-6 py-3 sm:py-4
                    text-center
                    text-[12px] sm:text-[13px]
                    font-semibold text-[#111111]
                    whitespace-nowrap
                  "
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filteredCustomers.length === 0 ? (
              <tr>
                <td
                  colSpan={10}
                  className="py-16 text-center text-gray-400 text-sm"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              filteredCustomers.map((c, i) => (
                <motion.tr
                  key={c.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="
                    border-t border-gray-100
                    hover:bg-[#fffdf3]
                    transition-all duration-200
                    cursor-pointer
                  "
                >

                  {/* Customer ID */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <span className="
                      text-[11px] sm:text-xs
                      text-gray-400 font-mono
                      whitespace-nowrap
                    ">
                      {c.id}
                    </span>
                  </td>

                  {/* Customer Name */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="
                        w-[30px] sm:w-[32px]
                        h-[30px] sm:h-[32px]
                        rounded-full bg-yellow-50
                        flex items-center justify-center
                        text-[#F5C518] text-sm font-bold
                        shrink-0
                      ">
                        {c.name[0]}
                      </div>
                      <span className="
                        text-[12px] sm:text-sm
                        font-medium text-[#111111]
                        whitespace-nowrap
                      ">
                        {c.name}
                      </span>
                    </div>
                  </td>

                  {/* Company */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <span className="
                      text-[12px] sm:text-sm
                      text-gray-600
                      whitespace-nowrap
                    ">
                      {c.company}
                    </span>
                  </td>

                  {/* Plan */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <span className={`
                      px-2.5 py-1
                      rounded-full
                      text-[11px] sm:text-xs font-semibold
                      whitespace-nowrap
                      ${c.planColor}
                    `}>
                      {c.plan}
                    </span>
                  </td>

                  {/* Phone */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <span className="
                      text-[12px] sm:text-sm
                      text-gray-600
                      whitespace-nowrap
                    ">
                      {c.phone}
                    </span>
                  </td>

                  {/* Email */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <span className="
                      text-[12px] sm:text-sm
                      text-gray-600
                      whitespace-nowrap
                    ">
                      {c.email}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <span className="
                      text-[11px] sm:text-xs
                      text-gray-400
                      whitespace-nowrap
                    ">
                      {c.date}
                    </span>
                  </td>

                  {/* Active Toggle */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <Toggle
                        active={c.active}
                        onToggle={() => handleToggle(c.id)}
                      />
                    </div>
                  </td>

                  {/* Members */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <span className="
                      text-[12px] sm:text-sm
                      font-medium text-gray-700
                      whitespace-nowrap
                    ">
                      {c.members}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <button className="
                      w-8 h-8 sm:w-9 sm:h-9
                      rounded-lg
                      hover:bg-[#FFFBF0]
                      hover:text-[#C89B00]
                      text-gray-400
                      transition-all duration-200
                      flex items-center justify-center
                      mx-auto text-lg
                    ">
                      ⋮
                    </button>
                  </td>

                </motion.tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </motion.div>
  );
}