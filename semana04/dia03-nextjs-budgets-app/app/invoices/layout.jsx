'use client'

import HeaderInvoices from "@/components/HeaderInvoices";
import { useRouter } from 'next/navigation'

import { Toaster } from "sonner";

export default function InvoicesLayout({ children }) {
  const router = useRouter()

  const hasToken = Boolean(localStorage.getItem('auth-token')) // undefined -> false, string -> true

  if (!hasToken) {
    router.push('/')
    return
  }

  return (
    <div className="bg-slate-900 h-screen">
      <HeaderInvoices />

      <main className="m-6">
        <div className="container mx-auto">
          {children}
        </div>
      </main>

      <Toaster richColors position="top-right" />
    </div>
  )
}
