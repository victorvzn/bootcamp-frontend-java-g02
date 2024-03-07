'use client'

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

      <section
        className="bg-slate-700 rounded-lg text-white p-10 mt-5"
      >
        <div className="flex justify-between w-full">
          <div className="text-3xl">
            <span className="text-slate-400">#</span>
            <span className="font-extrabold">XM1156</span>
            <div className="text-xl mt-1 text-slate-400">Graphic Design</div>
          </div>
          <div className="text-sm text-right">
            <div>streetAddress</div>
            <div>city</div>
            <div>postCode</div>
            <div>country</div>
          </div>
        </div>

        <div className="grid grid-cols-3 justify-center w-full">
          <div className="flex flex-col gap-10">
            <div>
              <div className="text-base text-slate-400">Invoice Date</div>
              <div className="text-xl font-semibold">date</div>
            </div>
            <div>
              <div className="text-base text-slate-400">Invoice Due</div>
              <div className="text-xl font-semibold">date</div>
            </div>
          </div>

          <div>
            <div className="text-base text-slate-400">Bill to</div>
            <div className="text-sm">clientName</div>
            <div className="text-sm">streetaddress</div>
            <div className="text-sm">city</div>
            <div className="text-sm">postCode</div>
            <div className="text-sm">country</div>
          </div>

          <div>
            <div className="text-base text-slate-400">Send to</div>
            <div className="text-xl font-semibold">
              email@email.com
            </div>
          </div>
        </div>

        {/* TODO: Terminar de maquetar esta tabla */}

        <table>
          <thead>
            <tr>
              <td>Item Name</td>
              <td>QTY</td>
              <td>Price</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>item.name</td>
              <td>qty</td>
              <td>price</td>
              <td>$ total</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Amount Due</td>
              <td colSpan={2}>
                $ 0.00
              </td>
            </tr>
          </tfoot>
        </table>
      </section>

    </section>
  )
}
