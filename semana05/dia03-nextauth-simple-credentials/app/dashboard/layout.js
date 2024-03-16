import DashboardHeader from "@/components/login-page/Header";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardHeader />

      {children}
    </>
  )
}

export default DashboardLayout