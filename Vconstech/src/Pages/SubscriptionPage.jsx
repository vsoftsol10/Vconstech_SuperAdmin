
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