'use client'

import { CartContext } from "@/context/CartContext"
import { useContext, useState } from "react"

const Header = () => {
  const { cart, removeToCart, cleanCart } = useContext(CartContext)

  const [open, setOpen] = useState(false)

  return (
    <header className="bg-lime-600 text-white py-4 px-6 fixed w-full">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">
          Shopping Cart
        </h1>

        {/* TODO: Agregar al lado del button Cart el número de productos en el carrito de compras. */}

        <button className="relative" onClick={() => setOpen(!open)}>
          Cart
          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -left-6 dark:border-gray-900">?</div>
        </button>

        <div
          className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 text-black ${open ? 'transform-none' : 'translate-x-full'}`}
        >
          <div className="flex justify-between">
            <h5 className="flex text-base font-semibold text-gray-500">
              Cart
            </h5>

            <button onClick={() => setOpen(false)}>❌</button>
          </div>

          <div className="py-3">
            <button
              className="w-full text-slate-900 bg-red-400 hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              onClick={() => cleanCart()}
            >
              Clean Cart
            </button>
          </div>

          {/* <pre>{JSON.stringify(cart.map(p => ({ title: p.title })), null, 2)}</pre> */}

          <div className="flex flex-col gap-1 mt-4">
            {cart && cart.map(product => {
              return (
                <button
                  className="text-slate-900 bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  key={product.id}
                  onClick={() => removeToCart(product.id)}
                >
                  {product.title} - ${product.price} (Qty: {product.quantity ?? 0})
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header