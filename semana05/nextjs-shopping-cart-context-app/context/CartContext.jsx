'use client'

import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (newProduct) => {
    // console.log('estoy agrgando un nuevo producto al carrito....')

    // Aquí es cuando el producto es nuevo en el carrito de compras
    setCart([...cart, newProduct])
  }

  const removeToCart = (id) => {
    const newProducts = cart.filter(product => product.id !== id)

    setCart(newProducts)
  }

  const cleanCart = () => {
    console.log('cleaning...')
    setCart([])
  }


  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart, cleanCart }}>
      {children}
    </CartContext.Provider>
  )
}