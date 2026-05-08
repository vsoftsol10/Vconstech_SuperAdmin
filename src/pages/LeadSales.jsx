import LeadStatsSection from "../components/leads/LeadStatsSection";
import LeadActionBar from "../components/leads/LeadActionBar";
import LeadPipelineSection from "../components/leads/LeadPipelineSection";

const LeadSales = () => {
  return (
    <div>

      {/* Page Title */}
      <div className="mb-7">

        <h1
          className="
            text-[34px]
            md:text-[38px]
            font-bold
            text-[#111]
            leading-tight
          "
        >
          Lead
        </h1>

      </div>

      {/* Top Stats */}
      <LeadStatsSection />

      {/* Action Bar */}
      <LeadActionBar />

      {/* Pipeline */}
      <LeadPipelineSection />

    </div>
  );
};

export default LeadSales;