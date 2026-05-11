import StatCard from "../common/StatCard";
import { statCards } from "../../../data/subscriptionData";

export default function SubscriptionStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
      {statCards.map((card, i) => (
        <StatCard key={card.label} card={card} index={i} />
      ))}
    </div>
  );
}