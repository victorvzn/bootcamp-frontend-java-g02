"use client"

import { useState } from "react";

import { signIn, useSession, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession();

  const [form, setForm] = useState({
    email: 'ejemplo@gmail.com',
    password: 'mipass123'
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

  const getStudents = async() =>{
    const response = await fetch('http://localhost:3000/api/students')

    const data = await response.json()

    console.log(data)
  }

  return (
    <>
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

      {session && (
        <div>
          {JSON.stringify(session)}
          <button onClick={getStudents}>GetStudents</button>
          <button onClick={signOut}>Logout</button>
        </div>
      )}
    </>
  );
}
