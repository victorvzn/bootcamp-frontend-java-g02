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
        return {
          email: 'victortest@gmail.com'
        }
      }
    }),
  ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }