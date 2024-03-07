import { formatDate, formatNumber } from "@/utils";
import { TbChevronRight } from "react-icons/tb";

export default function InvoicesList({ invoices }) {
  return (
    <section className="container m-auto flex flex-col gap-5">
      {invoices.map(invoice => {
        return (
          <article className="text-white bg-slate-700 p-4 rounded-lg flex justify-between items-center  text-base gap-3">
            <div className="w-20">
              <span className="text-slate-400">#</span>
              <span className="font-extrabold uppercase">{invoice.code}</span>
            </div>
            <div className="w-44 font-normal">{formatDate(invoice.date)}</div>
            <div className="w-44 font-normal">{invoice.project_description}</div>
            <div className="w-44 font-extrabold text-2xl">
              {invoice.currency_symbol} {formatNumber(invoice.grand_total)}
            </div>
            <div>
              <div className="py-2 rounded-md text-center capitalize font-extrabold min-w-[120px] bg-emerald-400/20 text-emerald-400 flex justify-center items-center">
                <span className="text-3xl leading-3 mr-2">•</span>
                <span>{invoice.status}</span>
              </div>
            </div>
            <div className="w-12 h-12 flex justify-center items-center cursor-pointer rounded-full hover:bg-slate-600 hover:duration-300">
              <TbChevronRight />
            </div>
          </article>
        )
      })}
        
      </section>
  )
}
