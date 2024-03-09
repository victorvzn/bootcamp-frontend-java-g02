import Link from "next/link";
import { TbSquareRoundedPlus } from "react-icons/tb";

export default function InvoicesHeader() {
  return (
    <header className="flex justify-between items-center container mx-auto bg-slate-900 mt-5 mb-16">
      <div className="text-white">
        <h1 className="text-4xl font-extrabold">Invoices</h1>
        <span>There are 7 total invoices</span>
      </div>

      <Link href='/invoices/new'>
        <button className="bg-indigo-400 rounded-full px-5 py-3 font-extrabold text-white flex justify-center items-center gap-4">
          <TbSquareRoundedPlus size="2rem" />
          New Invoice
        </button>
      </Link>
    </header>
  )
}
