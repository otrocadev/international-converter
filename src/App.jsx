import { useState } from 'react'
import ConversorDisplay from './assets/ConversorDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">Digital Converter</h1>
      <ConversorDisplay />
    </main>
  )
}

export default App
