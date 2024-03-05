'use client'

import Link from "next/link";
import { useRouter } from 'next/navigation'
import { TbLogout } from "react-icons/tb";

export default function HeaderInvoices() {
  const router = useRouter()

  const handleLogout = (event) => {
    localStorage.removeItem('auth-token')

    router.push('/') // login
  }

  return (
    <header className="bg-amber-200 py-4 px-6">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">
          <Link
            href='/invoices'
            className="hover:text-orange-800"
          >
            Invoice App
          </Link>
        </h1>
        <nav className="flex gap-3">
          
          <Link
            href='/home'
            className="hover:text-orange-800"
          >
            Budget
          </Link>

          <button
            className="text-red-800 font-medium"
            onClick={handleLogout}
          >
            <TbLogout size={22} />
          </button>
        </nav>
      </div>
    </header>
  )
}
