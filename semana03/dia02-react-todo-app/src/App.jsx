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
    <main>
      

      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}

export default App