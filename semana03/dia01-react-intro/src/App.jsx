// COMPONENTE USANDO FUNCTION

// function App () {
//   return (
//     <h1>Hola React nuevamente!</h1>
//   )
// }

// COMPONENTE USANDO ARROW FUNCTIONS

// const App = () => {
//   return <h1>Hola React soy un componente con Arrow Function!</h1>
// }

// COMPONENTE DE REACT USANDO MÚLTIPLES LÍNEAS CON SU ELEMENTO PADRE

// const App = () => {
//   return (
//     <div>
//       <h1>Hola React soy un componente con Arrow Function!</h1>
//       <h2>hola react en la segunda linea</h2>
//     </div>
//   )
// }

// COMPONENTE USANDO FRAGMENTOS (FRAGMENTS) PARA EVITAR RENDERIZAR EN UN ELEMENTO PADRE

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>
//       {/* Comentario en react dentro de JSX */}
//     </>
//   )
// }

// ANIDANDO COMPONENTES DENTRO DE OTROS

function Saludo() {
  return <h1>Hola Victor</h1>
}

function Despedida() {
  return <h1>Adios Victor</h1>
}

const App = () => {
  return (
    <>
      <h1>Hola React!</h1>
      <p>Estoy en el bootcamp!</p>
      {/* Comentario en react dentro de JSX */}

      <Saludo />
      <Despedida />
    </>
  )
}

export default App