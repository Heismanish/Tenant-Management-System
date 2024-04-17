import React from "react";
import { Link } from "react-router-dom";

const TenantList = ({ tenants, loading }) => {
  return (
    <div className="p-4 border max-h-[80vh] md:w-[400px] border-gray-700 text-black rounded-lg justify-center overflow-y-auto">
      <h2 className="text-xl text-center">Tenant List</h2>
      <div className="divider h-1 bg-black"></div>
      {loading ? (
        <div className=" flex justify-center items-center">
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <div>
          {tenants.map((tenant, index) => (
            <React.Fragment key={tenant.id}>
              <Link to={`/owner/viewTenant/${tenant.id}`}>
                <div className="flex justify-between px-4 cursor-pointer">
                  <span>{tenant.name}</span> -
                  <span> Room No. {tenant.roomNumber}</span>
                </div>
              </Link>
              {index !== tenants.length - 1 && (
                <div className="divider h-1 bg-gray-200"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default TenantList;
