import {
  FiMail,
  FiPhone,
} from "react-icons/fi";

const LeadCard = ({
  name,
  company,
  email,
  phone,
}) => {
  return (
    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-4
        shadow-sm
      "
    >

      {/* Top */}
      <div className="flex gap-3">

        {/* Avatar */}
        <div
          className="
            w-[42px]
            h-[42px]
            rounded-full
            bg-yellow-300
            flex
            items-center
            justify-center
            text-black
            font-bold
          "
        >
          M
        </div>

        {/* Info */}
        <div className="flex-1">

          <h3
            className="
              text-[15px]
              font-semibold
              text-[#111]
            "
          >
            {name}
          </h3>

          <p className="text-[12px] text-gray-500">
            {company}
          </p>

          {/* Email */}
          <div className="flex items-center gap-2 mt-2">

            <FiMail className="text-gray-400 text-[13px]" />

            <span className="text-[12px] text-gray-600">
              {email}
            </span>

          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 mt-1">

            <FiPhone className="text-gray-400 text-[13px]" />

            <span className="text-[12px] text-gray-600">
              {phone}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LeadCard;