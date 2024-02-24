const Appointments = () => {
  return (
    <>
      <section className="w-96 p-4">
        <h2 className="text-2xl text-center mb-4">Nuevo paciente</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="petName"
            placeholder="Nombre de mi mascota"
            className="border p-3 shadow-md rounded-md"
          />
          <input
            type="number"
            name="petAge"
            placeholder="Edad de la mascota"
            className="border p-3 shadow-md rounded-md"
            min="0"
            max="50"
          />
          <input
            type="text"
            name="ownerName"
            placeholder="Dueño de la mascota"
            className="border p-3 shadow-md rounded-md"
          />
          <input
            type="date"
            name="appointmentDate"
            placeholder="Fecha de la cita"
            className="border p-3 shadow-md rounded-md"
          />
          <input
            type="time"
            name="appointmentTime"
            placeholder="Fecha de la cita"
            className="border p-3 shadow-md rounded-md"
          />
          <textarea
            name="symptoms"
            placeholder="Síntomas"
            className="border p-3 shadow-md rounded-md"
            rows="3"
          />
          <input
            type="submit"
            className="border p-2 bg-green-800 text-white rounded-md cursor-pointer"
            value="Guardar"
          />
        </form>
      </section>
    </>
  )
}

export default Appointments