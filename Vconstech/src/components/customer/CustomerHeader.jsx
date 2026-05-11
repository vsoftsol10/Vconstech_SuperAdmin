export default function CustomerHeader() {
  return (
    <div className="anim-fadeUp flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
        Customer
      </h1>

      <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-yellow-400 text-yellow-500 text-sm font-semibold hover:bg-yellow-50 transition-colors w-fit">
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 16v-8m0 8l-3-3m3 3l3-3M3 21h18" />
        </svg>

        Export
      </button>
    </div>
  );
}