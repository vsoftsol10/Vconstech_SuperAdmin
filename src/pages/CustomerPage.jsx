import { useState } from "react";
import { initialCustomers } from "../data/customerData";
import CustomerStats from "../components/customer/CustomerStats";
import CustomerToolbar from "../components/customer/CustomerToolbar";
import CustomerTable from "../components/customer/CustomerTable";
import CustomerMobileCards from "../components/customer/CustomerMobileCards";

export default function CustomerPage() {
  const [activeTab,    setActiveTab]    = useState("All");
  const [customers,    setCustomers]    = useState(initialCustomers);
  const [tableSearch,  setTableSearch]  = useState("");
  const [activePlan,   setActivePlan]   = useState("All");

  const handleToggle = (id) => {
    setCustomers((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  const filteredCustomers = customers.filter((c) => {
    const matchesTab =
      activeTab === "All" ? true :
      activeTab === "Active" ? c.active : !c.active;

    const search = tableSearch.toLowerCase();
    const matchesSearch =
      c.name.toLowerCase().includes(search) ||
      c.email.toLowerCase().includes(search) ||
      c.phone.toLowerCase().includes(search);

    const matchesPlan =
      activePlan === "All" || c.plan === activePlan;

    return matchesTab && matchesSearch && matchesPlan;
  });

  const emptyMessage = `No ${activeTab.toLowerCase()} customers found`;

  return (
    <div className="space-y-6">

      {/* PAGE TITLE */}
      <div>
        <h1 className="text-[32px] font-bold text-[#111111]">
          Customer
        </h1>
      </div>

      {/* STATS */}
      <CustomerStats />

      {/* TOOLBAR + TABLE */}
      <div>
        <CustomerToolbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          customers={customers}
          tableSearch={tableSearch}
          setTableSearch={setTableSearch}
          activePlan={activePlan}
          setActivePlan={setActivePlan}
        />

        {/* Desktop Table */}
        <div className="hidden md:block">
          <CustomerTable
            filteredCustomers={filteredCustomers}
            handleToggle={handleToggle}
            emptyMessage={emptyMessage}
          />
        </div>

        {/* Mobile Cards */}
        <div className="block md:hidden">
          <CustomerMobileCards
            filteredCustomers={filteredCustomers}
            handleToggle={handleToggle}
            emptyMessage={emptyMessage}
          />
        </div>
      </div>

    </div>
  );
}