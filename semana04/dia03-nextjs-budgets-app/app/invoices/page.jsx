'use client'

import { TbSquareRoundedPlus } from "react-icons/tb";
import { TbChevronRight } from "react-icons/tb";

export default function InvoicesPage() {
  return (
    <>
      <header className="flex justify-between items-center container mx-auto bg-slate-900 my-5">
        <div className="text-white">
          <h1 className="text-4xl font-extrabold">Invoices</h1>
          <span>There are 7 total invoices</span>
        </div>

        <div>
          <button className="bg-indigo-400 rounded-full px-5 py-3 font-extrabold text-white flex justify-center items-center gap-4">
            <TbSquareRoundedPlus size="2rem" />
            New Invoice
          </button>
        </div>
      </header>

      <section>
        <article className="text-white2">
          <div>
            <span>#</span>
            <span>RT3080</span>
          </div>
          <div>Due 19 Feb 2024</div>
          <div>Jensen Huang</div>
          <div>$ 1,800.90</div>
          <div>
            <div>
              <span>•</span>
              <span>Pending</span>
            </div>
          </div>
          <div>
            <TbChevronRight />
          </div>
        </article>
      </section>
    </>
  )
}
