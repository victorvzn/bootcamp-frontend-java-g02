import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header title="Citas médicas para mascotas" />

      <main className="container border border-red-500 mx-auto flex gap-12 py-5">
        <div>FORM</div>
        <div>LIST</div>
      </main>
    </>
  )
}