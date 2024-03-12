import { fetchProducts } from "@/services/products"

export default async function Home() {
  const productList = await fetchProducts()

  return (
    <>
      <h1 className="text-center text-3xl">
        Shopping Cart + context
      </h1>

      <ul>
        {productList.map(product => {
          return (
            <li>{product.title}</li>
          )
        })}
      </ul>
    </>
  )
}
