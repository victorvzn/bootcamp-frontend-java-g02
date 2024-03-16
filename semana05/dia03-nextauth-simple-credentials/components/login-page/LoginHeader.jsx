'use client'

import Link from "next/link"

const LoginHeader = () => {
  const handleLogout = () => {}

  return (
    <header className="bg-sky-700 text-white py-4 px-6 fixed w-full">
      <div className="container mx-auto flex justify-between">
        <Link href='/'>
          <h1 className="font-bold">Student App</h1>
        </Link>

        <div className="flex gap-4">
          <Link href="/dashboard">Dashboard</Link>

          <button onClick={handleLogout}>Logout</button>

          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </header>
  )
}

export default LoginHeader