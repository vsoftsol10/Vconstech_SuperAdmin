import { FiSearch } from "react-icons/fi";

export default function CustomerSearchBar({
  tableSearch,
  setTableSearch,
}) {
  return (
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
  );
}