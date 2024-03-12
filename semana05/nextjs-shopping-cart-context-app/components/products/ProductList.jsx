import { fetchProducts } from "@/services/products"

const ProductList = async () => {
  const productList = await fetchProducts()

  return (
    <ul>
      {productList.map(product => {
        return (
          <li>{product.title}</li>
        )
      })}
    </ul>
  )
}

export default ProductList