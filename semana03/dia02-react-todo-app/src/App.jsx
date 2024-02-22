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

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg p-4 shadow-2xl"
    >
      <h1 className="text-2xl font-bold text-center">TODO APP</h1>

      {/* <pre className="border bg-slate-50 rounded-md">{JSON.stringify(todos, null, 2)}</pre> */}
    </main>
  )
}

export default App