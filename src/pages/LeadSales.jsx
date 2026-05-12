import { useState } from "react";
import LeadStatsSection from "../components/leads/LeadStatsSection";
import LeadFilterBar from "../components/leads/LeadFilterBar";
import LeadPipelineSection from "../components/leads/LeadPipelineSection";
import { leadsData } from "../data/leadsData";

const LeadSales = () => {
  const [searchTerm,  setSearchTerm]  = useState("");
  const [activeStage, setActiveStage] = useState("New");
  const [activePlan,  setActivePlan]  = useState("All");

  const filteredLeads = leadsData
    .map((stageData) => ({
      ...stageData,
      leads: stageData.leads.filter((lead) => {
        const matchesSearch =
          lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.phone.includes(searchTerm);

        // ALWAYS filter by active stage tab first
        const matchesStage = stageData.stage === activeStage;

        // THEN also filter by plan if selected
        const matchesPlan =
          activePlan === "All" || lead.plan === activePlan;

        return matchesSearch && matchesStage && matchesPlan;
      }),
    }))
    // only keep the active stage
    .filter((stage) => stage.stage === activeStage);

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-[32px] font-bold text-[#111111]">Lead</h1>
      </div>

      <LeadStatsSection />

      <LeadFilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeStage={activeStage}
        setActiveStage={setActiveStage}
        activePlan={activePlan}
        setActivePlan={setActivePlan}
      />

      <LeadPipelineSection leadsData={filteredLeads} />

    </div>
  );
};

export default LeadSales;