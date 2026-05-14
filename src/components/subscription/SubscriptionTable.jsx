import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiFilter, FiCheck, FiEdit, FiTrash2, FiBell } from "react-icons/fi";
import SendReminderModal from "./SendReminderModal";

const YELLOW  = "#F5C518";
const PLANS   = ["All", "Basic", "Pro", "Enterprise"];
const HEADERS = ["Customer Name", "Plan", "Status", "Expire Date", "Renew Date", "Action"];

function ActionMenu({ row }) {
  const [open,     setOpen]     = useState(false);
  const [modalRow, setModalRow] = useState(null);

  return (
    <>
      <div className="relative flex justify-center">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-8 h-8 rounded-lg hover:bg-[#FFFBF0] hover:text-[#C89B00] text-gray-400 transition-all duration-200 flex items-center justify-center text-lg"
        >
          ⋮
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: -6 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={{   opacity: 0, scale: 0.88,  y: -6 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-9 z-50 bg-white border border-gray-100 rounded-xl shadow-lg py-1 min-w-[148px]"
            >
              {[
                { icon: <FiEdit size={14} />,   label: "Edit",         color: "text-gray-700" },
                { icon: <FiTrash2 size={14} />, label: "Delete",       color: "text-red-500"  },
                { icon: <FiBell size={14} />,   label: "Notification", color: "text-gray-700" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.label === "Notification") setModalRow(row);
                    setOpen(false);
                  }}
                  className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm font-medium hover:bg-[#FFFBF0] transition-colors ${item.color}`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {modalRow && (
          <SendReminderModal row={modalRow} onClose={() => setModalRow(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default function SubscriptionTable({ subscriptions }) {
  const [tableSearch, setTableSearch] = useState("");
  const [showFilter,  setShowFilter]  = useState(false);
  const [activePlan,  setActivePlan]  = useState("All");
  const [dateFrom,    setDateFrom]    = useState("");
  const [dateTo,      setDateTo]      = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowFilter(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const parseDate = (str) => {
    const [d, m, y] = str.split("/");
    return new Date(`20${y}-${m}-${d}`);
  };

  const hasDateFilter  = dateFrom || dateTo;
  const hasPlanFilter  = activePlan !== "All";
  const activeCount    = (hasPlanFilter ? 1 : 0) + (hasDateFilter ? 1 : 0);

  const clearAll = () => {
    setActivePlan("All");
    setDateFrom("");
    setDateTo("");
  };

  const filtered = subscriptions.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(tableSearch.toLowerCase()) ||
      s.plan.toLowerCase().includes(tableSearch.toLowerCase());

    const matchPlan = activePlan === "All" || s.plan === activePlan;

    let matchDate = true;
    if (dateFrom || dateTo) {
      const exp = parseDate(s.expire);
      if (dateFrom) matchDate = matchDate && exp >= new Date(dateFrom);
      if (dateTo)   matchDate = matchDate && exp <= new Date(dateTo);
    }

    return matchSearch && matchPlan && matchDate;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-visible border border-gray-200 shadow-sm"
    >

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 sm:p-5 border-b border-gray-100">

        {/* Search */}
        <div className="
          flex items-center gap-2 sm:gap-3
          h-[42px] sm:h-[46px]
          px-3 sm:px-4 rounded-xl
          border border-gray-200 bg-white flex-1
        ">
          <FiSearch className="text-gray-400 text-[16px] sm:text-[18px] shrink-0" />
          <input
            type="text"
            placeholder="Search by name or plan..."
            value={tableSearch}
            onChange={(e) => setTableSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Add Lead */}
          <button className="
            flex-1 sm:flex-none
            h-[40px] sm:h-[44px]
            px-4 sm:px-5 rounded-xl
            bg-[#F5C518] text-black
            text-[13px] sm:text-sm font-semibold
            shadow-sm hover:bg-[#e4b700]
            transition-all duration-300 whitespace-nowrap
          ">
            + Add Lead
          </button>

          {/* Filter */}
          <div className="relative flex-1 sm:flex-none" ref={dropdownRef}>
            <button
              onClick={() => setShowFilter(!showFilter)}
              className={`
                w-full h-[40px] sm:h-[44px]
                px-4 sm:px-5 rounded-xl border
                flex items-center justify-center gap-2
                text-[13px] sm:text-sm font-medium
                transition-all duration-300 whitespace-nowrap
                ${showFilter
                  ? "bg-[#F5C518] border-[#F5C518] text-black"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              <FiFilter className="text-[14px] sm:text-[16px]" />
              Filters
              {activeCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 bg-black text-white text-[9px] font-bold rounded-full">
                  {activeCount}
                </span>
              )}
            </button>

            {/* Dropdown — Plan + Date */}
            {showFilter && (
              <div className="
                absolute right-0 top-[48px]
                w-[260px]
                bg-white border border-gray-200
                rounded-2xl shadow-lg z-50
                overflow-hidden p-4
              ">

                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-gray-900">Filters</span>
                  {activeCount > 0 && (
                    <button
                      onClick={clearAll}
                      className="text-xs text-red-400 hover:text-red-600 font-semibold"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Plan Filter */}
                <div className="mb-4">
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Plan
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {PLANS.map((plan) => (
                      <button
                        key={plan}
                        onClick={() => setActivePlan(plan)}
                        className={`
                          px-3 py-1 rounded-full
                          text-xs font-semibold border
                          transition-all duration-150 flex items-center gap-1
                          ${activePlan === plan
                            ? "bg-[#F5C518] border-[#F5C518] text-black"
                            : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-[#FFFBF0] hover:border-[#F5C518]"
                          }
                        `}
                      >
                        {plan}
                        {activePlan === plan && plan !== "All" && (
                          <FiCheck size={10} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date Filter */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
                      Expiry Date
                    </p>
                    {hasDateFilter && (
                      <button
                        onClick={() => { setDateFrom(""); setDateTo(""); }}
                        className="text-[11px] text-gray-400 hover:text-red-400 transition-colors"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] text-gray-400 mb-1 block">From</label>
                      <input
                        type="date"
                        value={dateFrom}
                        onChange={(e) => setDateFrom(e.target.value)}
                        className="w-full px-2 py-1.5 text-xs border rounded-lg bg-gray-50 outline-none transition-colors cursor-pointer"
                        style={{ borderColor: dateFrom ? YELLOW : "#e5e7eb" }}
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-gray-400 mb-1 block">To</label>
                      <input
                        type="date"
                        value={dateTo}
                        min={dateFrom || undefined}
                        onChange={(e) => setDateTo(e.target.value)}
                        className="w-full px-2 py-1.5 text-xs border rounded-lg bg-gray-50 outline-none transition-colors cursor-pointer"
                        style={{ borderColor: dateTo ? YELLOW : "#e5e7eb" }}
                      />
                    </div>
                  </div>

                  {/* Quick presets */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {[
                      { label: "This month",   from: "2026-05-01", to: "2026-05-31" },
                      { label: "Next 30 days", from: "2026-05-14", to: "2026-06-13" },
                      { label: "Next 60 days", from: "2026-05-14", to: "2026-07-13" },
                    ].map((preset) => {
                      const active = dateFrom === preset.from && dateTo === preset.to;
                      return (
                        <button
                          key={preset.label}
                          onClick={() => { setDateFrom(preset.from); setDateTo(preset.to); }}
                          className="px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all duration-150"
                          style={active
                            ? { background: YELLOW, borderColor: YELLOW, color: "#1f2937" }
                            : { background: "#f9fafb", borderColor: "#e5e7eb", color: "#6b7280" }
                          }
                        >
                          {preset.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => setShowFilter(false)}
                  className="w-full py-2 rounded-xl text-sm font-bold text-gray-900 transition-all"
                  style={{ background: YELLOW }}
                >
                  Apply Filters
                </button>

              </div>
            )}
          </div>
        </div>
      </div>

      {/* Active filter chips */}
      <AnimatePresence>
        {activeCount > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-2 px-4 sm:px-5 py-2 border-b border-gray-100"
          >
            {hasPlanFilter && (
              <span className="
                flex items-center gap-1.5
                text-xs font-semibold px-2.5 py-1 rounded-full
                bg-[#FFF9E0] text-[#C89B00] border border-[#F5C518]
              ">
                {activePlan}
                <button onClick={() => setActivePlan("All")} className="opacity-60 hover:opacity-100">
                  <FiCheck size={10} />
                </button>
              </span>
            )}
            {hasDateFilter && (
              <span className="
                flex items-center gap-1.5
                text-xs font-semibold px-2.5 py-1 rounded-full
                bg-blue-50 text-blue-600 border border-blue-200
              ">
                {dateFrom && dateTo
                  ? `${dateFrom} → ${dateTo}`
                  : dateFrom ? `From ${dateFrom}` : `To ${dateTo}`
                }
                <button
                  onClick={() => { setDateFrom(""); setDateTo(""); }}
                  className="opacity-60 hover:opacity-100"
                >
                  ×
                </button>
              </span>
            )}
            <button
              onClick={clearAll}
              className="text-xs text-red-400 hover:text-red-600 font-semibold"
            >
              Clear all
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse">
          <thead>
            <tr className="bg-[#f0f0ee]">
              {HEADERS.map((h) => (
                <th key={h} className="
                  px-4 md:px-6 py-3 sm:py-4
                  text-center text-[12px] sm:text-[13px]
                  font-semibold text-[#111111] whitespace-nowrap
                ">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-16 text-center text-gray-400 text-sm">
                  No records found
                </td>
              </tr>
            ) : (
              filtered.map((row, i) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="border-t border-gray-100 hover:bg-[#fffdf3] transition-all duration-200 cursor-pointer"
                >
                  {/* Name */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="
                        w-[30px] sm:w-[32px] h-[30px] sm:h-[32px]
                        rounded-full bg-yellow-50
                        flex items-center justify-center
                        text-[#F5C518] text-sm font-bold shrink-0
                      ">
                        {row.name[0]}
                      </div>
                      <span className="text-[12px] sm:text-sm font-medium text-[#111111] whitespace-nowrap">
                        {row.name}
                      </span>
                    </div>
                  </td>

                  {/* Plan */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <span className="text-[12px] sm:text-sm text-gray-600 whitespace-nowrap">
                      {row.plan}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <span className={`
                      px-2.5 py-1 rounded-full
                      text-[11px] sm:text-xs font-semibold whitespace-nowrap
                      ${row.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-700"
                      }
                    `}>
                      {row.status}
                    </span>
                  </td>

                  {/* Expire */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <span className="text-[12px] sm:text-sm text-gray-600 whitespace-nowrap">
                      {row.expire}
                    </span>
                  </td>

                  {/* Renew */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <span className="text-[12px] sm:text-sm text-gray-600 whitespace-nowrap">
                      {row.renew}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-4 md:px-6 py-4 text-center">
                    <ActionMenu row={row} />
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