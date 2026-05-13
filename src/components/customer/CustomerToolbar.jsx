import { useState, useRef, useEffect } from "react";
import { FiSearch, FiFilter, FiCheck } from "react-icons/fi";

const plans = ["All", "Basic", "Pro", "Enterprise"];
const tabs  = ["All", "Active", "Inactive"];

export default function CustomerToolbar({
  activeTab,
  setActiveTab,
  customers,
  tableSearch,
  setTableSearch,
  activePlan,
  setActivePlan,
}) {
  const [showFilter, setShowFilter] = useState(false);
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

  return (
    <div className="mb-5 sm:mb-6">

      {/* TOOLBAR */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-5">

        {/* SEARCH */}
        <div className="
          flex items-center gap-2 sm:gap-3
          h-[42px] sm:h-[46px] md:h-[50px]
          px-3 sm:px-4 rounded-xl
          border border-gray-200 bg-white flex-1
        ">
          <FiSearch className="text-gray-400 text-[16px] sm:text-[18px] shrink-0" />
          <input
            type="text"
            placeholder="Search name, email, phone..."
            value={tableSearch}
            onChange={(e) => setTableSearch(e.target.value)}
            className="
              flex-1 bg-transparent outline-none
              text-sm text-gray-700
              placeholder:text-gray-400
            "
          />
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* ADD CUSTOMER */}
          <button className="
            flex-1 sm:flex-none
            h-[40px] sm:h-[44px] md:h-[48px]
            px-4 sm:px-5 md:px-6
            rounded-xl
            bg-[#F5C518] text-black
            text-[13px] sm:text-sm font-semibold
            shadow-sm hover:bg-[#e4b700]
            transition-all duration-300 whitespace-nowrap
          ">
            + Add Customer
          </button>

          {/* FILTER */}
          <div className="relative flex-1 sm:flex-none" ref={dropdownRef}>
            <button
              onClick={() => setShowFilter(!showFilter)}
              className={`
                w-full
                h-[40px] sm:h-[44px] md:h-[48px]
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
              {activePlan !== "All" && (
                <span className="
                  ml-1 px-1.5 py-0.5
                  bg-black text-white
                  text-[9px] font-bold rounded-full
                ">
                  1
                </span>
              )}
            </button>

            {/* DROPDOWN */}
            {showFilter && (
              <div className="
                absolute right-0 top-[48px] sm:top-[52px]
                w-[160px] sm:w-[180px]
                bg-white border border-gray-200
                rounded-2xl shadow-lg z-50
                overflow-hidden py-2
              ">
                {plans.map((plan) => (
                  <button
                    key={plan}
                    onClick={() => {
                      setActivePlan(plan);
                      setShowFilter(false);
                    }}
                    className={`
                      w-full px-3 sm:px-4 py-2 sm:py-2.5
                      flex items-center justify-between
                      text-[13px] sm:text-sm font-medium
                      transition-all duration-200
                      ${activePlan === plan
                        ? "bg-[#FFF9E0] text-[#C89B00]"
                        : "text-gray-700 hover:bg-[#FFFBF0]"
                      }
                    `}
                  >
                    <span>{plan}</span>
                    {activePlan === plan && (
                      <FiCheck className="text-[#F5C518] text-[13px]" />
                    )}
                  </button>
                ))}

                {activePlan !== "All" && (
                  <div className="border-t border-gray-100 px-3 sm:px-4 py-2 mt-1">
                    <button
                      onClick={() => {
                        setActivePlan("All");
                        setShowFilter(false);
                      }}
                      className="text-[11px] sm:text-[12px] text-red-400 hover:text-red-600 font-medium"
                    >
                      Clear filter
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {tabs.map((tab) => {
          const count =
            tab === "All"      ? customers.length :
            tab === "Active"   ? customers.filter((c) => c.active).length :
            customers.filter((c) => !c.active).length;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                h-[36px] sm:h-[40px] md:h-[42px]
                px-3 sm:px-4 md:px-5
                rounded-full border
                flex items-center gap-1.5 sm:gap-2
                whitespace-nowrap
                text-[12px] sm:text-sm font-semibold
                transition-all duration-300 shrink-0
                ${activeTab === tab
                  ? "bg-[#F5C518] border-[#F5C518] text-black shadow-sm"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-[#FFFBF0] hover:border-[#F5C518]"
                }
              `}
            >
              {tab}
              <span className="text-[10px] sm:text-[12px] opacity-70">
                {count}
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}