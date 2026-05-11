import { stats } from "../../data/customerData";
import DocIcon from "./DocIcon";

export default function CustomerStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="anim-fadeUp bg-white rounded-2xl p-4 md:p-5 border border-gray-100 hover:shadow-md hover:shadow-yellow-100 hover:-translate-y-0.5 transition-all duration-200"
          style={{ animationDelay: `${80 + i * 80}ms` }}
        >
          <div className="flex justify-between items-start mb-3">
            <span className="text-xs md:text-sm text-gray-500 font-medium">
              {s.label}
            </span>

            <DocIcon />
          </div>

          <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            {s.value}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">{s.sub}</span>

            <span
              className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                s.badgeType === "up"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {s.badge}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}