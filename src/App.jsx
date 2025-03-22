// Vercel Analytics tools
import { Analytics } from '@vercel/analytics/react'
// Visual components
import BaseConversor from './sections/BaseConversor'
import Footer from './components/Footer'

function App() {
  return (
    <main className="flex flex-col h-screen">
      <header className="flex items-center justify-center py-8 bg-navyblue text-softgray w-full">
        <h1 className="text-4xl text-center">International Converter</h1>
      </header>
      <main className="flex items-center justify-center h-full">
        <div className="flex flex-col justify-center gap-6 bg-lightgray rounded-md shadow-md">
          <BaseConversor />
        </div>
      </main>
      <Footer />
      <Analytics />
    </main>
  )
}

export default App
