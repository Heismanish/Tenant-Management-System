import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import TenantDashBoard from "./Pages/tenant/TenantDashBoard";
import OwnerDashBoard from "./Pages/owner/OwnerDashBoard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AddNewTennant from "./Components/Owner/AddNewTennant";
import ViewTenant from "./Components/Owner/ViewTenant";
import { useAuth } from "./Context/AuthProvider";

function App() {
  const { auth, userData } = useAuth();
  console.log(auth, userData);
  // Function to check if user is authenticated
  const isAuthenticated = () => auth;

  // Function to check user role (assuming 'role' exists in userData)
  const isOwner = () => userData?.role === "owner";

  return (
    <div className="h-screen p-4 pt-24 bg-[#edede9]  w-screen flex justify-center items-center">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Signup />} path="/signup" />

        {/* Protected Routes (require authentication) */}
        <Route
          element={
            isAuthenticated() && isOwner() ? (
              <OwnerDashBoard />
            ) : (
              <Navigate to="/" replace />
            )
          }
          path="/owner"
        />
        <Route
          element={
            isAuthenticated() && isOwner() ? (
              <AddNewTennant />
            ) : (
              <Navigate to="/" replace />
            )
          }
          path="/owner/newTenant"
        />
        <Route
          element={
            isAuthenticated() && isOwner() ? (
              <ViewTenant />
            ) : (
              <Navigate to="/" replace />
            )
          }
          path="/owner/viewTenant/:tenantId"
        />
        <Route
          element={
            isAuthenticated() ? (
              <TenantDashBoard />
            ) : (
              <Navigate to="/" replace />
            )
          }
          path="/tenant"
        />

        {/* Handle unmatched routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
