'use client'

import DashboardHeader from "@/components/login-page/Header";

import { useSession } from "next-auth/react";

const DashboardPage = () => {
  const { data: session } = useSession()

  return (
    <>
      <DashboardHeader />

      <div className="pt-10">DashboardPage</div>

      {session?.user && (
        <pre>
          {JSON.stringify(session, null, 2)}
        </pre>
      )}
    </>
  )
}

export default DashboardPage