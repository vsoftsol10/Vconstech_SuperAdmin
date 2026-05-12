import { motion } from "framer-motion";

const customers = [
  { id: 1, name: "Customer", plan: "Basic",   status: "Active", renewal: "2026-01-14" },
  { id: 2, name: "Customer", plan: "Premium", status: "Active", renewal: "2026-01-16" },
  { id: 3, name: "Customer", plan: "Advance", status: "Active", renewal: "2026-01-24" },
  { id: 4, name: "Customer", plan: "Basic",   status: "Active", renewal: "2026-01-26" },
];

const planStyles = {
  Basic:   "bg-blue-50 text-blue-500",
  Premium: "bg-purple-50 text-purple-500",
  Advance: "bg-orange-50 text-orange-500",
};

const RecentCustomers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
    >

      {/* Title */}
      <div className="px-4 md:px-6 py-4 border-b border-gray-100">
        <h2 className="text-[17px] font-semibold text-[#111111]">
          Recent Customer
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">

          {/* Head */}
          <thead>
            <tr className="bg-[#f0f0ee]">
              <th className="px-4 md:px-6 py-3 text-center text-[13px] font-semibold text-[#111111]">
                Customer Name
              </th>
              <th className="px-4 md:px-6 py-3 text-center text-[13px] font-semibold text-[#111111]">
                Plan
              </th>
              <th className="px-4 md:px-6 py-3 text-center text-[13px] font-semibold text-[#111111]">
                Status
              </th>
              <th className="px-4 md:px-6 py-3 text-center text-[13px] font-semibold text-[#111111]">
                Renewal Date
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {customers.map((customer, index) => (
              <motion.tr
                key={customer.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="border-t border-gray-100 hover:bg-[#fffdf3] transition-all duration-200 cursor-pointer"
              >

                {/* Customer Name — with avatar */}
                <td className="px-4 md:px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="
                      w-[32px] h-[32px]
                      rounded-full
                      bg-gradient-to-br from-blue-400 to-indigo-500
                      flex items-center justify-center
                      text-white text-sm font-semibold
                      shrink-0
                    ">
                      {customer.name[0]}
                    </div>
                    <span className="text-sm font-medium text-[#111111]">
                      {customer.name}
                    </span>
                  </div>
                </td>

                {/* Plan — colored badge */}
                <td className="px-4 md:px-6 py-4 text-center">
                  <span className={`
                    px-3 py-1 rounded-full
                    text-[12px] font-semibold
                    ${planStyles[customer.plan]}
                  `}>
                    {customer.plan}
                  </span>
                </td>

                {/* Status — pulse dot */}
                <td className="px-4 md:px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-green-500 text-sm font-semibold">
                    <span className="relative flex w-2 h-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    {customer.status}
                  </div>
                </td>

                {/* Renewal Date */}
                <td className="px-4 md:px-6 py-4 text-center text-sm text-gray-400">
                  {customer.renewal}
                </td>

              </motion.tr>
            ))}
          </tbody>

        </table>
      </div>

    </motion.div>
  );
};

export default RecentCustomers;