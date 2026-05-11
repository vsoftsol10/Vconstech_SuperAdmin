import Toggle from "./Toggle";

export default function CustomerTable({
  filteredCustomers,
  handleToggle,
  emptyMessage,
}) {
  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-400 text-xs uppercase tracking-wide border-b border-gray-100">
            {[
              "Customer ID",
              "Customer Name",
              "Company",
              "Plan",
              "Phone",
              "Email",
              "Date",
              "Active",
              "Member",
              "Action",
            ].map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left font-semibold first:pl-6"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredCustomers.length === 0 ? (
            <tr>
              <td
                colSpan={10}
                className="text-center py-14 text-gray-400 text-sm"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            filteredCustomers.map((c, i) => (
              <tr
                key={c.id}
                className="anim-slideIn border-b border-gray-50 hover:bg-yellow-50 transition-colors"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <td className="pl-6 pr-4 py-4 text-gray-500 text-xs font-mono">
                  {c.id}
                </td>

                <td className="px-4 py-4 font-semibold text-gray-800">
                  {c.name}
                </td>

                <td className="px-4 py-4 text-gray-600">{c.company}</td>

                <td className="px-4 py-4">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${c.planColor}`}
                  >
                    {c.plan}
                  </span>
                </td>

                <td className="px-4 py-4 text-gray-600">{c.phone}</td>

                <td className="px-4 py-4 text-gray-600">{c.email}</td>

                <td className="px-4 py-4 text-gray-400 text-xs">
                  {c.date}
                </td>

                <td className="px-4 py-4">
                  <Toggle
                    active={c.active}
                    onToggle={() => handleToggle(c.id)}
                  />
                </td>

                <td className="px-4 py-4 font-semibold text-gray-700">
                  {c.members}
                </td>

                <td className="px-4 py-4">
                  <button className="text-gray-400 hover:text-gray-700 text-xl leading-none transition-colors">
                    ⋮
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}