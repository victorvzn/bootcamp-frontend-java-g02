'use client'

import { useState } from 'react'

export default function MyButton() {
  const [counter, setCounter] = useState(0)

  return (
    <button className='bg-sky-500 p-4' onClick={() => setCounter(counter + 1)}>{counter}</button>
  )
}
