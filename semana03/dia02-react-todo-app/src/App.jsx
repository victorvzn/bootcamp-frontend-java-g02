import { useState } from "react"

const App = () => {
  const DEFAULT_TODOS = [
    {
      id: '1',
      title: 'Aprender Javascript',
      completed: false
    },
    {
      id: '2',
      title: 'Aprender Java',
      completed: true
    },
    {
      id: '3',
      title: 'Aprender CSS y HTML',
      completed: false
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    // Estamos capturando lo que escribimos en la caja de texto
    // console.log(event.target.value)
    const value = event.target.value

    setInput(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // console.log('Estoy procesando el formulario')

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false,
    }

    setTodos([...todos, newTodo])

    setInput('')
  }

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg p-4 shadow-2xl"
    >
      <h1 className="text-2xl font-bold text-center">TODO APP</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="¿Qué deseas hacer hoy?"
          required
          className="w-full border my-3 p-3 rounded-lg"
          onChange={handleChange}
          value={input}
        />
        {/* {input} */}
      </form>

      <div className="flex justify-between items-center">
        <span className="font-bold">
          2 de 5
        </span>
        <button
          className="bg-blue-500 rounded-lg px-2 py-1 text-white hover:bg-blue-700 duration-300"
        >
          Limpiar tareas completadas
        </button>
      </div>

      <section className="mt-4">
        <ul className="flex flex-col gap-2">
          {todos.map(todo => {
            return (
              <li className="flex" key={todo.id}>
                <input
                  className="mr-2"
                  type="checkbox"
                />
                <div className="w-full flex justify-between items-center">
                  <div className={todo.completed ? 'line-through' : ''}>
                    {todo.title}
                  </div>
                  <button
                    className="bg-red-300 rounded-lg px-1 py-1"
                  >
                    ❌
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <pre className="mt-6 border bg-slate-50 rounded-md">{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}

export default App