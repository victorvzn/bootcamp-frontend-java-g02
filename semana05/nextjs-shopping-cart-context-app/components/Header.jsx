'use client'

import { CartContext } from "@/context/CartContext"
import { useContext } from "react"

const Header = () => {
  const { cart } = useContext(CartContext)

  return (
    <header className="bg-lime-600 text-white py-4 px-6 fixed w-full">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">
          Shopping Cart
        </h1>

        <button>Cart</button>

        <div>{JSON.stringify(cart)}</div>
      </div>
    </header>
  )
}

export default Header