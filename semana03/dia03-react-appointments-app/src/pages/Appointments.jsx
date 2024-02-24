const Appointments = () => {
  return (
    <>
      <section>
        <h2>Nuevo paciente</h2>

        <form>
          <input
            type="text"
            name="petName"
            placeholder="Nombre de mi mascota"
            className=""
          />
          <input
            type="numer"
            name="petAge"
            placeholder="Edad de la mascota"
            className=""
            min="0"
            max="50"
          />
          <input
            type="text"
            name="ownerName"
            placeholder="Dueño de la mascota"
            className=""
          />
          <input
            type="date"
            name="appointmentDate"
            placeholder="Fecha de la cita"
            className=""
          />
          <input
            type="time"
            name="appointmentTime"
            placeholder="Fecha de la cita"
            className=""
          />
          <textarea
            name="symptoms"
            placeholder="Síntomas"
            className=""
            rows={3}
          />
          <input
            type="submit"
            className=""
            value="Guardar"
          />
        </form>
      </section>
    </>
  )
}

export default Appointments