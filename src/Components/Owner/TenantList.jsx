import React from "react";

const TenantList = ({ tenants }) => {
  return (
    <div className="p-4 border max-h-[80vh] md:w-[400px] border-gray-700 text-black rounded-lg justify-center overflow-y-auto">
      <h2 className="text-xl text-center">Tenant List</h2>
      <div className="divider h-1 bg-black"></div>
      <div>
        {tenants.map((tenant, index) => (
          <React.Fragment key={tenant.id}>
            <div className="flex justify-between px-4">
              <span>{tenant.name}</span> -
              <span> Room No. {tenant.roomNumber}</span>
            </div>
            {index !== tenants.length - 1 && (
              <div className="divider h-1 bg-gray-200"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TenantList;
