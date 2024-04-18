// import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import OwnerDetails from "../../Components/Owner/OwnerDetails";
import NewTenant from "../../Components/Owner/NewTenant";
import TenantList from "../../Components/Owner/TenantList";
import MaintainenceLogs from "../../Components/Owner/MaintainenceLogs";
import useGetTenants from "../../hooks/useGetTenants.js";

import { useAuth } from "../../Context/AuthProvider.jsx";

const DashBoard = () => {
  const { loading, tenants } = useGetTenants();
  const { userData } = useAuth();
  // Dummy data for OwnerDetails component
  const ownerInfo = {
    ownerName: userData.name,
    totalRooms: 10,
    availableRooms: 5,
    otherInfo: "Some other info about the owner",
  };

  const recentMaintenanceData = [
    { log: "Replaced air filters", roomNumber: 101 },
    { log: "Checked heating system", roomNumber: 102 },
    { log: "Cleaned gutters", roomNumber: 103 },
  ];

  return (
    <div className="w-full h-full flex lg:gap-20 justify-center ">
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <OwnerDetails propertyInfo={ownerInfo} /> <NewTenant />
        </div>
        <div className="flex gap-5">
          <MaintainenceLogs recentMaintenanceData={recentMaintenanceData} />
        </div>
      </div>
      <TenantList tenants={tenants} loading={loading} />
    </div>
  );
};

export default DashBoard;
