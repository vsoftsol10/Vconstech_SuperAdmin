import { useState } from "react";

import LeadStatsSection from "../components/leads/LeadStatsSection";

import LeadFilterBar from "../components/leads/LeadFilterBar";

import LeadPipelineSection from "../components/leads/LeadPipelineSection";

import { leadsData } from "../data/leadsData";

const LeadSales = () => {

  // SEARCH
  const [searchTerm, setSearchTerm] =
    useState("");

  // ACTIVE STAGE
  const [activeStage, setActiveStage] =
    useState("New");

  // FILTERED DATA
  const filteredLeads =
    leadsData
      .map((stageData) => ({

        ...stageData,

        leads: stageData.leads.filter(
          (lead) => {

            const matchesSearch =
              lead.name
                .toLowerCase()
                .includes(
                  searchTerm.toLowerCase()
                ) ||

              lead.email
                .toLowerCase()
                .includes(
                  searchTerm.toLowerCase()
                ) ||

              lead.phone.includes(
                searchTerm
              );

            const matchesStage =
              activeStage ===
                stageData.stage;

            return (
              matchesSearch &&
              matchesStage
            );
          }
        ),
      }))
      .filter(
        (stage) =>
          stage.stage === activeStage
      );

  return (
    <div
      className="
        w-full
        min-h-screen
      "
    >

      {/* PAGE CONTAINER */}
      <div
        className="
          bg-[#FAFAFA]
          border
          border-gray-200
          rounded-[28px]
          p-4
          sm:p-5
          md:p-6
          lg:p-7
        "
      >

        {/* STATS */}
        <LeadStatsSection />

        {/* FILTER BAR */}
        <LeadFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeStage={activeStage}
          setActiveStage={setActiveStage}
        />

        {/* LEADS GRID */}
        <LeadPipelineSection
          leadsData={filteredLeads}
        />

      </div>

    </div>
  );
};

export default LeadSales;