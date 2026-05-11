import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
// import Dashboard from "./Pages/Dashboard";
import Subscription from "./Pages/Subscription";
import CustomerPage from "./Pages/Customer";
// import LeadPage from "./Pages/Lead";


function App() {
  return (
    <Layout>
      <Routes>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/customer" element={<CustomerPage/>}></Route>
        {/* <Route path="/lead" element={<LeadPage/>}></Route> */}
      </Routes>
    </Layout>
  );
}

export default App;