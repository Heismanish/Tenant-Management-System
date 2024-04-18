import { create } from "zustand";

const useStore = create((set) => ({
  tenants: [],
  setTenants: (tenants) => set({ tenants }),
}));

export default useStore;
