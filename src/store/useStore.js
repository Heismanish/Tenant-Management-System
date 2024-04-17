import { create } from "zustand";

const useStore = create((set) => ({
  tenants: [],
  setTenants: (tenants) => set({ tenants }),
  userData: {},
  setUserData: (user) => set({ user }),
}));

export default useStore;
