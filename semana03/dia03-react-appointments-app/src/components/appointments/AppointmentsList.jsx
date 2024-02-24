const AppointmentsList = ({ appointments }) => {
  return (
    <section className="w-1/2 p-4 rounded-lgs">
      <h2 className="text-2xl text-center mb-4">Listado de Citas</h2>

      <div className="flex flex-col gap-3 mb-4">
        {appointments.map(appointment => {
          return (
            <div
              className="border-2 border-sky-500 p-3 rounded-lg bg-sky-300"
              key={appointment}
            >
              <div className="mb-2">
                <h4 className="font-semibold text-lg">Mascota</h4>
                <div>
                  <strong>Nombre:</strong> petName
                </div>
                <div>
                  <strong>Edad (años):</strong> petAge
                </div>
              </div>
              <div className="mb-2">
                <h4 className="font-semibold text-lg">Dueño</h4>
                <div>
                  <strong>Nombre:</strong> ownerName
                </div>
              </div>
              <div className="mb-2">
                <h4 className="font-semibold text-lg">Citas</h4>
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
              <div className="flex flex-col gap-3 mt-3">
                <button className="p-2 bg-green-600 text-white rounded-lg cursor-pointer">
                  Confirmar cita
                </button>
                <button className="p-2 bg-sky-600 text-white rounded-lg cursor-pointer">
                  Editar
                </button>
                <button className="p-2 bg-red-600 text-white rounded-lg cursor-pointer">
                  Eliminar
                </button>
              </div>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default AppointmentsList