import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DashboardLayout from "./components/layout/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import LeadSales from "./pages/LeadSales";
import CustomerPage from "./pages/CustomerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />

        {/* Lead Sales */}
        <Route
          path="/lead-sales"
          element={
            <DashboardLayout>
              <LeadSales />
            </DashboardLayout>
          }
        />

        {/* Customer */}
        <Route
          path="/customer"
          element={
            <DashboardLayout>
              <CustomerPage />
            </DashboardLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;