export default function LoginPage() {
  return (
    <main className="container border border-red-500 w-[400px] h-screen mx-auto space-y-6 flex flex-col justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-10">

        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-4xl font-semibold">Login</h1>
          <p className="text-sm text-slate-600">Enter your email below to login your account.</p>
        </div>

        <div className="flex flex-col gap-6">
          <label>
            Email
            <input type="email" placeholder="jhondoe@mail.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Ej. supersecret" />
          </label>
          <button>Login</button>
        </div>

      </div>
    </main>
  )
}
