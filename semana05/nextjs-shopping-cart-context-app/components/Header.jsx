'use client'

import { CartContext } from "@/context/CartContext"
import { useContext, useState } from "react"

const Header = () => {
  const { cart } = useContext(CartContext)

  const [open, setOpen] = useState(false)

  return (
    <header className="bg-lime-600 text-white py-4 px-6 fixed w-full">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">
          Shopping Cart
        </h1>

        <button onClick={() => setOpen(!open)}>Cart</button>

        <div
          className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 text-black ${open ? 'transform-none' : 'translate-x-full'}`}
        >
          <div className="flex justify-between">
            <h5 className="flex text-base font-semibold text-gray-500">Cart</h5>

            <button onClick={() => setOpen(false)}>❌</button>
          </div>

          <pre>{JSON.stringify(cart.map(p => ({ title: p.title })), null, 2)}</pre>
        </div>
      </div>
    </header>
  )
}

export default Header