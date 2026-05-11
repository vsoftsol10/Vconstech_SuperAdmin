import { useState } from "react";

import "../styles/customerAnimations.css";

import { initialCustomers } from "../data/customerData";

import CustomerHeader from "../components/customer/CustomerHeader";
import CustomerStats from "../components/customer/CustomerStats";
import CustomerToolbar from "../components/customer/CustomerToolbar";
import CustomerTable from "../components/customer/CustomerTable";
import CustomerMobileCards from "../components/customer/CustomerMobileCards";

export default function CustomerPage() {
  const tabs = ["All", "Active", "Inactive"];

  const [activeTab, setActiveTab] = useState("All");

  const [customers, setCustomers] = useState(initialCustomers);

  const handleToggle = (id) => {
    setCustomers((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, active: !item.active }
          : item
      )
    );
  };

  const filteredCustomers = customers.filter((c) => {
    if (activeTab === "Active") return c.active === true;

    if (activeTab === "Inactive") return c.active === false;

    return true;
  });

  const emptyMessage = `No ${activeTab.toLowerCase()} customers found`;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <CustomerHeader />

      <CustomerStats />

      <div className="anim-fadeUp bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <CustomerToolbar
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          customers={customers}
        />

        <CustomerTable
          filteredCustomers={filteredCustomers}
          handleToggle={handleToggle}
          emptyMessage={emptyMessage}
        />

        <CustomerMobileCards
          filteredCustomers={filteredCustomers}
          handleToggle={handleToggle}
          emptyMessage={emptyMessage}
        />
      </div>
    </div>
  );
}