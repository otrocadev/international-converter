// Vercel Analytics tools
import { Analytics } from '@vercel/analytics/react'
// Visual components
import BaseConversor from './sections/BaseConversor'
import ConversionTypesMenu from './components/ConversionTypesMenu'
import Footer from './components/Footer'
// hooks
import useConverstionTypesMenu from './hooks/useConverstionTypesmenu'
// data
import { menuOptions } from './data/menuOptions'

function App() {
  const { convertionType, changeConvertionType } = useConverstionTypesMenu()

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
          {convertionType == menuOptions[0].id && <BaseConversor />}
          {convertionType == menuOptions[1].id && (
            <p>Here goes the lenght form</p>
          )}
        </div>
      </main>
      <Footer />
      <Analytics />
    </main>
  )
}

export default App
