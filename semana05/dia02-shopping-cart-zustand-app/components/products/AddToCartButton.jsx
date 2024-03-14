'use client'

import { useCartStore } from "@/store/cart"

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCartStore()

  return (
    <button
      className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  )
}

export default AddToCartButton