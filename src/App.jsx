import { Route, Routes } from "react-router-dom";
import "./App.css";
import TenantDashBoard from "./Pages/tenant/TenantDashBoard";
import OwnerDashBoard from "./Pages/owner/OwnerDashBoard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AddNewTennant from "./Components/Owner/AddNewTennant";
import ViewTenant from "./Components/Owner/ViewTenant";

function App() {
  return (
    <div className="h-screen p-4 pt-24 bg-[#edede9]  w-screen flex justify-center items-center">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<OwnerDashBoard />} path="/owner" />
        <Route element={<AddNewTennant />} path="/owner/newTenant" />
        <Route element={<ViewTenant />} path="/owner/viewTenant/:tenantId" />

        <Route element={<TenantDashBoard />} path="/tenant" />
      </Routes>
    </div>
  );
}

export default App;
