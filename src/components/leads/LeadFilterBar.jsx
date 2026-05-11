import {
  FiSearch,
  FiFilter,
} from "react-icons/fi";

const stages = [
  {
    label: "New",
    count: 12,
  },

  {
    label: "Contacted",
    count: 8,
  },

  {
    label: "Qualified",
    count: 6,
  },

  {
    label: "Proposal",
    count: 4,
  },

  {
    label: "Won",
    count: 3,
  },
];

const LeadFilterBar = ({
  searchTerm,
  setSearchTerm,
  activeStage,
  setActiveStage,
}) => {

  return (
    <div className="mt-6 mb-7">

      {/* TOOLBAR */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          gap-3
          mb-5
        "
      >

        {/* SEARCH */}
        <div
          className="
            flex
            items-center
            gap-3
            h-[46px]
            sm:h-[50px]
            px-4
            rounded-xl
            border
            border-gray-200
            bg-white
            flex-1
          "
        >

          <FiSearch className="text-gray-400 text-[18px]" />

          <input
            type="text"
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="
              flex-1
              bg-transparent
              outline-none
              text-sm
              text-gray-700
              placeholder:text-gray-400
            "
          />

        </div>

        {/* RIGHT BUTTONS */}
        <div
          className="
            flex
            items-center
            gap-3
            lg:w-auto
            w-full
          "
        >

          {/* ADD BUTTON */}
          <button
            className="
              flex-1
              lg:flex-none
              h-[44px]
              sm:h-[48px]
              lg:px-6
              px-4
              rounded-xl
              bg-[#F5C518]
              text-black
              text-sm
              font-semibold
              shadow-sm
              hover:bg-[#e4b700]
              transition-all
              duration-300
              whitespace-nowrap
            "
          >

            + Add Lead

          </button>

          {/* FILTER BUTTON */}
          <button
            className="
              flex-1
              lg:flex-none
              h-[44px]
              sm:h-[48px]
              lg:px-5
              px-4
              rounded-xl
              border
              border-gray-200
              bg-white
              flex
              items-center
              justify-center
              gap-2
              text-sm
              font-medium
              text-gray-700
              hover:bg-gray-50
              transition-all
              duration-300
              whitespace-nowrap
            "
          >

            <FiFilter className="text-[16px]" />

            Filters

          </button>

        </div>

      </div>

      {/* STAGE TABS */}
      <div
        className="
          flex
          items-center
          gap-3
          overflow-x-auto
          pb-2
          scrollbar-hide
        "
      >

        {stages.map((stage) => (

          <button
            key={stage.label}
            onClick={() =>
              setActiveStage(stage.label)
            }
            className={`
              h-[42px]
              px-5
              rounded-full
              border
              flex
              items-center
              gap-2
              whitespace-nowrap
              text-sm
              font-semibold
              transition-all
              duration-300
              shrink-0

              ${
                activeStage === stage.label
                  ? "bg-[#F5C518] border-[#F5C518] text-black shadow-sm"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
              }
            `}
          >

            {stage.label}

            <span
              className="
                text-[12px]
                opacity-70
              "
            >
              {stage.count}
            </span>

          </button>

        ))}

      </div>

    </div>
  );
};

export default LeadFilterBar;