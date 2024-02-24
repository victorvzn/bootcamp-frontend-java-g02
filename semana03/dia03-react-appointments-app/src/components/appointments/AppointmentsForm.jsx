import { useState } from 'react'

const AppointmentsForm = () => {
  const INITIAL_FORM_STATE = {
    id: '',
    petName: '',
    petAge: '',
    ownerName: '',
    appointmentDate: '',
    appointmentTime: '',
    symptoms: '',
  }

  const [form, setForm] = useState(INITIAL_FORM_STATE)

  const handleChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)

    // const name = event.target.name
    // const value = event.target.value

    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  return (
    <section className="w-96 p-4">
      <h2 className="text-2xl text-center mb-4">Nuevo paciente</h2>


      <form className="flex flex-col gap-4">
        <input
          type="text"
          name="petName"
          placeholder="Nombre de mi mascota"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
        />
        <input
          type="number"
          name="petAge"
          placeholder="Edad de la mascota"
          className="border p-3 shadow-md rounded-md"
          min="0"
          max="50"
          onChange={handleChange}
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Dueño de la mascota"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
        />
        <input
          type="date"
          name="appointmentDate"
          placeholder="Fecha de la cita"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
        />
        <input
          type="time"
          name="appointmentTime"
          placeholder="Fecha de la cita"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
        />
        <textarea
          name="symptoms"
          placeholder="Síntomas"
          className="border p-3 shadow-md rounded-md"
          rows="3"
          onChange={handleChange}
        />
        <input
          type="submit"
          className="border p-2 bg-green-800 text-white rounded-md cursor-pointer"
          value="Guardar"
          onChange={handleChange}
        />
      </form>

      <pre>{JSON.stringify(form, null, 2)}</pre>

    </section>
  )
}

export default AppointmentsForm