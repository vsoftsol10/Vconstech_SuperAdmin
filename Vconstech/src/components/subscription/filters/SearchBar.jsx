import { AnimatePresence } from "framer-motion";

import {
  SearchIcon,
  PlusIcon,
  FilterIcon,
} from "../icons/SubscriptionIcons";

import FilterPanel from "./FilterPanel";

import { YELLOW, EMPTY_FILTERS } from "../../../constants/subscriptionConstants";

export default function SearchBar({
  tableSearch,
  setTableSearch,
  activeCount,
  showFilter,
  setShowFilter,
  filterBtnRef,
  activeFilters,
  setActiveFilters,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 px-4 py-3 border-b border-gray-100">

      {/* Search */}
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

      {/* Buttons */}
      <div className="flex gap-2 sm:flex-shrink-0 relative">

        {/* Add Lead */}
        <button
          style={{ background: YELLOW }}
          className="flex-1 sm:flex-none active:scale-95 transition-transform duration-150 flex items-center justify-center gap-1.5 text-sm font-bold px-4 py-2 rounded-lg text-gray-800"
        >
          <PlusIcon />
          <span>Add Lead</span>
        </button>

        {/* Filter */}
        <div className="relative">

          <button
            ref={filterBtnRef}
            onClick={() => setShowFilter((v) => !v)}
            className="flex items-center justify-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg border transition-all duration-150 active:scale-95"
            style={
              activeCount > 0
                ? {
                    borderColor: YELLOW,
                    background: "#FFFDE7",
                    color: "#1f2937",
                  }
                : {
                    borderColor: "#e5e7eb",
                    background: "#fff",
                    color: "#6b7280",
                  }
            }
          >
            <FilterIcon />

            <span>Filters</span>

            {activeCount > 0 && (
              <span
                className="flex items-center justify-center w-4 h-4 rounded-full text-white text-[10px] font-bold"
                style={{
                  background: YELLOW,
                  color: "#1f2937",
                }}
              >
                {activeCount}
              </span>
            )}
          </button>

          {/* <AnimatePresence>
            {showFilter && (
              <FilterPanel
                filters={activeFilters}
                onApply={(f) => setActiveFilters(f)}
                onReset={() => setActiveFilters(EMPTY_FILTERS)}
                onClose={() => setShowFilter(false)}
              />
            )}
          </AnimatePresence> */}

        </div>
      </div>
    </div>
  );
}