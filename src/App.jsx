import { useState } from 'react'
import Converter from './Converter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">Digital Converter</h1>
      <h2>
        <span>The online tool to convert from </span>
        <span>binary</span> {/* animation with options in the future */}
        <span> to </span>
        <span>decimal</span> {/* animation with options in the future */}
      </h2>
      <div className="flex flex-col xl:flex-row items-center justify-center">
        <Converter />
      </div>
    </main>
  )
}

export default App
