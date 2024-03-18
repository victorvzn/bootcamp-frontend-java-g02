import Header from "@/components/Header"
import ProductList from "@/components/products/ProductList"

export default function Home() {
  return (
    <>
      <Header />

      <main className="py-4 px-6 w-full container mx-auto border pt-20">
        <ProductList />
      </main>
    </>
  )
}
