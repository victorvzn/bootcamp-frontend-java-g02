"use client"

import { useState } from "react";

import { signIn } from "next-auth/react"

export default function Home() {
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
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        onChange={(event) => setForm(prev => ({ ...prev, email: event.target.value }))}
        value={form.email}
      />
      <input
        type="password"
        onChange={(event) => setForm(prev => ({ ...prev, password: event.target.value }))}
        value={form.password}
      />
      <button>Login</button>
    </form>
  );
}
