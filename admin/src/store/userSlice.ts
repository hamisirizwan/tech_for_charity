import { create } from "zustand";

interface UserState {
  isAuthenticated: boolean;
  user: any;
  login: (data: any) => void;
  persist: (data: any) => void;
  logout: () => void;
}

const useAuthStore = create<UserState>()((set) => ({
  isAuthenticated: false,
  user: null,
  login: (data) => {
    set({ isAuthenticated: true, user: data.user });
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", JSON.stringify(data.token));

  },
  persist: (user) => {set(() => ({ isAuthenticated: true, user:user }))},
  logout: () => {
    set(() => ({ isAuthenticated: false, user: null }));
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
}));

export default useAuthStore;
