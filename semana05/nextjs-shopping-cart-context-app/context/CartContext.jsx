'use client'

import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([1, 2])

  const addToCart = () => {
    console.log('estoy agrgando un nuevo producto al carrito....')
  }

  const removeToCart = () => {}

  const cleanCart = () => {}

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart, cleanCart }}>
      {children}
    </CartContext.Provider>
  )
}