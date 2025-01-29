import React from 'react'
import Selector from '../uiComponents/Selector'

const ConversorDisplay = () => {
  return (
    <main className="flex flex-col gap-4">
      <section className="flex flex-col lg:flex-row gap-2">
        <div className="flex-1 border-2 border-gray-300 px-2 py-1 rounded-lg">
          <label htmlFor="unit-select" className="text-xs">
            Ammount
          </label>
          <input
            type="number"
            id="input-number"
            className="w-full bg-softgray px-2"
          />
        </div>
        <Selector isFrom={true} />
        <Selector isFrom={false} />
      </section>
      <button className="flex place-self-end bg-navyblue border-2 py-2 px-4 rounded-lg text-softgray">
        CONVERT
      </button>
    </main>
  )
}

export default ConversorDisplay
