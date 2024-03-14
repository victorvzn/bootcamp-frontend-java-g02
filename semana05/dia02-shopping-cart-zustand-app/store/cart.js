import { create } from "zustand";

export const useCartStore = create((set) => ({

  // Estado inicial
  cart: [],

  // Actions

  addToCart: (newProduct) => {
    console.log(newProduct)

    set(state => ({ cart: [...state.cart, newProduct] }))
  },

  removeFromCart: () => {},

  cleanCart: () => {}
}))