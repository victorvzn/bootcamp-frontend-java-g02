import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com"},
        password: { label: "Password", type: "passwoord"},
      },
      async authorize (credentials, req) {
        // Aquí es donde haremos el llamdao al endpoint de autenticación
        // console.log(credentials)
        const API_URL = 'https://mockmentor.4.us-1.fl0.io'

        const { email, password } = credentials

        const options = { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        }

        const response = await fetch(`${API_URL}/auth/login`, options)

        const user = await response.json()

        console.log(user)

        if (!response.ok) return user

        return user
      }
    }),
  ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }