'use client'

import Link from "next/link"

import BaseTag from "@/components/shared/BaseTag";
import { TbChevronLeft } from "react-icons/tb";
import { useEffect, useState } from "react"
import { deleteInvoice, getInvoice } from "@/services/invoices";
import { formatDate } from "@/utils";
import Swal from 'sweetalert2'
import { toast } from "sonner"
import { useRouter } from "next/navigation";

export default function InvoiceDetail({ params }) {
  const { id } = params
  const [invoice, setInvoice] = useState()
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    getInvoice(id)
      .then(data => setInvoice(data))
  }, [])

  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true)

        console.log('Eliminando invoice...', id)
        deleteInvoice(id)
          .then(res => {
            toast.success('Se eliminó el invoice correctamente.')
            router.push('/invoices')
          })
          .catch(err => {
            toast.error('Hubo un error al eliminar.')
          })
          .finally(() => {
            setLoading(false)
          })
      }
    });
  }

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
          <BaseTag label={invoice?.status} bgColor="bg-emerald-400/20" dotColor="text-emerald-400" />
        </div>

        <div className="flex items-center gap-2">
          <Link href={`/invoices/${id}/edit`}>
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
            onClick={() => handleDelete(invoice.id)}
          >
            Delete {Number(loading)}
          </button>

          {/* TODO: Necesitamos cambiar el estado a Paid después de presionar el botón */}

          <button
            type='button'
            className='rounded-full px-5 py-4 font-semibold min-w-[100px] text-white bg-violet-500'
          >
            Mark as Paid
          </button>
        </div>
      </header>

      <section
        className="bg-slate-700 rounded-lg text-white p-10 mt-5 flex flex-col gap-10"
      >
        <div className="flex justify-between w-full">
          <div className="text-3xl">
            <span className="text-slate-400">#</span>
            <span className="font-extrabold uppercase">{invoice?.code}</span>
            <div className="text-xl mt-1 text-slate-400">
              {invoice?.project_description}
            </div>
          </div>
          <div className="text-sm text-right">
            <div>{invoice?.bill_from_street_address}</div>
            <div>{invoice?.bill_from_city}</div>
            <div>{invoice?.bill_from_postCode}</div>
            <div>{invoice?.bill_from_country}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 justify-center w-full">
          <div className="flex flex-col gap-10">
            <div>
              <div className="text-base text-slate-400">Invoice Date</div>
              <div className="text-xl font-semibold">
                {formatDate(invoice?.date, 'medium')}
              </div>
            </div>
            <div>
              <div className="text-base text-slate-400">Invoice Due</div>
              <div className="text-xl font-semibold">
                {formatDate(invoice?.date, 'medium')}
              </div>
            </div>
          </div>

          <div>
            <div className="text-base text-slate-400">Bill to</div>
            <div className="text-xl font-extrabold">{invoice?.bill_to_client_name}</div>
            <div className="text-base ">{invoice?.bill_to_street_address}</div>
            <div className="text-base ">{invoice?.bill_to_city}</div>
            <div className="text-base ">{invoice?.bill_to_post_code}</div>
            <div className="text-base ">{invoice?.bill_to_country}</div>
          </div>

          <div>
            <div className="text-base text-slate-400">Send to</div>
            <div className="text-xl font-semibold">
              {invoice?.bill_to_client_email}
            </div>
          </div>
        </div>

        {/* DONE: Terminar de maquetar esta tabla */}

        <table className="bg-slate-600 w-full rounded-lg overflow-hidden">
          <thead>
            <tr>
              <td className="p-4 text-base font-normal">Item Name</td>
              <td className="p-4 text-base font-normal text-center w-44">QTY</td>
              <td className="p-4 text-base font-normal text-center w-44">Price</td>
              <td className="p-4 text-base font-normal text-right w-44">Total</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-sm font-bold">-</td>
              <td className="p-4 text-sm font-bold text-center w-44">0</td>
              <td className="p-4 text-sm font-bold text-center w-44">$ 0.00</td>
              <td className="p-4 text-sm font-bold text-right w-44">$ 0.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-black">
              <td className="p-4 text-lg font-normal" colSpan={2}>Amount Due</td>
              <td className="p-4 text-4xl font-bold text-right" colSpan={2}>
                $ 0.00
              </td>
            </tr>
          </tfoot>
        </table>
      </section>

      <pre className="text-white">{JSON.stringify(invoice, null, 2)}</pre>

    </section>
  )
}
