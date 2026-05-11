// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const PLANS = ["Basic", "Pro", "Enterprise"];
// const STATUSES = ["Active", "Expiring"];

// const YELLOW = "#f5c518";

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
// const EditIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
//     <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
//   </svg>
// );
// const TrashIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <polyline points="3 6 5 6 21 6" />
//     <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
//     <path d="M10 11v6M14 11v6" />
//     <path d="M9 6V4h6v2" />
//   </svg>
// );
// const BellIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
//     <path d="M13.73 21a2 2 0 0 1-3.46 0" />
//   </svg>
// );
// const EmailIcon = () => (
//   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//     <rect x="2" y="4" width="20" height="16" rx="2" />
//     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//   </svg>
// );
// const WhatsAppIcon = () => (
//   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5 19.79 19.79 0 0 1 1.61 2.84 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.54-.54a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//   </svg>
// );
// const CheckCircleIcon = () => (
//   <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke={YELLOW} strokeWidth="1.5">
//     <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//     <polyline points="22 4 12 14.01 9 11.01" />
//   </svg>
// );
// const CloseIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M18 6 6 18M6 6l12 12" />
//   </svg>
// );

// const statCards = [
//   { label: "Plan Active",      value: "2,438", sub: "↑ 128 this Week",  badge: "↑ 42.4%", badgeType: "green" },
//   { label: "Cancelled Plans",  value: "412",   sub: "-23 this week",    badge: "↓ 42.4%", badgeType: "red"   },
//   { label: "Renewals Due",     value: "57",    sub: "Next 30 days",     badge: "↓ more",   badgeType: "red"   },
//   { label: "MRR",              value: "9,860", sub: "this Month",       badge: "↑ 42.4%", badgeType: "green" },
// ];

// const subscriptions = [
//   { name: "Rahul",  plan: "Basic",      status: "Active",   expire: "02/05/26", renew: "20/04/26" },
//   { name: "Priya",  plan: "Pro",        status: "Active",   expire: "15/06/26", renew: "10/05/26" },
//   { name: "Arjun",  plan: "Enterprise", status: "Expiring", expire: "01/06/26", renew: "25/04/26" },
//   { name: "Sneha",  plan: "Basic",      status: "Active",   expire: "20/07/26", renew: "15/06/26" },
//   { name: "Vikram", plan: "Pro",        status: "Expiring", expire: "10/05/26", renew: "05/04/26" },
// ];

// const TABLE_HEADERS = ["Name", "Plan", "Status", "Expires", "Renews", ""];
// const ChevronDown = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//     <path d="m6 9 6 6 6-6" />
//   </svg>
// );

// const EMPTY_FILTERS = { plans: [], statuses: [], expireFrom: "", expireTo: "" };

// function FilterPanel({ filters, onApply, onReset, onClose }) {
//   const ref = useRef(null);
//   const [local, setLocal] = useState(filters);

//   useEffect(() => {
//     const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose(); };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [onClose]);

//   const togglePlan = (p) => setLocal((prev) => ({
//     ...prev,
//     plans: prev.plans.includes(p) ? prev.plans.filter((x) => x !== p) : [...prev.plans, p],
//   }));
//   const toggleStatus = (s) => setLocal((prev) => ({
//     ...prev,
//     statuses: prev.statuses.includes(s) ? prev.statuses.filter((x) => x !== s) : [...prev.statuses, s],
//   }));

//   const hasDate = local.expireFrom || local.expireTo;
//   const activeCount = local.plans.length + local.statuses.length + (hasDate ? 1 : 0);

//   const dateInputStyle = {
//     width: "100%", padding: "7px 10px", fontSize: "12px",
//     border: "1px solid #e5e7eb", borderRadius: "10px",
//     background: "#f9fafb", outline: "none", color: "#374151",
//     fontFamily: "inherit", cursor: "pointer",
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, scale: 0.93, y: -8 }}
//       animate={{ opacity: 1, scale: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.93, y: -8 }}
//       transition={{ duration: 0.18, ease: "easeOut" }}
//       className="absolute right-0 top-12 z-50 bg-white border border-gray-100 rounded-2xl p-4 w-80"
//       style={{ boxShadow: "0 12px 32px rgba(0,0,0,0.12)" }}
//     >
//       <div className="flex items-center justify-between mb-3">
//         <span className="text-sm font-bold text-gray-900">Filters</span>
//         {activeCount > 0 && (
//           <button onClick={() => { setLocal(EMPTY_FILTERS); onReset(); }} className="text-xs text-red-500 font-semibold hover:underline">Clear all</button>
//         )}
//       </div>

//       {/* Plan */}
//       <div className="mb-4">
//         <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Plan</p>
//         <div className="flex flex-wrap gap-2">
//           {["Basic", "Pro", "Enterprise"].map((p) => {
//             const on = local.plans.includes(p);
//             return (
//               <button key={p} onClick={() => togglePlan(p)}
//                 className="px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-150"
//                 style={on ? { background: YELLOW, borderColor: YELLOW, color: "#1f2937" } : { background: "#f9fafb", borderColor: "#e5e7eb", color: "#6b7280" }}>
//                 {p}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* Status */}
//       <div className="mb-4">
//         <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Status</p>
//         <div className="flex gap-2">
//           {["Active", "Expiring"].map((s) => {
//             const on = local.statuses.includes(s);
//             return (
//               <button key={s} onClick={() => toggleStatus(s)}
//                 className="px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-150"
//                 style={on ? { background: YELLOW, borderColor: YELLOW, color: "#1f2937" } : { background: "#f9fafb", borderColor: "#e5e7eb", color: "#6b7280" }}>
//                 {s}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* Expire Date Range */}
//       <div className="mb-5">
//         <div className="flex items-center justify-between mb-2">
//           <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Expiry Date</p>
//           {hasDate && (
//             <button onClick={() => setLocal((f) => ({ ...f, expireFrom: "", expireTo: "" }))}
//               className="text-xs text-gray-400 hover:text-red-400 transition-colors">Reset</button>
//           )}
//         </div>
//         <div className="grid grid-cols-2 gap-2">
//           <div>
//             <label className="text-xs text-gray-400 mb-1 block">From</label>
//             <input type="date" value={local.expireFrom}
//               onChange={(e) => setLocal((f) => ({ ...f, expireFrom: e.target.value }))}
//               style={{ ...dateInputStyle, borderColor: local.expireFrom ? YELLOW : "#e5e7eb" }} />
//           </div>
//           <div>
//             <label className="text-xs text-gray-400 mb-1 block">To</label>
//             <input type="date" value={local.expireTo}
//               min={local.expireFrom || undefined}
//               onChange={(e) => setLocal((f) => ({ ...f, expireTo: e.target.value }))}
//               style={{ ...dateInputStyle, borderColor: local.expireTo ? YELLOW : "#e5e7eb" }} />
//           </div>
//         </div>
//         {/* Quick presets */}
//         <div className="flex flex-wrap gap-1.5 mt-2">
//           {[
//             { label: "This month", from: "2026-05-01", to: "2026-05-31" },
//             { label: "Next 30 days", from: "2026-05-09", to: "2026-06-08" },
//             { label: "Next 60 days", from: "2026-05-09", to: "2026-07-08" },
//           ].map((preset) => {
//             const active = local.expireFrom === preset.from && local.expireTo === preset.to;
//             return (
//               <button key={preset.label}
//                 onClick={() => setLocal((f) => ({ ...f, expireFrom: preset.from, expireTo: preset.to }))}
//                 className="px-2.5 py-1 rounded-full text-xs font-semibold border transition-all duration-150"
//                 style={active ? { background: YELLOW, borderColor: YELLOW, color: "#1f2937" } : { background: "#f9fafb", borderColor: "#e5e7eb", color: "#6b7280" }}>
//                 {preset.label}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       <div className="flex gap-2">
//         <button onClick={onClose} className="flex-1 py-2 rounded-lg border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors">Cancel</button>
//         <button onClick={() => { onApply(local); onClose(); }}
//           className="flex-1 py-2 rounded-lg text-xs font-bold text-gray-900 transition-colors"
//           style={{ background: YELLOW }}>
//           Apply Filters
//         </button>
//       </div>
//     </motion.div>
//   );
// }

// function DropdownMenu({ row, onClose, onNotification }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     const handler = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) onClose();
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [onClose]);

//   const items = [
//     { icon: <EditIcon />, label: "Edit", color: "text-gray-700" },
//     { icon: <TrashIcon />, label: "Delete", color: "text-red-500" },
//     { icon: <BellIcon />, label: "Notification", color: "text-gray-700" },
//   ];

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, scale: 0.88, y: -6 }}
//       animate={{ opacity: 1, scale: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.88, y: -6 }}
//       transition={{ duration: 0.15, ease: "easeOut" }}
//       className="absolute right-0 top-8 z-50 bg-white border border-gray-100 rounded-xl shadow-lg py-1 min-w-[148px]"
//       style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
//     >
//       {items.map((item) => (
//         <button
//           key={item.label}
//           onClick={() => {
//             if (item.label === "Notification") { onNotification(row); }
//             onClose();
//           }}
//           className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors ${item.color}`}
//         >
//           {item.icon}
//           {item.label}
//         </button>
//       ))}
//     </motion.div>
//   );
// }

// const stepVariants = {
//   enter: (dir) => ({ opacity: 0, x: dir * 32 }),
//   center: { opacity: 1, x: 0 },
//   exit: (dir) => ({ opacity: 0, x: -dir * 32 }),
// };

// function SendReminderModal({ row, onClose }) {
//   const [step, setStep] = useState(1);
//   const [channel, setChannel] = useState(null);
//   const [dir, setDir] = useState(1);
//   const [form, setForm] = useState({ to: "", subject: "", message: "" });

//   const goNext = () => { setDir(1); setStep((s) => s + 1); };
//   const goBack = () => { setDir(-1); setStep((s) => s - 1); };

//   const stepLabel = (n) => (n === 1 ? "Channel" : n === 2 ? "Compose" : "Sent");

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//     >
//       <div className="absolute inset-0 bg-black/40" onClick={step < 3 ? onClose : undefined} />

//       <motion.div
//         initial={{ opacity: 0, scale: 0.93, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.93, y: 20 }}
//         transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
//         className="relative bg-white rounded-2xl w-full max-w-xl mx-4 overflow-hidden"
//         style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.16)" }}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
//           <div className="flex items-center gap-3">
//             <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#FFF8DC" }}>
//               <BellIcon />
//             </div>
//             <div>
//               <p className="font-bold text-gray-900 text-sm">Send Reminder</p>
//               <p className="text-xs text-gray-400">To {row.name}</p>
//             </div>
//           </div>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-lg hover:bg-gray-100">
//             <CloseIcon />
//           </button>
//         </div>

//         {/* Step Indicator */}
//         <div className="flex items-center px-6 py-4 gap-2">
//           {[1, 2, 3].map((n, i) => (
//             <div key={n} className="flex items-center gap-2 flex-1 last:flex-none">
//               <div
//                 className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors duration-300"
//                 style={n <= step ? { background: YELLOW, color: "#fff" } : { background: "#f3f4f6", color: "#9ca3af" }}
//               >
//                 {n}
//               </div>
//               <span className={`text-xs font-semibold transition-colors duration-300 ${n <= step ? "text-gray-800" : "text-gray-400"}`}>
//                 {stepLabel(n)}
//               </span>
//               {i < 2 && (
//                 <div className="flex-1 h-px mx-1 transition-colors duration-300" style={{ background: n < step ? YELLOW : "#e5e7eb" }} />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Step Content */}
//         <div className="overflow-hidden px-6 pb-6">
//           <AnimatePresence mode="wait" custom={dir}>
//             {step === 1 && (
//               <motion.div
//                 key="step1"
//                 custom={dir}
//                 variants={stepVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.22, ease: "easeInOut" }}
//               >
//                 <p className="text-sm text-gray-600 mb-4 mt-1">Choose how you'd like to reach out</p>
//                 <div className="grid grid-cols-2 gap-3">
//                   {[
//                     { key: "email", icon: <EmailIcon />, title: "Email", sub: "Send a templates reminder" },
//                     { key: "whatsapp", icon: <WhatsAppIcon />, title: "Whatsapp", sub: "Log a call reminder" },
//                   ].map((ch) => (
//                     <motion.button
//                       key={ch.key}
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.97 }}
//                       onClick={() => setChannel(ch.key)}
//                       className="flex flex-col items-start gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-left"
//                       style={{
//                         borderColor: channel === ch.key ? YELLOW : "#e5e7eb",
//                         background: channel === ch.key ? "#FFFDE7" : "#fff",
//                       }}
//                     >
//                       <span className="text-gray-700">{ch.icon}</span>
//                       <div>
//                         <p className="font-bold text-gray-900 text-sm">{ch.title}</p>
//                         <p className="text-xs text-gray-400 mt-0.5">{ch.sub}</p>
//                       </div>
//                     </motion.button>
//                   ))}
//                 </div>
//                 <div className="flex justify-end gap-2 mt-6">
//                   <button onClick={onClose} className="px-5 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 active:scale-95 transition-all duration-150">Cancel</button>
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.96 }}
//                     onClick={goNext}
//                     disabled={!channel}
//                     className="flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-bold text-gray-900 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
//                     style={{ background: YELLOW }}
//                   >
//                     Next →
//                   </motion.button>
//                 </div>
//               </motion.div>
//             )}

//             {step === 2 && channel === "email" && (
//               <motion.div
//                 key="step2-email"
//                 custom={dir}
//                 variants={stepVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.22, ease: "easeInOut" }}
//                 className="space-y-4 mt-1"
//               >
//                 {[
//                   { label: "To", field: "to", type: "input", placeholder: "" },
//                   { label: "Subject", field: "subject", type: "input", placeholder: "" },
//                   { label: "Message", field: "message", type: "textarea", placeholder: "" },
//                 ].map(({ label, field, type, placeholder }) => (
//                   <div key={field}>
//                     <label className="block text-sm text-gray-700 font-medium mb-1.5">{label}</label>
//                     {type === "textarea" ? (
//                       <textarea
//                         rows={4}
//                         value={form[field]}
//                         onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
//                         placeholder={placeholder}
//                         className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 outline-none focus:border-yellow-400 transition-colors resize-none"
//                       />
//                     ) : (
//                       <input
//                         type="text"
//                         value={form[field]}
//                         onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
//                         placeholder={placeholder}
//                         className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 outline-none focus:border-yellow-400 transition-colors"
//                       />
//                     )}
//                   </div>
//                 ))}
//                 <div className="flex justify-end gap-2 pt-1">
//                   <button onClick={goBack} className="px-5 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 active:scale-95 transition-all duration-150">Cancel</button>
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.96 }}
//                     onClick={goNext}
//                     className="px-5 py-2 rounded-lg text-sm font-bold text-gray-900 transition-all duration-150"
//                     style={{ background: YELLOW }}
//                   >
//                     Send Reminder
//                   </motion.button>
//                 </div>
//               </motion.div>
//             )}

//             {step === 2 && channel === "whatsapp" && (
//               <motion.div
//                 key="step2-whatsapp"
//                 custom={dir}
//                 variants={stepVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.22, ease: "easeInOut" }}
//                 className="mt-1"
//               >
//                 <div className="mb-4">
//                   <label className="block text-sm text-gray-700 font-medium mb-1.5">Message</label>
//                   <textarea
//                     rows={6}
//                     value={form.message}
//                     onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
//                     className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 outline-none focus:border-yellow-400 transition-colors resize-none"
//                   />
//                 </div>
//                 <div className="flex justify-end gap-2 pt-1">
//                   <button onClick={goBack} className="px-5 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 active:scale-95 transition-all duration-150">Cancel</button>
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.96 }}
//                     onClick={goNext}
//                     className="px-5 py-2 rounded-lg text-sm font-bold text-gray-900 transition-all duration-150"
//                     style={{ background: YELLOW }}
//                   >
//                     Send
//                   </motion.button>
//                 </div>
//               </motion.div>
//             )}

//             {step === 3 && (
//               <motion.div
//                 key="step3"
//                 custom={dir}
//                 variants={stepVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.22, ease: "easeInOut" }}
//                 className="flex flex-col items-center py-8"
//               >
//                 <motion.div
//                   initial={{ scale: 0, rotate: -20 }}
//                   animate={{ scale: 1, rotate: 0 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
//                   className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
//                   style={{ background: "#FFF8DC" }}
//                 >
//                   <CheckCircleIcon />
//                 </motion.div>
//                 <motion.p
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.25 }}
//                   className="font-bold text-gray-900 text-base"
//                 >
//                   Reminder Sent
//                 </motion.p>
//                 <motion.p
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.32 }}
//                   className="text-sm text-gray-400 mt-1"
//                 >
//                   {channel === "email" ? "Email" : "WhatsApp"} delivered to {row.name}.
//                 </motion.p>
//                 <motion.div
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 }}
//                   className="flex gap-2 mt-8"
//                 >
//                   <button onClick={onClose} className="px-6 py-2.5 rounded-lg border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 active:scale-95 transition-all duration-150">Close</button>
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.96 }}
//                     onClick={onClose}
//                     className="px-6 py-2.5 rounded-lg text-sm font-bold text-gray-900 transition-all duration-150"
//                     style={{ background: YELLOW }}
//                   >
//                     Done
//                   </motion.button>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// function ActionMenu({ row }) {
//   const [open, setOpen] = useState(false);
//   const [modalRow, setModalRow] = useState(null);

//   return (
//     <>
//       <div className="relative">
//         <button
//           onClick={() => setOpen((v) => !v)}
//           className="text-gray-400 hover:text-gray-700 font-bold text-lg leading-none active:scale-95 transition-transform duration-150 px-2"
//         >
//           ⋮
//         </button>
//         <AnimatePresence>
//           {open && (
//             <DropdownMenu
//               row={row}
//               onClose={() => setOpen(false)}
//               onNotification={(r) => { setModalRow(r); setOpen(false); }}
//             />
//           )}
//         </AnimatePresence>
//       </div>

//       <AnimatePresence>
//         {modalRow && (
//           <SendReminderModal row={modalRow} onClose={() => setModalRow(null)} />
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default function SubscriptionPage() {
//   const [tableSearch, setTableSearch] = useState("");
//   const [showFilter, setShowFilter] = useState(false);
//   const [activeFilters, setActiveFilters] = useState(EMPTY_FILTERS);
//   const filterBtnRef = useRef(null);

//   const parseExpire = (str) => {
//     const [d, m, y] = str.split("/");
//     return new Date(`20${y}-${m}-${d}`);
//   };

//   const hasDateFilter = activeFilters.expireFrom || activeFilters.expireTo;
//   const activeCount = activeFilters.plans.length + activeFilters.statuses.length + (hasDateFilter ? 1 : 0);

//   const filtered = subscriptions.filter((s) => {
//     const matchSearch =
//       s.name.toLowerCase().includes(tableSearch.toLowerCase()) ||
//       s.plan.toLowerCase().includes(tableSearch.toLowerCase());
//     const matchPlan = activeFilters.plans.length === 0 || activeFilters.plans.includes(s.plan);
//     const matchStatus = activeFilters.statuses.length === 0 || activeFilters.statuses.includes(s.status);
//     let matchDate = true;
//     if (activeFilters.expireFrom || activeFilters.expireTo) {
//       const exp = parseExpire(s.expire);
//       if (activeFilters.expireFrom) matchDate = matchDate && exp >= new Date(activeFilters.expireFrom);
//       if (activeFilters.expireTo)   matchDate = matchDate && exp <= new Date(activeFilters.expireTo);
//     }
//     return matchSearch && matchPlan && matchStatus && matchDate;
//   });

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <main className="flex-1 p-4 md:p-6">
//         <motion.h1
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.35 }}
//           className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-5"
//         >
//           Subscription
//         </motion.h1>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
//           {statCards.map((card, i) => (
//             <motion.div
//               key={card.label}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: i * 0.1 }}
//               whileHover={{ scale: 1.03 }}
//               className="bg-white rounded-xl border border-gray-100 p-3 md:p-4 shadow-sm"
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-xs text-gray-500 font-medium leading-tight">{card.label}</span>
//                 <span className="text-gray-300 hidden sm:block"><CardIcon /></span>
//               </div>
//               <div className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">{card.value}</div>
//               <div className="flex items-center justify-between gap-1 flex-wrap">
//                 <span className="text-xs text-gray-400">{card.sub}</span>
//                 <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
//                   card.badgeType === "green" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
//                 }`}>{card.badge}</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: 0.45 }}
//           className="bg-white rounded-xl border border-gray-100"
//         >
//           <div className="flex flex-col sm:flex-row sm:items-center gap-2 px-4 py-3 border-b border-gray-100">
//             <div className="relative flex-1">
//               <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"><SearchIcon /></span>
//               <input
//                 type="text"
//                 placeholder="Search by name or plan…"
//                 value={tableSearch}
//                 onChange={(e) => setTableSearch(e.target.value)}
//                 className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 outline-none focus:border-yellow-400 transition-colors"
//               />
//             </div>
//             <div className="flex gap-2 sm:flex-shrink-0 relative">
//               <button
//                 style={{ background: YELLOW }}
//                 className="flex-1 sm:flex-none active:scale-95 transition-transform duration-150 flex items-center justify-center gap-1.5 text-sm font-bold px-4 py-2 rounded-lg text-gray-800"
//               >
//                 <PlusIcon /> <span>Add Lead</span>
//               </button>
//               <div className="relative">
//                 <button
//                   ref={filterBtnRef}
//                   onClick={() => setShowFilter((v) => !v)}
//                   className="flex items-center justify-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg border transition-all duration-150 active:scale-95"
//                   style={activeCount > 0
//                     ? { borderColor: YELLOW, background: "#FFFDE7", color: "#1f2937" }
//                     : { borderColor: "#e5e7eb", background: "#fff", color: "#6b7280" }}
//                 >
//                   <FilterIcon /> <span>Filters</span>
//                   {activeCount > 0 && (
//                     <span className="flex items-center justify-center w-4 h-4 rounded-full text-white text-[10px] font-bold" style={{ background: YELLOW, color: "#1f2937" }}>
//                       {activeCount}
//                     </span>
//                   )}
//                 </button>
//                 <AnimatePresence>
//                   {showFilter && (
//                     <FilterPanel
//                       filters={activeFilters}
//                       onApply={(f) => setActiveFilters(f)}
//                       onReset={() => setActiveFilters(EMPTY_FILTERS)}
//                       onClose={() => setShowFilter(false)}
//                     />
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>

//           {/* Active filter chips */}
//           <AnimatePresence>
//             {activeCount > 0 && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.2 }}
//                 className="flex flex-wrap gap-2 px-4 py-2 border-b border-gray-100 overflow-hidden"
//               >
//                 {activeFilters.plans.map((p) => (
//                   <motion.span
//                     key={p}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
//                     style={{ background: "#FFFDE7", color: "#92660a", border: `1px solid ${YELLOW}` }}
//                   >
//                     {p}
//                     <button onClick={() => setActiveFilters((f) => ({ ...f, plans: f.plans.filter((x) => x !== p) }))} className="opacity-60 hover:opacity-100">
//                       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12" /></svg>
//                     </button>
//                   </motion.span>
//                 ))}
//                 {activeFilters.statuses.map((s) => (
//                   <motion.span
//                     key={s}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
//                     style={{ background: s === "Active" ? "#dcfce7" : "#fef9c3", color: s === "Active" ? "#166534" : "#854d0e", border: `1px solid ${s === "Active" ? "#86efac" : "#fde047"}` }}
//                   >
//                     {s}
//                     <button onClick={() => setActiveFilters((f) => ({ ...f, statuses: f.statuses.filter((x) => x !== s) }))} className="opacity-60 hover:opacity-100">
//                       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12" /></svg>
//                     </button>
//                   </motion.span>
//                 ))}
//                 {hasDateFilter && (
//                   <motion.span
//                     key="date"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
//                     style={{ background: "#EFF6FF", color: "#1e40af", border: "1px solid #bfdbfe" }}
//                   >
//                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
//                     {activeFilters.expireFrom && activeFilters.expireTo
//                       ? `${activeFilters.expireFrom} → ${activeFilters.expireTo}`
//                       : activeFilters.expireFrom
//                         ? `From ${activeFilters.expireFrom}`
//                         : `To ${activeFilters.expireTo}`}
//                     <button onClick={() => setActiveFilters((f) => ({ ...f, expireFrom: "", expireTo: "" }))} className="opacity-60 hover:opacity-100">
//                       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12" /></svg>
//                     </button>
//                   </motion.span>
//                 )}
//                 <button
//                   onClick={() => setActiveFilters(EMPTY_FILTERS)}
//                   className="text-xs text-red-400 font-semibold hover:text-red-600 transition-colors"
//                 >
//                   Clear all
//                 </button>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Desktop Table */}
//          <div className="hidden md:block overflow-visible">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-gray-100">
//                   {TABLE_HEADERS.map((h) => (
//                     <th key={h} className="text-center px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {filtered.length === 0 ? (
//                   <tr><td colSpan={6} className="text-center py-10 text-gray-400 text-sm">No records found</td></tr>
//                 ) : (
//                   filtered.map((row, i) => (
//                     <motion.tr
//                       key={i}
//                       initial={{ opacity: 0, y: 16 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.05 }}
//                       className="border-b border-gray-50 hover:bg-yellow-50 transition-colors"
//                     >
//                       <td className="text-center px-4 py-3 text-sm font-semibold text-gray-800">{row.name}</td>
//                       <td className="text-center px-4 py-3 text-sm text-gray-600">{row.plan}</td>
//                       <td className="text-center px-4 py-3">
//                         <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
//                           row.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
//                         }`}>{row.status}</span>
//                       </td>
//                       <td className="text-center px-4 py-3 text-sm text-gray-600">{row.expire}</td>
//                       <td className="text-center px-4 py-3 text-sm text-gray-600">{row.renew}</td>
//                       <td className="text-center px-4 py-3">
//                         <ActionMenu row={row} />
//                       </td>
//                     </motion.tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Mobile Cards */}
//           <div className="md:hidden divide-y divide-gray-100">
//             {filtered.length === 0 ? (
//               <p className="text-center py-10 text-gray-400 text-sm">No records found</p>
//             ) : (
//               filtered.map((row, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.06 }}
//                   className="p-4 hover:bg-yellow-50 transition-colors"
//                 >
//                   <div className="flex items-start justify-between mb-2">
//                     <div>
//                       <p className="font-semibold text-gray-800 text-sm">{row.name}</p>
//                       <p className="text-xs text-gray-400 mt-0.5">{row.plan}</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
//                         row.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
//                       }`}>{row.status}</span>
//                       <ActionMenu row={row} />
//                     </div>
//                   </div>
//                   <div className="flex gap-4 text-xs text-gray-500 mt-2">
//                     <div>
//                       <span className="text-gray-400 block mb-0.5">Expires</span>
//                       <span className="font-medium text-gray-700">{row.expire}</span>
//                     </div>
//                     <div>
//                       <span className="text-gray-400 block mb-0.5">Renews</span>
//                       <span className="font-medium text-gray-700">{row.renew}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))
//             )}
//           </div>
//         </motion.div>
//       </main>
//     </div>
//   );
// }
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SubscriptionStats from "../components/subscription/stats/SubscriptionStats";
import SearchBar from "../components/subscription/filters/SearchBar";
import FilterPanel from "../components/subscription/filters/FilterPanel";
import FilterChips from "../components/subscription/filters/FilterChips";
import SubscriptionTable from "../components/subscription/table/SubscriptionTable";
import SubscriptionMobileCards from "../components/subscription/table/SubscriptionMobileCards";

import { subscriptions } from "../data/subscriptionData";
import { EMPTY_FILTERS } from "../constants/subscriptionConstants";
import { parseExpire } from "../utils/subscriptionUtils";

export default function SubscriptionPage() {
  const [tableSearch, setTableSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilters, setActiveFilters] = useState(EMPTY_FILTERS);

  const filterBtnRef = useRef(null);

  const hasDateFilter =
    activeFilters.expireFrom || activeFilters.expireTo;

  const activeCount =
    activeFilters.plans.length +
    activeFilters.statuses.length +
    (hasDateFilter ? 1 : 0);

  const filtered = subscriptions.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(tableSearch.toLowerCase()) ||
      s.plan.toLowerCase().includes(tableSearch.toLowerCase());

    const matchPlan =
      activeFilters.plans.length === 0 ||
      activeFilters.plans.includes(s.plan);

    const matchStatus =
      activeFilters.statuses.length === 0 ||
      activeFilters.statuses.includes(s.status);

    let matchDate = true;

    if (activeFilters.expireFrom || activeFilters.expireTo) {
      const exp = parseExpire(s.expire);

      if (activeFilters.expireFrom)
        matchDate =
          matchDate &&
          exp >= new Date(activeFilters.expireFrom);

      if (activeFilters.expireTo)
        matchDate =
          matchDate &&
          exp <= new Date(activeFilters.expireTo);
    }

    return (
      matchSearch &&
      matchPlan &&
      matchStatus &&
      matchDate
    );
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 p-4 md:p-6">

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-5"
        >
          Subscription
        </motion.h1>

        <SubscriptionStats />

        <div className="bg-white rounded-xl border border-gray-100">

          <SearchBar
            tableSearch={tableSearch}
            setTableSearch={setTableSearch}
            activeCount={activeCount}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
            filterBtnRef={filterBtnRef}
          />

          <AnimatePresence>
            {showFilter && (
              <FilterPanel
                filters={activeFilters}
                onApply={(f) => setActiveFilters(f)}
                onReset={() => setActiveFilters(EMPTY_FILTERS)}
                onClose={() => setShowFilter(false)}
              />
            )}
          </AnimatePresence>

          <FilterChips
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
            activeCount={activeCount}
          />

          <SubscriptionTable filtered={filtered} />

          <SubscriptionMobileCards filtered={filtered} />

        </div>
      </main>
    </div>
  );
}