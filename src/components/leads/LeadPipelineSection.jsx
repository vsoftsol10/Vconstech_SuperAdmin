import LeadPipelineColumn from "./LeadPipelineColumn";

const LeadPipelineSection = ({ leadsData }) => {
  return (
    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-3
      gap-3 sm:gap-4 md:gap-5
    ">
      {leadsData.map((stageData) =>
        stageData.leads.map((lead) => (
          <LeadPipelineColumn
            key={lead.id}
            lead={lead}
            stage={stageData.stage}
          />
        ))
      )}
    </div>
  );
};

export default LeadPipelineSection;