import Toggle from "./Toggle";

export default function CustomerMobileCards({
  filteredCustomers,
  handleToggle,
  emptyMessage,
}) {
  return (
    <div className="md:hidden divide-y divide-gray-100">
      {filteredCustomers.length === 0 ? (
        <p className="text-center py-12 text-gray-400 text-sm">
          {emptyMessage}
        </p>
      ) : (
        filteredCustomers.map((c, i) => (
          <div
            key={c.id}
            className="anim-fadeUp p-4"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-semibold text-gray-800">{c.name}</div>

                <div className="text-xs text-gray-400 mt-0.5">
                  {c.id} · {c.company}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold ${c.planColor}`}
                >
                  {c.plan}
                </span>

                <button className="text-gray-400 hover:text-gray-700 text-xl leading-none p-1">
                  ⋮
                </button>
              </div>
            </div>

            <div className="text-xs text-gray-500 mb-1">{c.email}</div>

            <div className="text-xs text-gray-400 mb-3">{c.phone}</div>

            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>{c.date}</span>

              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">
                  {c.members} members
                </span>

                <Toggle
                  active={c.active}
                  onToggle={() => handleToggle(c.id)}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}