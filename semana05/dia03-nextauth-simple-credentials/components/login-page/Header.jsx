'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

import { useSession, signOut } from "next-auth/react"

const LoginHeader = () => {
  const { data: session } = useSession()

  const router = useRouter()

  const handleLogout = () => {
    signOut({ redirect: false })

    router.push('/')
  }

  return (
    <header className="bg-sky-700 text-white py-4 px-6 fixed w-full">
      <div className="container mx-auto flex justify-between">
        <Link href='/'>
          <h1 className="font-bold">Student App</h1>
        </Link>

        <div className="flex gap-4">
        {session?.user ? (
          <>
            <Link href="/dashboard">Dashboard</Link>

            <button onClick={handleLogout}>Logout</button>
          </>
        ): (
          <>
            <Link href="/">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}

        </div>
      </div>
    </header>
  )
}

export default LoginHeader