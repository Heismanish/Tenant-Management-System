import React from "react";
import { MdPageview } from "react-icons/md";

const MaintainenceLogs = ({ recentMaintenanceData }) => {
  return (
    <div className="p-4 border border-gray-700 text-black flex flex-col gap-5 rounded-lg justify-center">
      <h1 className="text-xl font-bold">Maintenance Logs</h1>
      {recentMaintenanceData.map((log, index) => (
        <div key={index} className="flex items-center">
          <span>
            {log.log} - Room No. {log.roomNumber}
          </span>
        </div>
      ))}
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View All Maintenance Logs
      </button>
    </div>
  );
};

export default MaintainenceLogs;
