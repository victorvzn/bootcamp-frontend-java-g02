'use client'

import { useEffect, useState } from "react"

import { createBudget, fetchBudgets } from "@/services/budgets"

export default function BudgetNewPage() {
  const initialState = {
    amount: 0
  }

  const [form, setForm] = useState(initialState)

  useEffect(() => {
    // Este useEffect solo se ejecuta al crearse el componente BudgetNewPage
    console.log('Me ejecuta la primera vez')

    fetchBudgets() // Devuelve una promesa
      .then(data => { //
        const [budget] = data

        localStorage.setItem('budget-data', JSON.stringify(budget))
        setForm({
          amount: budget.amount
        })
      })
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSave = async (event) => {
    event.preventDefault();

    const data = await createBudget()

    console.log(data)
    
    // console.log('Guardando budget...')
  }

  return (
    <form className='w-96 mx-auto' onSubmit={handleSave}>
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
            value={form.amount}
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
