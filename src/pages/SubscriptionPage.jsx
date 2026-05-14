import SubscriptionStats from "../components/subscription/SubscriptionStats";
import SubscriptionTable from "../components/subscription/SubscriptionTable";
import { subscriptions } from "../data/subscriptionData";

export default function SubscriptionPage() {
  return (
    <div className="space-y-6">

      {/* Page Title */}
      <div>
        <h1 className="text-[32px] font-bold text-[#111111]">
          Subscription
        </h1>
      </div>

      {/* Stats */}
      <SubscriptionStats />

      {/* Table */}
      <SubscriptionTable subscriptions={subscriptions} />

    </div>
  );
}