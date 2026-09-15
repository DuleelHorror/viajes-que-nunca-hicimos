import { create } from "zustand";
import { persist } from "zustand/middleware";

export const COMPARE_MAX = 4;

interface CompareState {
  ids: string[];
  toggle: (id: string) => void;
  remove: (id: string) => void;
  set: (ids: string[]) => void;
  clear: () => void;
  has: (id: string) => boolean;
}

/** Cesta de comparación (2-4 países), persistida en localStorage. */
export const useCompareStore = create<CompareState>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) =>
        set((s) => {
          if (s.ids.includes(id)) return { ids: s.ids.filter((x) => x !== id) };
          if (s.ids.length >= COMPARE_MAX) return { ids: [...s.ids.slice(1), id] };
          return { ids: [...s.ids, id] };
        }),
      remove: (id) => set((s) => ({ ids: s.ids.filter((x) => x !== id) })),
      set: (ids) => set({ ids: ids.slice(0, COMPARE_MAX) }),
      clear: () => set({ ids: [] }),
      has: (id) => get().ids.includes(id),
    }),
    { name: "vq_compare_v1" },
  ),
);
