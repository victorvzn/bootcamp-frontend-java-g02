'use client'

import { useEffect, useState } from "react";

import { fetchInvoices } from "@/services/invoices";

import InvoicesHeader from "@/components/invoices/InvoicesHeader";
import InvoicesList from "@/components/invoices/InvoicesList";

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    // console.log('Yo me ejecuto solo la primera vez que se renderiza este componente.')
    fetchInvoices()
      .then(invoices => setInvoices(invoices))
  }, [])

  return (
    <>
      <InvoicesHeader />

      <InvoicesList invoices={invoices} />

      {/* <pre className="text-white">
        {JSON.stringify(invoices, null, 2)}
      </pre> */}
    </>
  )
}
