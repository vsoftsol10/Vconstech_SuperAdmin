import {
  FiMail,
  FiPhone,
} from "react-icons/fi";

const stages = [
  "New",
  "Contacted",
  "Qualified",
  "Proposal",
  "Won",
];

const LeadPipelineColumn = ({
  lead,
  stage,
}) => {

  // ACTIVE INDEX
  const activeIndex =
    stages.findIndex(
      (item) => item === stage
    );

  return (
    <div
      className="
        bg-white
        rounded-[24px]
        border
        border-[#ECECEC]
        p-5
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
      "
    >

      {/* TOP */}
      <div className="flex gap-3 mb-4">

        {/* AVATAR */}
        <div
          className="
            w-[52px]
            h-[52px]
            rounded-full
            bg-[#F5C518]
            flex
            items-center
            justify-center
            text-lg
            font-bold
            text-black
            shadow-sm
          "
        >
          {lead.name.charAt(0)}
        </div>

        {/* INFO */}
        <div className="flex-1">

          <h3
            className="
              text-[17px]
              font-semibold
              text-[#111]
            "
          >
            {lead.name}
          </h3>

          <p
            className="
              text-[13px]
              text-gray-500
              mb-2
            "
          >
            {lead.company}
          </p>

          {/* EMAIL */}
          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              text-gray-600
              mb-1
            "
          >

            <FiMail className="text-gray-400" />

            {lead.email}

          </div>

          {/* PHONE */}
          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              text-gray-600
            "
          >

            <FiPhone className="text-gray-400" />

            {lead.phone}

          </div>

        </div>

      </div>

      {/* PLAN */}
      {lead.plan && (

        <div
          className="
            text-[12px]
            font-medium
            text-[#8B5CF6]
            mb-4
          "
        >
          {lead.plan}
        </div>

      )}

      {/* PROGRESS FLOW */}
      <div className="mt-4">

        {/* LINE */}
        <div
          className="
            relative
            flex
            items-center
            justify-between
            mb-2
          "
        >

          {/* BG LINE */}
          <div
            className="
              absolute
              top-[6px]
              left-0
              w-full
              h-[2px]
              bg-gray-200
            "
          />

          {/* ACTIVE LINE */}
          <div
            className="
              absolute
              top-[6px]
              left-0
              h-[2px]
              bg-[#F5C518]
            "
            style={{
              width: `${
                (activeIndex /
                  (stages.length - 1))
                * 100
              }%`,
            }}
          />

          {/* DOTS */}
          {stages.map((item, index) => (

            <div
              key={item}
              className="
                relative
                z-10
                flex
                flex-col
                items-center
              "
            >

              <div
                className={`
                  w-[14px]
                  h-[14px]
                  rounded-full
                  border-2
                  bg-white

                  ${
                    index <= activeIndex
                      ? "border-[#F5C518] bg-[#F5C518]"
                      : "border-gray-300"
                  }
                `}
              />

            </div>

          ))}

        </div>

        {/* LABELS */}
        <div
          className="
            flex
            justify-between
            text-[10px]
          "
        >

          {stages.map((item, index) => (

            <span
              key={item}
              className={`
                ${
                  index <= activeIndex
                    ? "text-[#111] font-medium"
                    : "text-gray-400"
                }
              `}
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