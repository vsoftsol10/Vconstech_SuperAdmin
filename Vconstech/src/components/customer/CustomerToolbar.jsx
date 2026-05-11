export default function CustomerToolbar({
  tabs,
  activeTab,
  setActiveTab,
  customers,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 md:px-6 pt-5 pb-3 border-b border-gray-100">
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm transition-all duration-200 border-b-2 ${
              activeTab === tab
                ? "border-yellow-400 text-yellow-500 font-semibold"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab}

            <span
              className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs font-bold ${
                activeTab === tab
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {tab === "All" ? customers.length : null}
              {tab === "Active"
                ? customers.filter((c) => c.active).length
                : null}
              {tab === "Inactive"
                ? customers.filter((c) => !c.active).length
                : null}
            </span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 6h18M7 12h10M10 18h4" />
          </svg>

          Filters
        </button>

        <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-yellow-400 text-white text-sm font-semibold hover:bg-yellow-500 active:scale-95 transition-all duration-150">
          + Add Customer
        </button>
      </div>
    </div>
  );
}