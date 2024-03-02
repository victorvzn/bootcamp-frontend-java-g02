'use client'

import { useState } from "react"

export default function BudgetNewPage() {
  const initialState = {
    amount: 0
  }

  const [form, setForm] = useState(initialState)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  return (
    <form className='w-96 mx-auto'>
      <h1 className='text-center text-3xl mb-8'>New Budget</h1>

      <section className='flex flex-col gap-4 bg-slate-100 p-8 shadow-lg'>
        <label className='font-medium'>
          Budget amount
          <input
            type='number'
            name='amount'
            placeholder='0'
            className='border w-full p-3 mt-2'
            onChange={handleChange}
          />
        </label>

        {JSON.stringify(form)}

        <input
          type='submit'
          value='Save Budget'
          className='w-full bg-amber-300 p-3 font-medium cursor-pointer hover:bg-amber-400 duration-300'

        />
      </section>
    </form>
  )
}
