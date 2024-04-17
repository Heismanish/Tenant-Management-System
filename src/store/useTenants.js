import { create } from "zustand";

const useTenants = create((set) => ({
  tenants: [],
  setTenants: (tenants) => set({ tenants }),
}));

export default useTenants;
