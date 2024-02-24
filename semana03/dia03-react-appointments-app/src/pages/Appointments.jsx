import { useState } from "react"

import AppointmentsForm from "../components/appointments/AppointmentsForm"
import AppointmentsList from "../components/appointments/AppointmentsList"

const Appointments = () => {
  const [appointments, setAppointments] = useState([1, 2, 3])

  return (
    <>
      {JSON.stringify(appointments)}

      <AppointmentsForm />

      <AppointmentsList
        appointments={appointments}
      />
    </>
  )
}

export default Appointments