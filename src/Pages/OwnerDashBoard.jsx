import { useParams } from "react-router-dom";
import OwnerDetails from "../Components/Owner/OwnerDetails";
import NewTenant from "../Components/Owner/NewTenant";
import TenantList from "../Components/Owner/TenantList";
import MaintainenceLogs from "../Components/Owner/MaintainenceLogs";

const DashBoard = () => {
  const { userId } = useParams();
  // Dummy data for OwnerDetails component
  const ownerInfo = {
    ownerName: "Subhash",
    totalRooms: 10,
    availableRooms: 5,
    otherInfo: "Some other info about the owner",
  };
  const tenantList = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
    { id: 4, name: "David", email: "david@example.com" },
    { id: 5, name: "Eve", email: "eve@example.com" },
    { id: 6, name: "Frank", email: "frank@example.com" },
    { id: 7, name: "Grace", email: "grace@example.com" },
    { id: 8, name: "Harry", email: "harry@example.com" },
    { id: 9, name: "Ivy", email: "ivy@example.com" },
    { id: 10, name: "Jack", email: "jack@example.com" },
  ];
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
      <TenantList tenants={tenantList} />
    </div>
  );
};

export default DashBoard;
