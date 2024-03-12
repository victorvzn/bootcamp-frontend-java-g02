import { fetchProducts } from "@/services/products"

import ProductItem from "./ProductItem"

const ProductList = async () => {
  const productList = await fetchProducts()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {productList.map(
        product => <ProductItem product={product} />
      )}
    </div>
  )
}

export default ProductList