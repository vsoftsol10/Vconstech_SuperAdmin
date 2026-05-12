import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = ({ children }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#f5f5f5] min-h-screen">

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Area */}
      <div className="lg:ml-[230px]">

        {/* Header */}
        <Header setSidebarOpen={setSidebarOpen} />

        {/* Main Content */}
        <main className="p-3 md:p-4">
          {children}
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;