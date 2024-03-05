'use client'

import Header from "@/components/Header";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

import { Toaster } from "sonner";

export default function HomeLayout({ children }) {
  const router = useRouter()

  const hasToken = Boolean(typeof window !== "undefined" ? localStorage.getItem('auth-token') : false) // undefined -> false, string -> true

  useEffect(() => {
    if (!hasToken) {
      router && router.push('/')
      return
    }
  }, [])

  return (
    <>
      <Header />

      <main className="m-6">
        <div className="container mx-auto">
          {children}
        </div>
      </main>

      <Toaster richColors position="top-right" />
    </>
  )
}
