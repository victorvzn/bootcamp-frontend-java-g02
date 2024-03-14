import { create } from "zustand";

export const useCartStore = create((set, get) => ({

  // Estado inicial
  cart: [],

  // Actions

  addToCart: (newProduct) => {
    // console.log(newProduct)
    // console.log(get().cart)

    // ¿Existe ese producto en el carrito de compras?

    const productInCartIndex = get().cart.findIndex(
      product => product.id === newProduct.id
    )

    if (productInCartIndex >= 0) {
      // Aquí es cuando el producto ya existe en el carrito de compras
      const newProducts = get().cart.map(product => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }
        return product
      })
      // console.log(newProducts)
      set(state => ({ cart: newProducts }))
      return
    }

    // Aquí es cuando el producto es nuevo en el carrito de compras
    set(state => ({ cart: [...state.cart, { ...newProduct, quantity: 1 }] }))
  },

  // DONE: Añadir la lógica para remover un producto del carro de compras
  
  removeFromCart: (id) => {
    set(state => {
      const newProducts = state.cart.filter(product => product.id !== id)

      return { cart: newProducts }
    })
  },

  cleanCart: () => set(() => ({ cart: [] }))
}))