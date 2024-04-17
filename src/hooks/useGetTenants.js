import { useEffect, useState } from "react";
import useTenants from "../store/useTenants";

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

const useGetTenants = () => {
  const [loading, setLoading] = useState(false);
  const { tenants, setTenants } = useTenants();

  useEffect(() => {
    const getTenants = async () => {
      try {
        setLoading(true);
        // Simulating an asynchronous operation with setTimeout
        setTimeout(() => {
          setTenants(tenantList);
          setLoading(false);
        }, 1000); // Simulating 1 second delay
      } catch (error) {
        console.log(error.message);
      }
    };

    getTenants();
  }, []);

  return { loading, tenants };
};

export default useGetTenants;
