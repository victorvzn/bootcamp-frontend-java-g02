'use client'

// TODO: Agregar la página de registro de usuario tal como se hizo el login.

import Link from "next/link"
import { useRouter } from "next/navigation"

import { useSession, signOut } from "next-auth/react"
import Image from "next/image"

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

        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              <div className="flex items-center gap-4 underline">
                <Image
                  className="rounded-full bg-white"
                  src={session?.user.avatar}
                  width="30"
                  height="30"
                  alt={session?.user.email}
                />
                <span>Hi, {session ? session?.user.email : 'Anon'}</span>
              </div>

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