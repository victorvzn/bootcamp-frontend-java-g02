'use client'

import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (newProduct) => {
    // console.log('estoy agrgando un nuevo producto al carrito....')

    const productInCartIndex = cart.findIndex(
      product => product.id === newProduct.id
    )

    console.log(productInCartIndex)

    // Aquí es cuando el producto ya existe en el carrito de compras
    if (productInCartIndex >= 0) {
      const newProducts = cart.map(product => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }
        return product
      })

      console.log(newProducts)

      setCart([...newProducts])

      return
    }

    // Aquí es cuando el producto es nuevo en el carrito de compras
    setCart([
      ...cart,
      {
        ...newProduct,
        quantity: 1
      }
    ])
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