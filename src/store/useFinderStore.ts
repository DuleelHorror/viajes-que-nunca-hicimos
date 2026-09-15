import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FINDER_DEFAULTS, type FinderInput } from "@/lib/finder/rank";

interface FinderState {
  input: FinderInput;
  patch: (p: Partial<FinderInput>) => void;
  reset: () => void;
}

export const useFinderStore = create<FinderState>()(
  persist(
    (set) => ({
      input: FINDER_DEFAULTS,
      patch: (p) => set((s) => ({ input: { ...s.input, ...p } })),
      reset: () => set({ input: FINDER_DEFAULTS }),
    }),
    { name: "vq_finder_v2" },
  ),
);
