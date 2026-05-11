

// import { useState } from "react";

// // ─── DATA ─────────────────────────────────────────────────────────────────────

// const stats = [
//   { label: "Subscription",      value: "2,438", sub: "↑ 128 this Week", badge: "42.4%", badgeType: "up"   },
//   { label: "Renewals",          value: "412",   sub: "↓ 23 this week",  badge: "more",  badgeType: "down" },
//   { label: "Customer Activity", value: "57",    sub: "Next 30 days",    badge: "more",  badgeType: "down" },
//   { label: "Retention",         value: "9,860", sub: "this Month",      badge: "42.4%", badgeType: "up"   },
// ];

// const initialCustomers = [
//   { id: "#C-001", name: "Rahul", company: "Admin",       plan: "Basic",      planColor: "bg-yellow-100 text-yellow-700", phone: "+91 98765 43210", email: "rahul@admin.com",    date: "02/05/26", active: true,  members: 18 },
//   { id: "#C-002", name: "Priya", company: "ConsTech Ltd", plan: "Pro",        planColor: "bg-blue-100 text-blue-700",    phone: "+91 91234 56789", email: "priya@constech.in",  date: "20/04/26", active: false, members: 5  },
//   { id: "#C-003", name: "Arjun", company: "BuildCo",      plan: "Enterprise", planColor: "bg-purple-100 text-purple-700", phone: "+91 99887 76655", email: "arjun@buildco.com", date: "15/03/26", active: true,  members: 32 },
// ];

// // ─── ICONS ────────────────────────────────────────────────────────────────────

// const DocIcon = () => (
//   <svg width="18" height="18" fill="none" stroke="#9ca3af" strokeWidth="1.5" viewBox="0 0 24 24">
//     <rect x="3" y="3" width="18" height="18" rx="2" />
//     <path d="M9 9h6M9 12h6M9 15h4" />
//   </svg>
// );

// // ─── TOGGLE ───────────────────────────────────────────────────────────────────

// function Toggle({active, onToggle}) {
//   return (
//     <button
//       onClick={onToggle}
//       className={`w-12 h-6 rounded-full p-1 flex items-center transition duration-200 ${
//         active ? "bg-green-500" : "bg-gray-300"
//       }`}
//     >
//       <div
//         className={`w-4 h-4 bg-white rounded-full shadow-md transform transition duration-200 ${
//           active ? "translate-x-6" : ""
//         }`}
//       />
//     </button>
//   );
// }

// // ─── ANIMATION STYLES ─────────────────────────────────────────────────────────

// const animStyles = `
//   @keyframes fadeUp {
//     from { opacity: 0; transform: translateY(16px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes slideInLeft {
//     from { opacity: 0; transform: translateX(-12px); }
//     to   { opacity: 1; transform: translateX(0); }
//   }
//   .anim-fadeUp  { animation: fadeUp       0.45s ease both; }
//   .anim-slideIn { animation: slideInLeft  0.4s  ease both; }
// `;

// // ─── PAGE ─────────────────────────────────────────────────────────────────────

// export default function CustomerPage() {
//   const tabs = ["All", "Active", "Inactive"];
//   const [activeTab, setActiveTab]   = useState("All");
//   const [customers, setCustomers]   = useState(initialCustomers);

//   const handleToggle = (id) => {
//     setCustomers((prev) =>
//       prev.map((item) => item.id === id ? { ...item, active: !item.active } : item)
//     );
//   };

//   // ── Derived filtered list ──────────────────────────────────────────────────
//   const filteredCustomers = customers.filter((c) => {
//     if (activeTab === "Active")   return c.active === true;
//     if (activeTab === "Inactive") return c.active === false;
//     return true; // "All"
//   });

//   const emptyMessage = `No ${activeTab.toLowerCase()} customers found`;

//   return (
//     <>
//       <style>{animStyles}</style>

//       <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">

//         {/* Header */}
//         <div className="anim-fadeUp flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Customer</h1>
//           <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-yellow-400 text-yellow-500 text-sm font-semibold hover:bg-yellow-50 transition-colors w-fit">
//             <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path d="M12 16v-8m0 8l-3-3m3 3l3-3M3 21h18" />
//             </svg>
//             Export
//           </button>
//         </div>

//         {/* Stat Cards */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//           {stats.map((s, i) => (
//             <div
//               key={s.label}
//               className="anim-fadeUp bg-white rounded-2xl p-4 md:p-5 border border-gray-100 hover:shadow-md hover:shadow-yellow-100 hover:-translate-y-0.5 transition-all duration-200"
//               style={{ animationDelay: `${80 + i * 80}ms` }}
//             >
//               <div className="flex justify-between items-start mb-3">
//                 <span className="text-xs md:text-sm text-gray-500 font-medium">{s.label}</span>
//                 <DocIcon />
//               </div>
//               <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{s.value}</div>
//               <div className="flex items-center justify-between">
//                 <span className="text-xs text-gray-400">{s.sub}</span>
//                 <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
//                   s.badgeType === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
//                 }`}>
//                   {s.badge}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Table Card */}
//         <div
//           className="anim-fadeUp bg-white rounded-2xl border border-gray-100 overflow-hidden"
//           style={{ animationDelay: "400ms" }}
//         >
//           {/* Toolbar */}
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 md:px-6 pt-5 pb-3 border-b border-gray-100">
//             {/* Tabs */}
//             <div className="flex gap-6">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`pb-2 text-sm transition-all duration-200 border-b-2 ${
//                     activeTab === tab
//                       ? "border-yellow-400 text-yellow-500 font-semibold"
//                       : "border-transparent text-gray-500 hover:text-gray-800"
//                   }`}
//                 >
//                   {tab}
//                   {/* Count badge on each tab */}
//                   <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs font-bold ${
//                     activeTab === tab ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-400"
//                   }`}>
//                     {tab === "All"      ? customers.length                           : null}
//                     {tab === "Active"   ? customers.filter((c) => c.active).length   : null}
//                     {tab === "Inactive" ? customers.filter((c) => !c.active).length  : null}
//                   </span>
//                 </button>
//               ))}
//             </div>

//             <div className="flex items-center gap-2">
//               <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
//                 <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path d="M3 6h18M7 12h10M10 18h4" />
//                 </svg>
//                 Filters
//               </button>
//               <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-yellow-400 text-white text-sm font-semibold hover:bg-yellow-500 active:scale-95 transition-all duration-150">
//                 + Add Customer
//               </button>
//             </div>
//           </div>

//           {/* ── Desktop Table ── */}
//           <div className="hidden md:block overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="text-gray-400 text-xs uppercase tracking-wide border-b border-gray-100">
//                   {["Customer ID", "Customer Name", "Company", "Plan", "Phone", "Email", "Date", "Active", "Member", "Action"].map((h) => (
//                     <th key={h} className="px-4 py-3 text-left font-semibold first:pl-6">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredCustomers.length === 0 ? (
//                   <tr>
//                     <td colSpan={10} className="text-center py-14 text-gray-400 text-sm">
//                       {emptyMessage}
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredCustomers.map((c, i) => (
//                     <tr
//                       key={c.id}
//                       className="anim-slideIn border-b border-gray-50 hover:bg-yellow-50 transition-colors"
//                       style={{ animationDelay: `${i * 50}ms` }}
//                     >
//                       <td className="pl-6 pr-4 py-4 text-gray-500 text-xs font-mono">{c.id}</td>
//                       <td className="px-4 py-4 font-semibold text-gray-800">{c.name}</td>
//                       <td className="px-4 py-4 text-gray-600">{c.company}</td>
//                       <td className="px-4 py-4">
//                         <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${c.planColor}`}>{c.plan}</span>
//                       </td>
//                       <td className="px-4 py-4 text-gray-600">{c.phone}</td>
//                       <td className="px-4 py-4 text-gray-600">{c.email}</td>
//                       <td className="px-4 py-4 text-gray-400 text-xs">{c.date}</td>
//                       <td className="px-4 py-4">
//                         <Toggle active={c.active} onToggle={() => handleToggle(c.id)} />
//                       </td>
//                       <td className="px-4 py-4 font-semibold text-gray-700">{c.members}</td>
//                       <td className="px-4 py-4">
//                         <button className="text-gray-400 hover:text-gray-700 text-xl leading-none transition-colors">⋮</button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* ── Mobile Cards ── */}
//           <div className="md:hidden divide-y divide-gray-100">
//             {filteredCustomers.length === 0 ? (
//               <p className="text-center py-12 text-gray-400 text-sm">{emptyMessage}</p>
//             ) : (
//               filteredCustomers.map((c, i) => (
//                 <div
//                   key={c.id}
//                   className="anim-fadeUp p-4"
//                   style={{ animationDelay: `${i * 60}ms` }}
//                 >
//                   <div className="flex justify-between items-start mb-2">
//                     <div>
//                       <div className="font-semibold text-gray-800">{c.name}</div>
//                       <div className="text-xs text-gray-400 mt-0.5">{c.id} · {c.company}</div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${c.planColor}`}>{c.plan}</span>
//                       <button className="text-gray-400 hover:text-gray-700 text-xl leading-none p-1">⋮</button>
//                     </div>
//                   </div>
//                   <div className="text-xs text-gray-500 mb-1">{c.email}</div>
//                   <div className="text-xs text-gray-400 mb-3">{c.phone}</div>
//                   <div className="flex justify-between items-center text-xs text-gray-500">
//                     <span>{c.date}</span>
//                     <div className="flex items-center gap-2">
//                       <span className="font-medium text-gray-700">{c.members} members</span>
//                       <Toggle active={c.active} onToggle={() => handleToggle(c.id)} />
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>

//       </div>
//     </>
//   );
// }

import { useState } from "react";

import "../styles/customerAnimations.css";

import { initialCustomers } from "../data/customerData";

import CustomerHeader from "../components/customer/CustomerHeader";
import CustomerStats from "../components/customer/CustomerStats";
import CustomerToolbar from "../components/customer/CustomerToolbar";
import CustomerTable from "../components/customer/CustomerTable";
import CustomerMobileCards from "../components/customer/CustomerMobileCards";

export default function CustomerPage() {
  const tabs = ["All", "Active", "Inactive"];

  const [activeTab, setActiveTab] = useState("All");

  const [customers, setCustomers] = useState(initialCustomers);

  const handleToggle = (id) => {
    setCustomers((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, active: !item.active }
          : item
      )
    );
  };

  const filteredCustomers = customers.filter((c) => {
    if (activeTab === "Active") return c.active === true;

    if (activeTab === "Inactive") return c.active === false;

    return true;
  });

  const emptyMessage = `No ${activeTab.toLowerCase()} customers found`;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <CustomerHeader />

      <CustomerStats />

      <div className="anim-fadeUp bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <CustomerToolbar
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          customers={customers}
        />

        <CustomerTable
          filteredCustomers={filteredCustomers}
          handleToggle={handleToggle}
          emptyMessage={emptyMessage}
        />

        <CustomerMobileCards
          filteredCustomers={filteredCustomers}
          handleToggle={handleToggle}
          emptyMessage={emptyMessage}
        />
      </div>
    </div>
  );
}