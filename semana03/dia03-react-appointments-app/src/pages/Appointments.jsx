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

  const handleRemove = (id) => {
    console.log('handleREmove', id)

    const newAppointments = appointments.filter(
      appointment => appointment.id !== id
    )

    setAppointments(newAppointments)
  }

  return (
    <>
      {/* {JSON.stringify(appointments)} */}

      <AppointmentsForm
        onSaveAppointment={handleSaveAppointment}
      />

      <AppointmentsList
        appointments={appointments}
        onRemove={handleRemove}
      />
    </>
  )
}

export default Appointments