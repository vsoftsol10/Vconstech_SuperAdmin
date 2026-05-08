// import { useState } from "react";

// // ─── DATA ────────────────────────────────────────────────────────────────────

// const stats = [
//   {
//     label: "Total Leads",
//     value: "2,438",
//     sub: "↑ 128 this Week",
//     badge: "42.4%",
//     badgeType: "up",
//   },
//   {
//     label: "Qualified Leads",
//     value: "1,328",
//     sub: "↓ 23 this week",
//     badge: "42.4%",
//     badgeType: "up",
//   },
//   {
//     label: "Conversion Rate",
//     value: "24.6%",
//     sub: "from last month",
//     badge: "42.4%",
//     badgeType: "up",
//   },
// ];

// const STAGES = ["New Lead", "Contacted", "Qualified", "Proposal", "Won"];

// const leads = [
//   {
//     id: 1,
//     name: "Marcus Tate",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: null,
//     stage: "New Lead",
//     column: "New",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
//   },
//   {
//     id: 2,
//     name: "Marcus Tate",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: null,
//     stage: "New Lead",
//     column: "New",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sandy",
//   },
//    {
//     id: 3,
//     name: "Marcus",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: null,
//     stage: "New Lead",
//     column: "New",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sandy",
//   },
//   {
//     id: 4,
//     name: "Marcus Tate",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: null,
//     stage: "Contacted",
//     column: "Contacted",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tate",
//   },
//   {
//     id: 5,
//     name: "Marcus Tate",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: null,
//     stage: "Contacted",
//     column: "Contacted",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
//   },
//    {
//     id: 6,
//     name: "Marcus Tate",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: null,
//     stage: "Contacted",
//     column: "Contacted",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tate",
//   },
//   {
//     id: 7,
//     name: "Marcus Tate",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: "Basic Plan",
//     stage: "Qualified",
//     column: "Qualified",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice",
//   },
//   {
//     id: 8,
//     name: "Marcus Tate",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: "Basic Plan",
//     stage: "Qualified",
//     column: "Qualified",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice",
//   },
//   {
//     id: 9,
//     name: "Marcus Tate",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: "Basic Plan",
//     stage: "Qualified",
//     column: "Qualified",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bob",
//   },
//   {
//     id: 10,
//     name: "Marcus Tate",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: "Pro Plan",
//     stage: "Proposal",
//     column: "Proposal",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=eve",
//   },
//   {
//     id: 11,
//     name: "Marcus Tate",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: "Pro Plan",
//     stage: "Proposal",
//     column: "Proposal",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=eve",
//   },
//   {
//     id: 12,
//     name: "Marcus Tate",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: "Pro Plan",
//     stage: "Proposal",
//     column: "Proposal",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dave",
//   },
//   {
//     id: 13,
//     name: "Marcus Tate",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: "Enterprise",
//     stage: "Won",
//     column: "Won",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carol",
//   },
//   {
//     id: 14,
//     name: "Marcus Tate",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: "Enterprise",
//     stage: "Won",
//     column: "Won",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carol",
//   },
//   {
//     id: 15,
//     name: "Marcus Tate",
//     company: "Construction",
//     email: "Sandy@gmail.com",
//     phone: "6248763864",
//     plan: "Enterprise",
//     stage: "Won",
//     column: "Won",
//     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=frank",
//   },
// ];

// const COLUMNS = ["New", "Contacted", "Qualified", "Proposal", "Won"];

// const columnStyles = {
//   New: {
//     badge: "bg-yellow-400 text-white",
//     activeDot: "bg-yellow-400",
//     activeLine: "bg-yellow-400",
//     activeText: "text-yellow-500",
//   },
//   Contacted: {
//     badge: "bg-white text-gray-700 border border-gray-300",
//     activeDot: "bg-green-500",
//     activeLine: "bg-green-500",
//     activeText: "text-green-600",
//   },
//   Qualified: {
//     badge: "bg-white text-gray-700 border border-gray-300",
//     activeDot: "bg-green-500",
//     activeLine: "bg-green-500",
//     activeText: "text-green-600",
//   },
//   Proposal: {
//     badge: "bg-blue-100 text-blue-700 border border-blue-200",
//     activeDot: "bg-blue-500",
//     activeLine: "bg-blue-500",
//     activeText: "text-blue-600",
//   },
//   Won: {
//     badge: "bg-green-100 text-green-700 border border-green-200",
//     activeDot: "bg-green-600",
//     activeLine: "bg-green-600",
//     activeText: "text-green-700",
//   },
// };

// // ─── SUB COMPONENTS ──────────────────────────────────────────────────────────

// const UserIcon = () => (
//   <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#EAB308" strokeWidth="2">
//     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//     <circle cx="12" cy="7" r="4" />
//   </svg>
// );

// const MailIcon = () => (
//   <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//     <rect x="2" y="4" width="20" height="16" rx="2" />
//     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//   </svg>
// );

// const PhoneIcon = () => (
//   <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.96 3.38 2 2 0 0 1 3.93 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//   </svg>
// );

// const PlanIcon = () => (
//   <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth="2">
//     <rect x="3" y="3" width="18" height="18" rx="2" />
//     <path d="M9 9h6M9 12h6M9 15h4" />
//   </svg>
// );

// // Progress stepper inside each lead card
// const Stepper = ({ currentStage, colStyle }) => {
//   const currentIdx = STAGES.indexOf(currentStage);
//   return (
//     <div className="mt-3 pt-3 border-t border-gray-100">
//       <div className="flex items-center w-full">
//         {STAGES.map((stage, i) => {
//           const isActive = i <= currentIdx;
//           const isLast = i === STAGES.length - 1;
//           return (
//             <div key={stage} className="flex items-center flex-1 last:flex-none">
//               {/* Dot */}
//               <div className="flex flex-col items-center gap-0.5">
//                 <div
//                   className={`w-3 h-3 rounded-full border-2 flex items-center justify-center
//                     ${isActive
//                       ? `${colStyle.activeDot} border-transparent`
//                       : "bg-white border-gray-300"
//                     }`}
//                 >
//                   {isActive && (
//                     <svg width="6" height="6" viewBox="0 0 8 8" fill="white">
//                       <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//                     </svg>
//                   )}
//                 </div>
//                 <span
//                   className={`text-[8px] whitespace-nowrap font-medium
//                     ${isActive ? colStyle.activeText : "text-gray-400"}`}
//                 >
//                   {stage}
//                 </span>
//               </div>
//               {/* Line */}
//               {!isLast && (
//                 <div
//                   className={`flex-1 h-px mx-0.5 mb-3
//                     ${i < currentIdx ? colStyle.activeLine : "bg-gray-200"}`}
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// // Individual lead card
// const LeadCard = ({ lead, colStyle }) => (
//   <div className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm hover:shadow-md hover:shadow-yellow-50 transition-shadow">
//     {/* Top: avatar + info */}
//     <div className="flex items-start gap-2.5">
//       <img
//         src={lead.avatar}
//         alt={lead.name}
//         className="w-10 h-10 rounded-full border border-gray-200 flex-shrink-0 bg-gray-100"
//       />
//       <div className="flex-1 min-w-0">
//         <div className="font-semibold text-gray-900 text-sm leading-tight">{lead.name}</div>
//         <div className="text-xs text-gray-500 mb-1.5">{lead.company}</div>
//         <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
//           <span className="text-teal-500"><MailIcon /></span>
//           <span className="truncate">{lead.email}</span>
//         </div>
//         <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
//           <span className="text-teal-500"><PhoneIcon /></span>
//           <span>{lead.phone}</span>
//         </div>
//         {lead.plan && (
//           <div className="flex items-center gap-1.5 text-xs text-purple-500 mt-0.5">
//             <PlanIcon />
//             <span>{lead.plan}</span>
//           </div>
//         )}
//       </div>
//     </div>
//     <Stepper currentStage={lead.stage} colStyle={colStyle} />
//   </div>
// );

// // ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

// export default function LeadPage() {
//   const [activeCol, setActiveCol] = useState("New");

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-8">

//       {/* Page Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Lead</h1>
//       </div>

//       {/* Stat Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
//         {stats.map((s) => (
//           <div
//             key={s.label}
//             className="bg-white rounded-2xl p-4 md:p-5 border border-gray-100 hover:shadow-md hover:shadow-yellow-50 transition-shadow"
//           >
//             <div className="flex justify-between items-start mb-3">
//               <span className="text-sm text-gray-500 font-medium">{s.label}</span>
//               <UserIcon />
//             </div>
//             <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{s.value}</div>
//             <div className="flex items-center justify-between">
//               <span className="text-xs text-gray-400">{s.sub}</span>
//               <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">
//                 {s.badge}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ── Toolbar: Add Lead + Filters (right aligned) ── */}
//       <div className="flex items-center justify-end gap-2 mb-5">
//         <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors active:scale-95">
//           + Add Lead
//         </button>
//         <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
//           <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path d="M3 6h18M7 12h10M10 18h4" />
//           </svg>
//           Filters
//         </button>
//       </div>

//       {/* ── Column Filter Tabs — centered, all screen sizes ── */}
//       <div className="flex justify-center mb-6">
//         <div className="flex gap-2 overflow-x-auto pb-1 px-1">
//           {COLUMNS.map((col) => {
//             const isActive = activeCol === col;
//             const style = columnStyles[col];
//             return (
//               <button
//                 key={col}
//                 onClick={() => setActiveCol(col)}
//                 className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold
//                   whitespace-nowrap border transition-all duration-200
//                   ${isActive
//                     ? `${style.badge} shadow-sm scale-105`
//                     : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700"
//                   }`}
//               >
//                 {col}
//                 <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold
//                   ${isActive ? "bg-black/10" : "bg-gray-100 text-gray-400"}`}>
//                   {leads.filter((l) => l.column === col).length}
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* ── Cards Grid: 1 col on mobile → 2 col on sm → 3 col on lg ── */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {leads
//           .filter((l) => l.column === activeCol)
//           .map((lead) => (
//             <LeadCard key={lead.id} lead={lead} colStyle={columnStyles[activeCol]} />
//           ))}
//       </div>

//     </div>
//   );
// }
import { useState } from "react";

// ─── ANIMATION STYLES ────────────────────────────────────────────────────────

const animStyles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-10px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes popIn {
    from { opacity: 0; transform: scale(0.92); }
    to   { opacity: 1; transform: scale(1); }
  }
  .anim-fadeUp  { animation: fadeUp  0.45s ease both; }
  .anim-fadeIn  { animation: fadeIn  0.4s ease both; }
  .anim-slideIn { animation: slideInLeft 0.4s ease both; }
  .anim-popIn   { animation: popIn   0.35s cubic-bezier(0.34,1.56,0.64,1) both; }
`;

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { label: "Total Leads", value: "2,438", sub: "↑ 128 this Week", badge: "42.4%", badgeType: "up" },
  { label: "Qualified Leads", value: "1,328", sub: "↓ 23 this week", badge: "42.4%", badgeType: "up" },
  { label: "Conversion Rate", value: "24.6%", sub: "from last month", badge: "42.4%", badgeType: "up" },
];

const STAGES = ["New Lead", "Contacted", "Qualified", "Proposal", "Won"];

const leads = [
  { id: 1, name: "Marcus Tate", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: null, stage: "New Lead", column: "New", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus" },
  { id: 2, name: "Marcus Tate", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: null, stage: "New Lead", column: "New", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sandy" },
  { id: 3, name: "Marcus", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: null, stage: "New Lead", column: "New", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sandy" },
  { id: 4, name: "Marcus Tate", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: null, stage: "Contacted", column: "Contacted", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tate" },
  { id: 5, name: "Marcus Tate", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: null, stage: "Contacted", column: "Contacted", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john" },
  { id: 6, name: "Marcus Tate", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: null, stage: "Contacted", column: "Contacted", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tate" },
  { id: 7, name: "Marcus Tate", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: "Basic Plan", stage: "Qualified", column: "Qualified", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice" },
  { id: 8, name: "Marcus Tate", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: "Basic Plan", stage: "Qualified", column: "Qualified", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice" },
  { id: 9, name: "Marcus Tate", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: "Basic Plan", stage: "Qualified", column: "Qualified", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bob" },
  { id: 10, name: "Marcus Tate", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: "Pro Plan", stage: "Proposal", column: "Proposal", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=eve" },
  { id: 11, name: "Marcus Tate", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: "Pro Plan", stage: "Proposal", column: "Proposal", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=eve" },
  { id: 12, name: "Marcus Tate", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: "Pro Plan", stage: "Proposal", column: "Proposal", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dave" },
  { id: 13, name: "Marcus Tate", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: "Enterprise", stage: "Won", column: "Won", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carol" },
  { id: 14, name: "Marcus Tate", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: "Enterprise", stage: "Won", column: "Won", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carol" },
  { id: 15, name: "Marcus Tate", company: "Construction", email: "Sandy@gmail.com", phone: "6248763864", plan: "Enterprise", stage: "Won", column: "Won", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=frank" },
];

const COLUMNS = ["New", "Contacted", "Qualified", "Proposal", "Won"];

const columnStyles = {
  New:       { badge: "bg-yellow-400 text-white", activeDot: "bg-yellow-400", activeLine: "bg-yellow-400", activeText: "text-yellow-500" },
  Contacted: { badge: "bg-white text-gray-700 border border-gray-300", activeDot: "bg-green-500", activeLine: "bg-green-500", activeText: "text-green-600" },
  Qualified: { badge: "bg-white text-gray-700 border border-gray-300", activeDot: "bg-green-500", activeLine: "bg-green-500", activeText: "text-green-600" },
  Proposal:  { badge: "bg-blue-100 text-blue-700 border border-blue-200", activeDot: "bg-blue-500", activeLine: "bg-blue-500", activeText: "text-blue-600" },
  Won:       { badge: "bg-green-100 text-green-700 border border-green-200", activeDot: "bg-green-600", activeLine: "bg-green-600", activeText: "text-green-700" },
};

// ─── SUB COMPONENTS ──────────────────────────────────────────────────────────

const UserIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#EAB308" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.96 3.38 2 2 0 0 1 3.93 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const PlanIcon = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#a855f7" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 9h6M9 12h6M9 15h4" />
  </svg>
);

const Stepper = ({ currentStage, colStyle }) => {
  const currentIdx = STAGES.indexOf(currentStage);
  return (
    <div className="mt-3 pt-3 border-t border-gray-100">
      <div className="flex items-center w-full">
        {STAGES.map((stage, i) => {
          const isActive = i <= currentIdx;
          const isLast = i === STAGES.length - 1;
          return (
            <div key={stage} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-0.5">
                <div
                  className={`w-3 h-3 rounded-full border-2 flex items-center justify-center
                    ${isActive ? `${colStyle.activeDot} border-transparent` : "bg-white border-gray-300"}`}
                  // ✅ Dot pops in with stagger
                  style={{ animation: `popIn 0.3s cubic-bezier(0.34,1.56,0.64,1) ${i * 60}ms both` }}
                >
                  {isActive && (
                    <svg width="6" height="6" viewBox="0 0 8 8" fill="white">
                      <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  )}
                </div>
                <span className={`text-[8px] whitespace-nowrap font-medium ${isActive ? colStyle.activeText : "text-gray-400"}`}>
                  {stage}
                </span>
              </div>
              {!isLast && (
                <div className={`flex-1 h-px mx-0.5 mb-3 ${i < currentIdx ? colStyle.activeLine : "bg-gray-200"}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ✅ animIndex for staggered card entrance
const LeadCard = ({ lead, colStyle, animIndex }) => (
  <div
    className="anim-fadeUp bg-white rounded-xl border border-gray-100 p-3 shadow-sm hover:shadow-md hover:shadow-yellow-50 hover:-translate-y-0.5 transition-all duration-200"
    style={{ animationDelay: `${animIndex * 60}ms` }}
  >
    <div className="flex items-start gap-2.5">
      {/* ✅ Avatar fades in slightly after card */}
      <img
        src={lead.avatar}
        alt={lead.name}
        className="w-10 h-10 rounded-full border border-gray-200 flex-shrink-0 bg-gray-100"
        style={{ animation: `fadeIn 0.4s ease ${80 + animIndex * 60}ms both` }}
      />
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-gray-900 text-sm leading-tight">{lead.name}</div>
        <div className="text-xs text-gray-500 mb-1.5">{lead.company}</div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
          <span className="text-teal-500"><MailIcon /></span>
          <span className="truncate">{lead.email}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
          <span className="text-teal-500"><PhoneIcon /></span>
          <span>{lead.phone}</span>
        </div>
        {lead.plan && (
          <div className="flex items-center gap-1.5 text-xs text-purple-500 mt-0.5">
            <PlanIcon />
            <span>{lead.plan}</span>
          </div>
        )}
      </div>
    </div>
    <Stepper currentStage={lead.stage} colStyle={colStyle} />
  </div>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function LeadPage() {
  const [activeCol, setActiveCol] = useState("New");

  return (
    <>
      {/* ✅ Inject keyframes */}
      <style>{animStyles}</style>

      <div className="min-h-screen bg-gray-50 p-4 md:p-8">

        {/* Header — ✅ fadeUp */}
        <div
          className="anim-fadeUp flex items-center justify-between mb-6"
          style={{ animationDelay: "0ms" }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Lead</h1>
        </div>

        {/* Stat Cards — ✅ staggered fadeUp */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="anim-fadeUp bg-white rounded-2xl p-4 md:p-5 border border-gray-100 hover:shadow-md hover:shadow-yellow-50 hover:-translate-y-0.5 transition-all duration-200"
              style={{ animationDelay: `${80 + i * 80}ms` }}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm text-gray-500 font-medium">{s.label}</span>
                <UserIcon />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{s.value}</div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{s.sub}</span>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                  {s.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Toolbar — ✅ fadeUp after cards */}
        <div
          className="anim-fadeUp flex items-center justify-end gap-2 mb-5"
          style={{ animationDelay: "320ms" }}
        >
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors active:scale-95">
            + Add Lead
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 6h18M7 12h10M10 18h4" />
            </svg>
            Filters
          </button>
        </div>

        {/* Column Filter Tabs — ✅ each pill pops in with stagger */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-2 overflow-x-auto pb-1 px-1">
            {COLUMNS.map((col, i) => {
              const isActive = activeCol === col;
              const style = columnStyles[col];
              return (
                <button
                  key={col}
                  onClick={() => setActiveCol(col)}
                  className={`anim-popIn flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold
                    whitespace-nowrap border transition-all duration-200
                    ${isActive
                      ? `${style.badge} shadow-sm scale-105`
                      : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  style={{ animationDelay: `${380 + i * 50}ms` }}
                >
                  {col}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold
                    ${isActive ? "bg-black/10" : "bg-gray-100 text-gray-400"}`}>
                    {leads.filter((l) => l.column === col).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid — ✅ staggered fadeUp per card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leads
            .filter((l) => l.column === activeCol)
            .map((lead, i) => (
              <LeadCard
                key={lead.id}
                lead={lead}
                colStyle={columnStyles[activeCol]}
                animIndex={i}   // ✅ passed for stagger delay
              />
            ))}
        </div>

      </div>
    </>
  );
}