import { create } from "zustand";

export const useCartStore = create((set) => ({

  // Estado inicial
  cart: [],

  // Actions

  addToCart: (product) => {
    console.log(product)
  },

  removeFromCart: () => {},

  cleanCart: () => {}
}))