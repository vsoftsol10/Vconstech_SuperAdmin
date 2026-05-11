// import { motion } from "framer-motion";

// import ActionMenu from "./ActionMenu";

// import { TABLE_HEADERS } from "../../../constants/subscriptionConstants";

// export default function SubscriptionTable({ filtered }) {
//   return (
//     <div className="hidden md:block overflow-visible">

//       <table className="w-full">

//         <thead>
//           <tr className="border-b border-gray-100">
//             {TABLE_HEADERS.map((h) => (
//               <th
//                 key={h}
//                 className="text-center px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide"
//               >
//                 {h}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody>

//           {filtered.length === 0 ? (
//             <tr>
//               <td
//                 colSpan={6}
//                 className="text-center py-10 text-gray-400 text-sm"
//               >
//                 No records found
//               </td>
//             </tr>
//           ) : (
//             filtered.map((row, i) => (
//               <motion.tr
//                 key={i}
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//                 className="border-b border-gray-50 hover:bg-yellow-50 transition-colors"
//               >
//                 <td className="text-center px-4 py-3 text-sm font-semibold text-gray-800">
//                   {row.name}
//                 </td>

//                 <td className="text-center px-4 py-3 text-sm text-gray-600">
//                   {row.plan}
//                 </td>

//                 <td className="text-center px-4 py-3">
//                   <span
//                     className={`text-xs font-semibold px-3 py-1 rounded-full ${
//                       row.status === "Active"
//                         ? "bg-green-100 text-green-700"
//                         : "bg-yellow-100 text-yellow-700"
//                     }`}
//                   >
//                     {row.status}
//                   </span>
//                 </td>

//                 <td className="text-center px-4 py-3 text-sm text-gray-600">
//                   {row.expire}
//                 </td>

//                 <td className="text-center px-4 py-3 text-sm text-gray-600">
//                   {row.renew}
//                 </td>

//                 <td className="text-center px-4 py-3">
//                   <ActionMenu row={row} />
//                 </td>
//               </motion.tr>
//             ))
//           )}

//         </tbody>
//       </table>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ActionMenu from "./ActionMenu";

import { TABLE_HEADERS } from "../../../constants/subscriptionConstants";

export default function SubscriptionTable({ filtered }) {

  const [subscriptions, setSubscriptions] =
    useState(filtered);

  useEffect(() => {
    setSubscriptions(filtered);
  }, [filtered]);

  const handleDelete = (id) => {
    setSubscriptions((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="hidden md:block overflow-visible">

      <table className="w-full">

        <thead>
          <tr className="border-b border-gray-100">
            {TABLE_HEADERS.map((h) => (
              <th
                key={h}
                className="text-center px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>

          {subscriptions.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="text-center py-10 text-gray-400 text-sm"
              >
                No records found
              </td>
            </tr>
          ) : (
            subscriptions.map((row, i) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-gray-50 hover:bg-yellow-50 transition-colors"
              >
                <td className="text-center px-4 py-3 text-sm font-semibold text-gray-800">
                  {row.name}
                </td>

                <td className="text-center px-4 py-3 text-sm text-gray-600">
                  {row.plan}
                </td>

                <td className="text-center px-4 py-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      row.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>

                <td className="text-center px-4 py-3 text-sm text-gray-600">
                  {row.expire}
                </td>

                <td className="text-center px-4 py-3 text-sm text-gray-600">
                  {row.renew}
                </td>

                <td className="text-center px-4 py-3">
                  <ActionMenu
                    row={row}
                    onDelete={handleDelete}
                  />
                </td>
              </motion.tr>
            ))
          )}

        </tbody>
      </table>
    </div>
  );
}