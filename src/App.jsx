import { Route, Routes } from "react-router-dom";
import "./App.css";
import TenantDashBoard from "./Components/TenantDashBoard";
import OwnerDashBoard from "./Pages/OwnerDashBoard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AddNewTennant from "./Components/Owner/AddNewTennant";

function App() {
  return (
    <div className="h-screen p-4 pt-24 bg-[#edede9]  w-screen flex justify-center items-center">
      {" "}
      <Routes>
        {" "}
        <Route element={<Login />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<OwnerDashBoard />} path="/owner/:userId" />
        <Route element={<AddNewTennant />} path="/owner/:userId/newTenant" />
        <Route element={<TenantDashBoard />} path="/tenant" />
        <Route element={<TenantDashBoard />} path="/tenant/:userId" />
      </Routes>
    </div>
  );
}

export default App;
