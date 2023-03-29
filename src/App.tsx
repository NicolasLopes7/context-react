import { Counter } from "./components/counter"
import { IncrementButton } from "./components/increment-button"

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Counter />
      <IncrementButton />
    </div>
  )
}

export default App
