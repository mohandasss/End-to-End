import { create } from "zustand";
import { persist } from "zustand/middleware";
type logincredentials = {
  username: string;
  password: string;
  setuser: (username: string, password: string) => void;
};

export const useAuthContext = create<logincredentials>()(
  persist(
    (set) => ({
      username: "",
      password: "",
      setuser: (username, password) => set({ username, password }),
    }),

    {
      name: "auth-key",
    },
  ),
);
