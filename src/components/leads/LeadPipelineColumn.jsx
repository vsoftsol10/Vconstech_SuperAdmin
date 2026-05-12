import { FiMail, FiPhone } from "react-icons/fi";

const stages = ["New", "Contacted", "Qualified", "Proposal", "Won"];

const pipelineColors = {
  New:       "#60a5fa",
  Contacted: "#facc15",
  Qualified: "#c084fc",
  Proposal:  "#fb923c",
  Won:       "#4ade80",
  Lost:      "#f87171",
};

const planColors = {
  Basic:   "text-blue-500",
  Premium: "text-purple-500",
  Advance: "text-orange-500",
};

const LeadPipelineColumn = ({ lead, stage }) => {
  const activeIndex = stages.findIndex((item) => item === stage);
  const pipelineColor = pipelineColors[stage] || "#F5C518";

  return (
    <div className="
      bg-white rounded-[20px] sm:rounded-[24px]
      border border-[#ECECEC]
      p-4 sm:p-5
      shadow-sm hover:shadow-lg
      transition-all duration-300
    ">

      {/* TOP */}
      <div className="flex gap-3 mb-3 sm:mb-4">

        {/* AVATAR */}
        <div className="
          w-[44px] h-[44px] sm:w-[52px] sm:h-[52px]
          rounded-full bg-[#F5C518]
          flex items-center justify-center
          text-base sm:text-lg font-bold text-black
          shadow-sm shrink-0
        ">
          {lead.name.charAt(0)}
        </div>

        {/* INFO */}
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#111] truncate">
            {lead.name}
          </h3>
          <p className="text-[12px] sm:text-[13px] text-gray-500 mb-1.5 sm:mb-2 truncate">
            {lead.company}
          </p>

          {/* EMAIL */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[12px] sm:text-sm text-gray-600 mb-1">
            <FiMail className="text-gray-400 shrink-0 text-[12px] sm:text-[14px]" />
            <span className="truncate">{lead.email}</span>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[12px] sm:text-sm text-gray-600 mb-1">
            <FiPhone className="text-gray-400 shrink-0 text-[12px] sm:text-[14px]" />
            <span>{lead.phone}</span>
          </div>

          {/* PLAN */}
          {lead.plan && (
            <p className={`
              text-[11px] sm:text-[12px] font-medium mt-1
              ${planColors[lead.plan] || "text-gray-500"}
            `}>
              {lead.plan}
            </p>
          )}
        </div>
      </div>

      {/* PROGRESS FLOW */}
      <div className="mt-3 sm:mt-4">
        <div className="relative flex items-center justify-between mb-2">

          {/* BG LINE */}
          <div className="absolute top-[5px] sm:top-[6px] left-0 w-full h-[2px] bg-gray-200" />

          {/* ACTIVE LINE */}
          <div
            className="absolute top-[5px] sm:top-[6px] left-0 h-[2px] transition-all duration-500"
            style={{
              width: `${(activeIndex / (stages.length - 1)) * 100}%`,
              backgroundColor: pipelineColor,
            }}
          />

          {/* DOTS */}
          {stages.map((item, index) => (
            <div key={item} className="relative z-10">
              <div
                className="
                  w-[12px] h-[12px] sm:w-[14px] sm:h-[14px]
                  rounded-full border-2 bg-white
                  transition-all duration-300
                "
                style={
                  index <= activeIndex
                    ? { borderColor: pipelineColor, backgroundColor: pipelineColor }
                    : { borderColor: "#d1d5db", backgroundColor: "white" }
                }
              />
            </div>
          ))}
        </div>

        {/* LABELS */}
        <div className="flex justify-between text-[9px] sm:text-[10px]">
          {stages.map((item, index) => (
            <span
              key={item}
              style={index <= activeIndex ? { color: pipelineColor } : {}}
              className={index <= activeIndex ? "font-medium" : "text-gray-400"}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LeadPipelineColumn;