import LeadPipelineColumn from "./LeadPipelineColumn";

import { leadsData } from "../../data/leadsData";

const LeadPipelineSection = () => {
  return (
    <div
      className="
        flex
        gap-5
        overflow-x-auto
        pb-2
        scrollbar-hide
      "
    >

      {leadsData.map((item) => (
        <LeadPipelineColumn
          key={item.id}
          {...item}
        />
      ))}

    </div>
  );
};

export default LeadPipelineSection;