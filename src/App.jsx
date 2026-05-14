import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DashboardLayout  from "./components/layout/DashboardLayout";
import Dashboard        from "./pages/Dashboard";
import LeadSales        from "./pages/LeadSales";
import CustomerPage     from "./pages/CustomerPage";
import SubscriptionPage from "./pages/SubscriptionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <DashboardLayout><Dashboard /></DashboardLayout>
        }/>

        <Route path="/lead-sales" element={
          <DashboardLayout><LeadSales /></DashboardLayout>
        }/>

        <Route path="/customer" element={
          <DashboardLayout><CustomerPage /></DashboardLayout>
        }/>

        <Route path="/subscription" element={
          <DashboardLayout><SubscriptionPage /></DashboardLayout>
        }/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;