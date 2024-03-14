import { create } from "zustand";

export const useCounterStore = create((set) => ({
  // Estado inicial
  count: 10,

  // Actions
  increment: () => set(state => ({ count: state.count + 1 })),
  
  decrement: () => set(state => ({ count: state.count - 1 })),
}))
