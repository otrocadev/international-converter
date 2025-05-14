// Vercel Analytics tools
import { Analytics } from '@vercel/analytics/react'
// Visual components
import BaseConversor from './sections/BaseConversor'
import LengthConversor from './sections/LengthConversor'
import ConversionTypesMenu from './components/ConversionTypesMenu'
import Footer from './components/Footer'
// hooks
import useConversionTypesMenu from './hooks/useConversionTypesMenu'
// data
import { menuOptions } from './data/menuOptions'

function App() {
  const { conversionType, changeConversionType } = useConversionTypesMenu()

  return (
    <body className="flex flex-col min-h-screen">
      <header className="flex items-center justify-center py-8 bg-navyblue text-softgray w-full">
        <h2 className="text-4xl text-center">International Converter</h2>
      </header>
      <main className="flex flex-col sm:min-h-full sm:m-auto mt-4 max-w-4xl">
        <div className="flex flex-col justify-center bg-lightgray rounded-md shadow-md overflow-hidden m-4">
          <ConversionTypesMenu
            menu={menuOptions}
            conversionType={conversionType}
            changeConversionType={changeConversionType}
          />
          {conversionType == menuOptions[0].id && <LengthConversor />}
          {conversionType == menuOptions[1].id && <BaseConversor />}
        </div>
        <section className="flex flex-col mt-8 gap-[1lh]">
          <h1 className="text-3xl text-navyblue font-bold">
            🔍 International Converter – The Ultimate Online Conversion Tool
          </h1>
          <p>
            Welcome to International Converter, this aims to be your all-in-one
            platform for accurate and instant unit conversions, number system
            transformations, and soon (i hope so, lol), currency exchange tools.
          </p>
          <p>
            Whether you’re a developer, student, engineer, or simply someone who
            has a lot of spare time to be changing between measurements of
            things while you could touch some grass 🌿, you’ve come to the right
            place.
          </p>
          <h2 className="text-2xl text-navyblue font-bold">
            📏 Convert Measurement Units Across Imperial and Metric Systems
          </h2>
          <p>
            We support the most used lengh unit convertions across the SI
            (International System of Units) and the Imperial system (Yes, here
            we also accept people that likes to use 🦅 eagles per 🍔
            cheesburguer without judging)
          </p>
          <h2 className="text-2xl text-navyblue font-bold">
            💱 Currency Conversion – Coming Soon (I hope)
          </h2>
          <p>
            Soon, you’ll be able to convert currencies in real time based on
            updated exchange rates. This feature will include: • USD ↔ EUR • GBP
            ↔ JPY • +100 currencies supported (LOL I don't think I am puting as
            much currencies but ChatGPT thinks is best for marketing so here we
            are)
          </p>
        </section>
      </main>
      <Footer />
      <Analytics />
    </body>
  )
}

export default App
