"use client"

import { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { signIn, useSession, signOut } from "next-auth/react"

const LoginForm = () => {
  // const { data: session } = useSession()
  const router = useRouter()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async (event) => {
    event.preventDefault();
    
    const { email, password } = form

    const responseNextAuth = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    console.log(responseNextAuth)

    router.push('/dashboard')
  }

  return (
    <>
      <main className="container w-[400px] h-screen mx-auto space-y-6 flex flex-col justify-center">
        <div className="mx-auto flex w-full flex-col justify-center">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-4xl font-semibold">Login</h1>
            <p className="text-sm text-slate-600">Enter your email below to login your account.</p>
          </div>

          <form
            className="flex flex-col gap-2 p-8"
            onSubmit={handleLogin}
          >
            <label className="font-bold">Email</label>
            <input
              className="border p-3 shadow-sm rounded-md"
              type="email"
              onChange={(event) => setForm(prev => ({ ...prev, email: event.target.value }))}
              value={form.email}
            />
            <label className="font-bold">Password</label>
            <input
              className="border p-3 shadow-sm rounded-md"
              type="password"
              onChange={(event) => setForm(prev => ({ ...prev, password: event.target.value }))}
              value={form.password}
            />
            <button className="mt-4 border p-3 bg-sky-700 text-white rounded-md hover:bg-sky-800 duration-300">Login</button>
          </form>

          <div className="flex justify-center gap-2 font-bold">
            <span>Don&#39;t have an account?</span>
            <Link
              href="/register"
              className="text-sky-500"
            >
              Register
            </Link>
          </div>
        </div>
      </main>

      {/* {session?.user && (
        <div>
          {JSON.stringify(session)}
          <button onClick={signOut} className="text-red-500">Logout</button>
        </div>
      )} */}
    </>
  )
}

export default LoginForm