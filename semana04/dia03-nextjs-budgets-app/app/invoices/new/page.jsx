import Link from 'next/link'

import { TbChevronLeft } from "react-icons/tb";

export default function InvoiceNewPage() {
  return (
    <section className="container m-auto flex flex-col gap-5">
      <Link
        href='/invoices'
        className="text-white font-bold flex gap-5 items-center"
      >
        <TbChevronLeft size={20} className="text-violet-400" />
        Go back
      </Link>

      <header
        className="pt-4 pb-8 mt-10 rounded-lg"
      >
        <h1 className='text-4xl font-extrabold text-white'>New Invoice</h1>
      </header>

      <div
        className="bg-slate-700 rounded-lg text-white p-10 flex flex-col gap-10"
      >
        <form>
          <h4 className='text-violet-500 font-bold mb-5'>Bill From</h4>

          <label className='text-white flex flex-col gap-2 mb-4'>
            <span>Street Address</span>
            <input
              className='w-full py-4 px-5 rounded-lg bg-slate-800'
              type='text'
              name='bill_from_street_address'
              placeholder='Ex. xyz 123'
            />
          </label>

          <div className='flex justify-between gap-6'>
            <label className='text-white flex flex-col gap-2 mb-4'>
              <span>City</span>
              <input
                className='w-full py-4 px-5 rounded-lg bg-slate-800'
                type='text'
                name='bill_from_city'
                placeholder='Ex. Chiclayo'
              />
            </label>

            <label className='text-white flex flex-col gap-2 mb-4'>
              <span>Post Code</span>
              <input
                className='w-full py-4 px-5 rounded-lg bg-slate-800'
                type='text'
                name='bill_from_postCode'
                placeholder='Ex. ABC123'
              />
            </label>

            <label className='text-white flex flex-col gap-2 mb-4'>
              <span>Country</span>
              <input
                className='w-full py-4 px-5 rounded-lg bg-slate-800'
                type='text'
                name='bill_from_country'
                placeholder='Ex. Peru'
              />
            </label>
          </div>

          <h4 className='text-violet-500 font-bold mb-5 mt-8'>Bill To</h4>

          <label className='text-white flex flex-col gap-2 mb-4'>
            <span>Client's Name</span>
            <input
              className='w-full py-4 px-5 rounded-lg bg-slate-800'
              type='text'
              name='bill_to_client_name'
              placeholder='Ex. Doe'
            />
          </label>

          <label className='text-white flex flex-col gap-2 mb-4'>
            <span>Client's Name</span>
            <input
              className='w-full py-4 px-5 rounded-lg bg-slate-800'
              type='text'
              name='bill_to_client_name'
              placeholder='Ex. Doe'
            />
          </label>

          <label className='text-white flex flex-col gap-2 mb-4'>
            <span>Client's Name</span>
            <input
              className='w-full py-4 px-5 rounded-lg bg-slate-800'
              type='text'
              name='bill_to_client_name'
              placeholder='Ex. Doe'
            />
          </label>

          <div className='flex justify-between gap-6'>
            <label className='text-white flex flex-col gap-2 mb-4'>
              <span>Client's Name</span>
              <input
                className='w-full py-4 px-5 rounded-lg bg-slate-800'
                type='text'
                name='bill_to_client_name'
                placeholder='Ex. Doe'
              />
            </label>

            <label className='text-white flex flex-col gap-2 mb-4'>
              <span>Client's Name</span>
              <input
                className='w-full py-4 px-5 rounded-lg bg-slate-800'
                type='text'
                name='bill_to_client_name'
                placeholder='Ex. Doe'
              />
            </label>

            <label className='text-white flex flex-col gap-2 mb-4'>
              <span>Client's Name</span>
              <input
                className='w-full py-4 px-5 rounded-lg bg-slate-800'
                type='text'
                name='bill_to_client_name'
                placeholder='Ex. Doe'
              />
            </label>
          </div>

          <div className='grid grid-cols-2 gap-6 items-center mt-10'>
            <label className='text-white flex flex-col gap-2 mb-4'>
              <span>Client's Name</span>
              <input
                className='w-full py-4 px-5 rounded-lg bg-slate-800'
                type='text'
                name='bill_to_client_name'
                placeholder='Ex. Doe'
              />
            </label>

            <label className='text-white flex flex-col gap-2 mb-4'>
              <span>Client's Name</span>
              <input
                className='w-full py-4 px-5 rounded-lg bg-slate-800'
                type='text'
                name='bill_to_client_name'
                placeholder='Ex. Doe'
              />
            </label>
          </div>

          <label className='text-white flex flex-col gap-2 mb-4'>
            <span>Client's Name</span>
            <input
              className='w-full py-4 px-5 rounded-lg bg-slate-800'
              type='text'
              name='bill_to_client_name'
              placeholder='Ex. Doe'
            />
          </label>

          <h5 className='text-violet-100 text-xl font-bold mb-5 mt-10'>Item List</h5>

          {/* TODO: terminar de maquetar el listado de items */}

          <div className='flex justify-end gap-2 mt-10'>
            <button className='rounded-full px-5 py-4 font-semibold min-w-[100px] bg-slate-500'>
              Cancel
            </button>

            <button className='rounded-full px-5 py-4 font-semibold min-w-[100px] bg-violet-500'>
              Save Changes
            </button>
          </div>
        </form>

      </div>
    </section>
  )
}
