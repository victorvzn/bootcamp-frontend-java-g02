import { useState } from "react"

import AppointmentsForm from "../components/appointments/AppointmentsForm"
import AppointmentsList from "../components/appointments/AppointmentsList"

const Appointments = () => {
  const [appointments, setAppointments] = useState([])

  const handleSaveAppointment = (form) => {
    // Guardamos lo que nos entregue el AppointmentForm en el estado appointments

    console.log(form)

    setAppointments([...appointments, form])
  }

  return (
    <>
      {/* {JSON.stringify(appointments)} */}

      <AppointmentsForm
        onSaveAppointment={handleSaveAppointment}
      />

      <AppointmentsList
        appointments={appointments}
      />
    </>
  )
}

export default Appointments