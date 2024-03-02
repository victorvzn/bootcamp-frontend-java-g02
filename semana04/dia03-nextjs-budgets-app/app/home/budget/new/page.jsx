'use client'

import { useEffect, useState } from "react"

import { updateBudget, fetchBudgets } from "@/services/budgets"
import { toast } from "sonner"
import { TbCirclePlus } from "react-icons/tb";

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
        const budget = data[0]

        if (budget) {
          localStorage.setItem('budget-data', JSON.stringify(budget))
          setForm({
            amount: budget.amount
          })
        }
      })
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSave = async (event) => {
    event.preventDefault();

    const budgetData = JSON.parse(localStorage.getItem('budget-data'))

    const budgetId = budgetData.id

    const formData = {
      amount: Number(form.amount)
    }

    const data = await updateBudget(budgetId, formData)

    if (!data.id) {
      // mostramos un mensaje de error al usuario
      toast.error('Tuvimos problemas al guardar el budget.')
    }

    // mostramos un mensaje de ok al usuario
    toast.success('Se actualizó el budget correctamente.')
    
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

        <button
          className='w-full bg-amber-300 p-3 font-medium cursor-pointer hover:bg-amber-400 duration-300 flex justify-center items-center gap-2'
        >
          <TbCirclePlus size={20} />
          Save Budget
        </button>
      </section>
    </form>
  )
}
