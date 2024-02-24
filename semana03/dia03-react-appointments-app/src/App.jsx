import Header from "./components/Header";
import Appointments from "./pages/Appointments";

export default function App() {
  return (
    <>
      <Header title="Citas médicas para mascotas" subtitle="subtitletext" />

      <main className="container border border-red-500 mx-auto flex gap-12 py-5">
        <Appointments />
      </main>
    </>
  )
}