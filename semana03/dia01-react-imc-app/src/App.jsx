const App = () => {
  return (
    <section>
      <h1>IMC Calculator</h1>

      <div>
        <label>
          Weight: 0 kg
          <input
            type="range"
            min="50"
            max="200"
          />
        </label>

        <label>
          Height: 0 cm
          <input
            type="range"
            min="50"
            max="200"
          />
        </label>

        <p>
          Tu IMC es 0.00
        </p>

        <p>
          Estado de IMC: Normal / Obeso / ...
        </p>

      </div>
    </section>
  )
}

export default App