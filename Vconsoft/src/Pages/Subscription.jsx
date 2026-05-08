// import { useState } from "react";
// import { motion } from "framer-motion";
// const SearchIcon = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
//   </svg>
// );

// const CardIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
//   </svg>
// );

// const BellIcon = () => (
//   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
//     <path d="M13.73 21a2 2 0 0 1-3.46 0" />
//   </svg>
// );

// const PlusIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
//     <path d="M12 5v14M5 12h14" />
//   </svg>
// );

// const FilterIcon = () => (
//   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <line x1="4" y1="6" x2="20" y2="6" />
//     <line x1="4" y1="12" x2="20" y2="12" />
//     <line x1="4" y1="18" x2="20" y2="18" />
//     <circle cx="8" cy="6" r="2" fill="currentColor" />
//     <circle cx="16" cy="12" r="2" fill="currentColor" />
//     <circle cx="10" cy="18" r="2" fill="currentColor" />
//   </svg>
// );

// const statCards = [
//   { label: "Plan Active", value: "2,438", sub: "↑ 128 this Week", badge: "↑ 42.4%", badgeType: "green" },
//   { label: "Expiring Soon", value: "412", sub: "-23 this week", badge: "↑ 42.4%", badgeType: "green" },
//   { label: "Renew Plan", value: "57", sub: "Next 30 days", badge: "↓ more", badgeType: "red" },
//   { label: "Notify Customers", value: "9,860", sub: "this Month", badge: "↑ 42.4%", badgeType: "green" },
// ];

// const subscriptions = [
//   { name: "Rahul", plan: "Basic", status: "Active", expire: "02/05/26", renew: "20/04/26" },
// ];

// export default function SubscriptionPage() {
//   const [search, setSearch] = useState("");
//   const [tableSearch, setTableSearch] = useState("");

//   const filtered = subscriptions.filter(
//     (s) =>
//       s.name.toLowerCase().includes(tableSearch.toLowerCase()) ||
//       s.plan.toLowerCase().includes(tableSearch.toLowerCase())
//   );

//   return (
//     <div className="flex flex-col h-screen overflow-hidden bg-gray-100">

//       {/* ── Topbar ── */}
//       {/* <header className="bg-white border-b border-gray-100 flex items-center gap-3 px-4 md:px-6 py-2.5 flex-shrink-0">
//         <div className="relative flex-1 max-w-2xl">
//           <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//             <SearchIcon />
//           </span>
//           <input
//             type="text"
//             placeholder="Search"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 outline-none focus:border-yellow-400 transition-colors"
//           />
//         </div>

//         <div className="flex items-center gap-3 ml-auto">
//           <button
//             style={{ background: "#f5c518" }}
//             className="flex items-center gap-2 text-gray-800 font-bold text-sm px-4 py-2 rounded-lg"
//           >
//             <PlusIcon />
//             <span className="hidden sm:inline">Quick Add</span>
//           </button>
//           <button className="p-1.5 text-gray-500 hover:text-gray-700 transition-colors">
//             <BellIcon />
//           </button>
//           <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm cursor-pointer">
//             👤
//           </div>
//         </div>
//       </header> */}

//       {/* ── Content ── */}

//       {/* <main className="flex-1 overflow-auto p-4 md:p-6"> */}
//       <main className="flex-1 overflow-auto p-4 md:p-6 animate-fadeIn">
//         <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-5">Subscription</h1>

//         {/* Stat Cards */}
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4-cols-4 gap-4 mb-6">
//           {statCards.map((card, i) => (
//            <motion.div
//   key={card.label}
//   initial={{ opacity: 0, y: 40 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.4, delay: i * 0.1 }}
//   whileHover={{ scale: 1.04 }}
//   className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm"
// >
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-xs text-gray-500 font-medium">{card.label}</span>
//                 <span className="text-gray-300"><CardIcon /></span>
//               </div>

//               <div className="text-2xl font-extrabold text-gray-900 mb-2">
//                 {card.value}
//               </div>

//               <div className="flex items-center justify-between">
//                 <span className="text-xs text-gray-400">{card.sub}</span>

//                 <span
//                   className={`text-xs font-bold px-2 py-0.5 rounded-full ${card.badgeType === "green"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-red-100 text-red-600"
//                     }`}
//                 >
//                   {card.badge}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Table Section */}
//         <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">

//           {/* Toolbar */}
//           {/* <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100"> */}
//           <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-4 py-3 border-b border-gray-100">
//             <div className="relative flex-1">
//               <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">
//                 <SearchIcon />
//               </span>
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={tableSearch}
//                 onChange={(e) => setTableSearch(e.target.value)}
//                 className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 outline-none focus:border-yellow-400 transition-colors"
//               />
//             </div>
//             <button
//               style={{ background: "#f5c518" }}
//               className="active:scale-95 transition-transform whitespace-nowrap duration-150 flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-lg whitespace-nowrap text-gray-800"
//             >
//               <PlusIcon /> Add Lead
//             </button>
//             <button className="flex items-center whitespace-nowrap gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 whitespace-nowrap hover:bg-gray-50 active:scale-95 transition-transform duration-150">
//               <FilterIcon />
//               <span className="hidden sm:inline">Filters</span>
//             </button>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[700px]">
//               <thead>
//           {filtered.map((row, i) => (
//   <motion.tr
//     key={i}
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: i * 0.05 }}
//     className="border-b border-gray-50 hover:bg-yellow-50 transition"
//   >
//     <td className="text-center px-4 py-3 text-sm text-gray-700">
//       {row.name}
//     </td>

//     <td className="text-center px-4 py-3 text-sm text-gray-700">
//       {row.plan}
//     </td>

//     <td className="text-center px-4 py-3">
//       <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
//         {row.status}
//       </span>
//     </td>

//     <td className="text-center px-4 py-3 text-sm text-gray-700">
//       {row.expire}
//     </td>

//     <td className="text-center px-4 py-3 text-sm text-gray-700">
//       {row.renew}
//     </td>

//     <td className="text-center px-4 py-3">
//       <button className="text-gray-400 hover:text-gray-700 text-lg">
//         ⋮
//       </button>
//     </td>
//   </motion.tr>
// ))}
//               </thead>
//               <tbody>
//                 {filtered.length === 0 ? (
//                   <tr className="border-b border-gray-50 hover:bg-yellow-50 
// transition-all duration-200 hover:scale-[1.01]">
//                     <td colSpan={6} className="text-center py-10 text-gray-400 text-sm">
//                       No records found
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((row, i) => (
//                     <tr key={i} className="border-b border-gray-50 hover:bg-yellow-50 
// transition-all duration-200 hover:scale-[1.01]">
//                       <td className="text-center px-4 py-3 text-sm text-gray-700">{row.name}</td>
//                       <td className="text-center px-4 py-3 text-sm text-gray-700">{row.plan}</td>
//                       <td className="text-center px-4 py-3">
//                         <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
//                           {row.status}
//                         </span>
//                       </td>
//                       <td className="text-center px-4 py-3 text-sm text-gray-700">{row.expire}</td>
//                       <td className="text-center px-4 py-3 text-sm text-gray-700">{row.renew}</td>
//                       <td className="text-center px-4 py-3">
//                         <button className="whitespace-nowrap active:scale-95 transition-transform duration-150 text-gray-400 hover:text-gray-700 font-bold text-lg leading-none">
//                           ⋮
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";

const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
);

const CardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
  </svg>
);

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const FilterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
    <circle cx="8" cy="6" r="2" fill="currentColor" />
    <circle cx="16" cy="12" r="2" fill="currentColor" />
    <circle cx="10" cy="18" r="2" fill="currentColor" />
  </svg>
);

const statCards = [
  { label: "Plan Active",       value: "2,438", sub: "↑ 128 this Week", badge: "↑ 42.4%", badgeType: "green" },
  { label: "Expiring Soon",     value: "412",   sub: "-23 this week",   badge: "↑ 42.4%", badgeType: "green" },
  { label: "Renew Plan",        value: "57",    sub: "Next 30 days",    badge: "↓ more",   badgeType: "red"   },
  { label: "Notify Customers",  value: "9,860", sub: "this Month",      badge: "↑ 42.4%", badgeType: "green" },
];

const subscriptions = [
  { name: "Rahul",  plan: "Basic",      status: "Active",   expire: "02/05/26", renew: "20/04/26" },
  { name: "Priya",  plan: "Pro",        status: "Active",   expire: "15/06/26", renew: "10/05/26" },
  { name: "Arjun",  plan: "Enterprise", status: "Expiring", expire: "01/06/26", renew: "25/04/26" },
  { name: "Sneha",  plan: "Basic",      status: "Active",   expire: "20/07/26", renew: "15/06/26" },
  { name: "Vikram", plan: "Pro",        status: "Expiring", expire: "10/05/26", renew: "05/04/26" },
];

const TABLE_HEADERS = ["Name", "Plan", "Status", "Expires", "Renews", ""];

export default function SubscriptionPage() {
  const [tableSearch, setTableSearch] = useState("");

  const filtered = subscriptions.filter(
    (s) =>
      s.name.toLowerCase().includes(tableSearch.toLowerCase()) ||
      s.plan.toLowerCase().includes(tableSearch.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 p-4 md:p-6">

        {/* ── Page Title ── */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-5"
        >
          Subscription
        </motion.h1>

        {/* ── Stat Cards — ✅ fixed grid class ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
          {statCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl border border-gray-100 p-3 md:p-4 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 font-medium leading-tight">{card.label}</span>
                <span className="text-gray-300 hidden sm:block"><CardIcon /></span>
              </div>
              <div className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">{card.value}</div>
              <div className="flex items-center justify-between gap-1 flex-wrap">
                <span className="text-xs text-gray-400">{card.sub}</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  card.badgeType === "green" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
                }`}>
                  {card.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Table Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="bg-white rounded-xl border border-gray-100 overflow-hidden"
        >
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 px-4 py-3 border-b border-gray-100">
            <div className="relative flex-1">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search by name or plan…"
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
            <div className="flex gap-2 sm:flex-shrink-0">
              <button
                style={{ background: "#f5c518" }}
                className="flex-1 sm:flex-none active:scale-95 transition-transform duration-150 flex items-center justify-center gap-1.5 text-sm font-bold px-4 py-2 rounded-lg text-gray-800"
              >
                <PlusIcon /> <span>Add Lead</span>
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 active:scale-95 transition-transform duration-150">
                <FilterIcon /> <span>Filters</span>
              </button>
            </div>
          </div>

          {/* ── Desktop Table (md+) ── */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {TABLE_HEADERS.map((h) => (
                    <th key={h} className="text-center px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-10 text-gray-400 text-sm">
                      No records found
                    </td>
                  </tr>
                ) : (
                  filtered.map((row, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-gray-50 hover:bg-yellow-50 transition-colors"
                    >
                      <td className="text-center px-4 py-3 text-sm font-semibold text-gray-800">{row.name}</td>
                      <td className="text-center px-4 py-3 text-sm text-gray-600">{row.plan}</td>
                      <td className="text-center px-4 py-3">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          row.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="text-center px-4 py-3 text-sm text-gray-600">{row.expire}</td>
                      <td className="text-center px-4 py-3 text-sm text-gray-600">{row.renew}</td>
                      <td className="text-center px-4 py-3">
                        <button className="text-gray-400 hover:text-gray-700 font-bold text-lg leading-none active:scale-95 transition-transform duration-150">
                          ⋮
                        </button>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* ── Mobile Cards (< md) ── */}
          <div className="md:hidden divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <p className="text-center py-10 text-gray-400 text-sm">No records found</p>
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
                      <p className="font-semibold text-gray-800 text-sm">{row.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{row.plan}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        row.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {row.status}
                      </span>
                      <button className="text-gray-400 hover:text-gray-700 font-bold text-lg leading-none">⋮</button>
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs text-gray-500 mt-2">
                    <div>
                      <span className="text-gray-400 block mb-0.5">Expires</span>
                      <span className="font-medium text-gray-700">{row.expire}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block mb-0.5">Renews</span>
                      <span className="font-medium text-gray-700">{row.renew}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

      </main>
    </div>
  );
}