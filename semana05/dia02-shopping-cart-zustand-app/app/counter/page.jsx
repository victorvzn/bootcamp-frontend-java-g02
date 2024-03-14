'use client'

import { useCounterStore } from "@/store/counter"

const page = () => {
  // const count = useCounterStore(state => state.count)
  // const increment = useCounterStore(state => state.increment)
  // const decrement = useCounterStore(state => state.decrement)

  const { count, increment, decrement } = useCounterStore()

  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <button
        className="px-4 py-2 bg-emerald-600 text-white font-bold"
        onClick={increment}
      >+1</button>
      <span className="text-3xl text-center">{count}</span>
      <button
        className="px-4 py-2 bg-emerald-600 text-white font-bold"
        onClick={decrement}
      >-1</button>
    </div>
  )
}

export default page