// Vercel Analytics tools
import { Analytics } from '@vercel/analytics/react'
// Visual components
import BaseConversor from './sections/BaseConversor'
import LengthConversor from './sections/LengthConversor'
import ConversionTypesMenu from './components/ConversionTypesMenu'
import Footer from './components/Footer'
// hooks
import useConvertionTypesMenu from './hooks/useConvertionTypesMenu'
// data
import { menuOptions } from './data/menuOptions'

function App() {
  const { convertionType, changeConvertionType } = useConvertionTypesMenu()

  return (
    <main className="flex flex-col h-screen">
      <header className="flex items-center justify-center py-8 bg-navyblue text-softgray w-full">
        <h1 className="text-4xl text-center">International Converter</h1>
      </header>
      <main className="flex items-center justify-center h-full">
        <div className="flex flex-col justify-center bg-lightgray rounded-md shadow-md overflow-hidden">
          <ConversionTypesMenu
            menu={menuOptions}
            convertionType={convertionType}
            changeConvertionType={changeConvertionType}
          />
          {convertionType == menuOptions[0].id && <LengthConversor />}
          {convertionType == menuOptions[1].id && <BaseConversor />}
        </div>
      </main>
      <Footer />
      <Analytics />
    </main>
  )
}

export default App
