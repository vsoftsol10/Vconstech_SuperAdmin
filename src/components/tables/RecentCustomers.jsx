import { useState } from "react";
import { motion } from "framer-motion";

const customers = [
  {
    id: 1,
    name: "Customer",
    plan: "Basic",
    status: "Active",
    renewal: "2026-01-14",
  },
  {
    id: 2,
    name: "Customer",
    plan: "Premium",
    status: "Active",
    renewal: "2026-01-16",
  },
  {
    id: 3,
    name: "Customer",
    plan: "Advance",
    status: "Active",
    renewal: "2026-01-24",
  },
  {
    id: 4,
    name: "Customer",
    plan: "Basic",
    status: "Active",
    renewal: "2026-01-26",
  },
];

const planStyles = {
  Basic: "bg-blue-50 text-blue-500",
  Premium: "bg-purple-50 text-purple-500",
  Advance: "bg-orange-50 text-orange-500",
};

const RecentCustomers = () => {
  const [sortField, setSortField] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const sortedCustomers = [...customers].sort((a, b) => {
    if (!sortField) return 0;

    const va = a[sortField];
    const vb = b[sortField];

    return sortAsc
      ? va.localeCompare(vb)
      : vb.localeCompare(va);
  });

  const columns = [
    {
      key: "name",
      label: "Customer Name",
    },
    {
      key: "plan",
      label: "Plan",
    },
    {
      key: "status",
      label: "Status",
    },
    {
      key: "renewal",
      label: "Renewal Date",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3 }}
      className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        overflow-hidden
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
      "
    >

      {/* Header */}
      <div className="
        flex
        items-center
        justify-between
        gap-3
        flex-wrap
        px-4
        md:px-6
        py-4
        border-b
        border-gray-100
      ">

        <h2 className="text-[18px] font-semibold text-[#111111]">
          Recent Customer
        </h2>

        <button className="
          text-sm
          font-medium
          text-[#F5C518]
          hover:text-yellow-600
          transition-all
          duration-300
        ">
          View All →
        </button>

      </div>

      {/* Table Wrapper */}
      <div className="overflow-x-auto">

        <table className="w-full min-w-[700px] border-collapse">

          {/* Table Head */}
          <thead className="bg-[#fafafa]">

            <tr>

              {columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => handleSort(column.key)}
                  className="
                    px-4
                    md:px-6
                    py-4
                    text-left
                    text-[13px]
                    font-semibold
                    text-gray-400
                    cursor-pointer
                    whitespace-nowrap
                    select-none
                    hover:text-gray-600
                    transition-all
                    duration-300
                  "
                >

                  <div className="flex items-center gap-2">

                    {column.label}

                    <span className={`
                      text-[10px]
                      ${
                        sortField === column.key
                          ? "text-[#F5C518]"
                          : "text-gray-300"
                      }
                    `}>

                      {sortField === column.key
                        ? sortAsc
                          ? "▲"
                          : "▼"
                        : "⇅"}

                    </span>

                  </div>

                </th>
              ))}

            </tr>

          </thead>

          {/* Table Body */}
          <tbody>

            {sortedCustomers.map((customer, index) => (
              <motion.tr
                key={customer.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  border-t
                  border-gray-100
                  hover:bg-[#fffdf3]
                  transition-all
                  duration-300
                  group
                  cursor-pointer
                "
              >

                {/* Customer */}
                <td className="
                  px-4
                  md:px-6
                  py-4
                  whitespace-nowrap
                ">

                  <div className="flex items-center gap-3">

                    {/* Avatar */}
                    <div className="
                      w-[34px]
                      h-[34px]
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-white
                      text-sm
                      font-semibold
                      bg-gradient-to-br
                      from-blue-400
                      to-indigo-500
                    ">

                      {customer.name[0]}

                    </div>

                    <span className="
                      text-sm
                      font-medium
                      text-gray-700
                    ">
                      {customer.name}
                    </span>

                  </div>

                </td>

                {/* Plan */}
                <td className="
                  px-4
                  md:px-6
                  py-4
                  whitespace-nowrap
                ">

                  <span className={`
                    px-3
                    py-1
                    rounded-full
                    text-[12px]
                    font-semibold
                    ${planStyles[customer.plan]}
                  `}>

                    {customer.plan}

                  </span>

                </td>

                {/* Status */}
                <td className="
                  px-4
                  md:px-6
                  py-4
                  whitespace-nowrap
                ">

                  <div className="
                    flex
                    items-center
                    gap-2
                    text-green-500
                    text-sm
                    font-semibold
                  ">

                    {/* Pulse Dot */}
                    <span className="
                      relative
                      flex
                      w-2
                      h-2
                    ">

                      <span className="
                        animate-ping
                        absolute
                        inline-flex
                        h-full
                        w-full
                        rounded-full
                        bg-green-400
                        opacity-75
                      "></span>

                      <span className="
                        relative
                        inline-flex
                        rounded-full
                        h-2
                        w-2
                        bg-green-500
                      "></span>

                    </span>

                    {customer.status}

                  </div>

                </td>

                {/* Renewal */}
                <td className="
                  px-4
                  md:px-6
                  py-4
                  whitespace-nowrap
                  text-sm
                  text-gray-400
                ">
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