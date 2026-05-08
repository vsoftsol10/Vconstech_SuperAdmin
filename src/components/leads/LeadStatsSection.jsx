import LeadStatsCard from "./LeadStatsCard";
import { leadStats } from "../../data/leadStats";

const LeadStatsSection = () => {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-5
      "
    >

      {leadStats.map((item) => (
        <LeadStatsCard
          key={item.id}
          {...item}
        />
      ))}

    </div>
  );
};

export default LeadStatsSection;