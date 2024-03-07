import Link from "next/link"

import BaseTag from "@/components/shared/BaseTag";
import { TbChevronLeft } from "react-icons/tb";

export default function InvoiceDetail({ params }) {
  const { id } = params

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
        className="flex justify-between items-center bg-slate-700 py-4 px-8 mt-10 rounded-lg"
      >
        <div className="flex items-center text-white gap-2">
          <h3>Status</h3>
          <BaseTag label='pending' bgColor="bg-emerald-400/20" dotColor="text-emerald-400" />
        </div>

        <div className="flex items-center gap-2">
          <Link href="/">
            <button
              type='button'
              className='rounded-full px-5 py-4 font-semibold min-w-[100px] text-white bg-slate-600'
            >
              Edit
            </button>
          </Link>

          <button
            type='button'
            className='rounded-full px-5 py-4 font-semibold min-w-[100px] text-white bg-red-500'
          >
            Delete
          </button>

          <button
            type='button'
            className='rounded-full px-5 py-4 font-semibold min-w-[100px] text-white bg-violet-500'
          >
            Mark as Paid
          </button>
        </div>
      </header>

      {id}
    </section>
  )
}
