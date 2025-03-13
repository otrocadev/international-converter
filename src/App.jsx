// Vercel Analytics tools
import { Analytics } from '@vercel/analytics/react'
// Hooks
import useForm from './hooks/useForm'
import useBaseSystem from './hooks/useBaseSystem'
// Visual components
import BaseConversor from './sections/BaseConversor'
import Result from './components/Result'
import Footer from './components/Footer'

function App() {
  const {
    originalNumber,
    convertedNumber,
    resetNumbers,
    typingChange,
    setConvertedNumber,
  } = useForm()

  const { selectBaseSystem, convertBaseNumber } = useBaseSystem({
    originalNumber,
    setConvertedNumber,
    resetNumbers,
  })

  return (
    <main className="flex flex-col h-screen">
      <header className="flex items-center justify-center py-8 bg-navyblue text-softgray w-full">
        <h1 className="text-4xl text-center">International Converter</h1>
      </header>
      <main className="flex items-center justify-center h-full">
        <div className="flex flex-col justify-center gap-6 p-12 bg-lightgray rounded-md m-4">
          <BaseConversor
            convertBaseNumber={convertBaseNumber}
            selectBaseSystem={selectBaseSystem}
            typingChange={typingChange}
            originalNumber={originalNumber}
          />
          <Result convertedNumber={convertedNumber} />
        </div>
      </main>
      <Footer />
      <Analytics />
    </main>
  )
}

export default App
