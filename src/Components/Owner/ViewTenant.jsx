import React from "react";
import { useParams } from "react-router-dom";
import useTenants from "../../store/useTenants";

const ViewTenant = () => {
  const { tenantId } = useParams();
  const { tenants } = useTenants();

  // Find the tenant with the matching ID
  const tenant = tenants.find((tenant) => tenant.id === parseInt(tenantId));

  return (
    <div>
      {tenant ? (
        <div>
          <h2>Tenant Details</h2>
          <p>Name: {tenant.name}</p>
          <p>Email: {tenant.email}</p>
        </div>
      ) : (
        <p>Tenant not found</p>
      )}
    </div>
  );
};

export default ViewTenant;
