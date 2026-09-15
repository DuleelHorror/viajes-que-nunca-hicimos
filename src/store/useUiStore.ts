import { create } from "zustand";

interface UiState {
  navOpen: boolean;
  setNavOpen: (v: boolean) => void;
  toggleNav: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  navOpen: false,
  setNavOpen: (v) => set({ navOpen: v }),
  toggleNav: () => set((s) => ({ navOpen: !s.navOpen })),
}));
