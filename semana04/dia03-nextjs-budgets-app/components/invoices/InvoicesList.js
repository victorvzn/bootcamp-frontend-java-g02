import { TbChevronRight } from "react-icons/tb";

export default function InvoicesList() {
  return (
    <section className="container m-auto flex flex-col gap-5">
        <article className="text-white bg-slate-700 p-4 rounded-lg flex justify-between items-center  text-base gap-3">
          <div className="w-20">
            <span className="text-slate-400">#</span>
            <span className="font-extrabold uppercase">rt3080</span>
          </div>
          <div className="w-44 font-normal">Due 19 Feb 2024</div>
          <div className="w-44 font-normal">Jensen Huang</div>
          <div className="w-44 font-extrabold text-2xl">$ 1,800.90</div>
          <div>
            <div className="py-2 rounded-md text-center capitalize font-extrabold min-w-[120px] bg-emerald-400/20 text-emerald-400 flex justify-center items-center">
              <span className="text-3xl leading-3 mr-2">•</span>
              <span>Pending</span>
            </div>
          </div>
          <div className="w-12 h-12 flex justify-center items-center cursor-pointer rounded-full hover:bg-slate-600 hover:duration-300">
            <TbChevronRight />
          </div>
        </article>
        <article className="text-white bg-slate-700 p-4 rounded-lg flex justify-between items-center  text-base gap-3">
          <div className="w-20">
            <span className="text-slate-400">#</span>
            <span className="font-extrabold uppercase">rt3080</span>
          </div>
          <div className="w-44 font-normal">Due 19 Feb 2024</div>
          <div className="w-44 font-normal">Jensen Huang</div>
          <div className="w-44 font-extrabold text-2xl">$ 1,800.90</div>
          <div>
            <div className="py-2 rounded-md text-center capitalize font-extrabold min-w-[120px] bg-orange-400/20 text-orange-400 flex justify-center items-center">
              <span className="text-3xl leading-3 mr-2">•</span>
              <span>Pending</span>
            </div>
          </div>
          <div className="w-12 h-12 flex justify-center items-center cursor-pointer rounded-full hover:bg-slate-600 hover:duration-300">
            <TbChevronRight />
          </div>
        </article>
        <article className="text-white bg-slate-700 p-4 rounded-lg flex justify-between items-center  text-base gap-3">
          <div className="w-20">
            <span className="text-slate-400">#</span>
            <span className="font-extrabold uppercase">rt3080</span>
          </div>
          <div className="w-44 font-normal">Due 19 Feb 2024</div>
          <div className="w-44 font-normal">Jensen Huang</div>
          <div className="w-44 font-extrabold text-2xl">$ 1,800.90</div>
          <div>
            <div className="py-2 rounded-md text-center capitalize font-extrabold min-w-[120px] bg-slate-400/20 text-slate-200 flex justify-center items-center">
              <span className="text-3xl leading-3 mr-2">•</span>
              <span>Pending</span>
            </div>
          </div>
          <div className="w-12 h-12 flex justify-center items-center cursor-pointer rounded-full hover:bg-slate-600 hover:duration-300">
            <TbChevronRight />
          </div>
        </article>
      </section>
  )
}
