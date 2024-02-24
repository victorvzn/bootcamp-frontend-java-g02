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

      <section>
        <h2>Listado de Citas</h2>

        <div>
          <div>
            <div>
              <h4>Mascota</h4>
              <div>
                <strong>Nombre:</strong> petName
              </div>
              <div>
                <strong>Edad (años):</strong> petAge
              </div>
            </div>
            <div>
              <h4>Dueño</h4>
              <div>
                <strong>Nombre:</strong> ownerName
              </div>
            </div>
            <div>
              <h4>Citas</h4>
              <div>
                <strong>Fecha:</strong> appointmentDate
              </div>
              <div>
                <strong>Hora:</strong> appointmentTime
              </div>
              <div>
                <strong>Síntomas:</strong> symptoms
              </div>
            </div>
            <div>
              <button>Confirmar cita</button>
              <button>Editar</button>
              <button>Eliminar</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Appointments