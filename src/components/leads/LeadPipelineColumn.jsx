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
      "
    >

      {leadsData.map((item) => (
        <LeadPipelineColumn
          key={item.id}
          stage={item.stage}
          count={item.count}
          leads={item.leads}
        />
      ))}

    </div>
  );
};

export default LeadPipelineSection;