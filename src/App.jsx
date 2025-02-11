import { useEffect, useState } from 'react'
import { binToDec, decToBin } from './utils/conversions'

function App() {
  const [originalNumber, setOriginalNumber] = useState('')
  const [convertedNumber, setConvertedNumber] = useState('')
  const [baseSystem, setBaseSystem] = useState('decToBin')

  // Reset variables
  useEffect(() => {
    setOriginalNumber('')
    setConvertedNumber('')
  }, [baseSystem])

  const typingChange = (event) => {
    const inputValue = event.target.value
    setOriginalNumber(inputValue)
  }

  // Base system selector
  const selectBaseSystem = (event) => {
    const newBaseSystem = event.target.value
    setBaseSystem(newBaseSystem)
  }

  const convertNumber = (event) => {
    event.preventDefault()
    const number = originalNumber
    if (baseSystem === 'binToDec') {
      const newNumber = binToDec(number)
      setConvertedNumber(newNumber)
    }
    if (baseSystem === 'decToBin') {
      const newNumber = decToBin(number)
      setConvertedNumber(newNumber)
    }
    return
  }

  return (
    <>
      <header className="flex items-center justify-center py-8 bg-midblue text-softgray w-full">
        <h1 className="text-4xl">Digital Converter</h1>
      </header>
      <form
        onSubmit={convertNumber}
        className="flex items-center justify-center h-screen"
      >
        <div className="flex flex-col justify-center gap-6 p-12 bg-lightgray rounded-md">
          <section className="flex flex-col items-start w-full border-2 border-slategray rounded-md px-4 pb-2">
            <label className="text-midblue">
              Select a base sytem conversion:
            </label>
            <select
              className="text-2xl text-darkblue w-full bg-inherit cursor-pointer"
              onChange={selectBaseSystem}
            >
              <option value="decToBin">Decimal to Binnary</option>
              <option value="binToDec">Binary to Decimal</option>
            </select>
          </section>
          <section className="flex flex-col items-start w-full border-2 border-slategray rounded-md px-4 pb-2">
            <label className="text-midblue">Amount:</label>
            <input
              className="text-2xl text-darkblue w-full bg-inherit"
              onChange={typingChange}
              value={originalNumber}
              maxlength="20"
              placeholder="Enter a number..."
            ></input>
          </section>
          <section className="flex flex-col items-center w-full">
            <button className="mt-4 px-4 py-2 bg-midblue text-softgray rounded-md">
              Convert
            </button>
          </section>
          {convertedNumber ? (
            <section className="flex flex-col items-start w-full">
              <label>Result:</label>
              <p className="text-4xl">{convertedNumber}</p>
            </section>
          ) : null}
        </div>
      </form>
    </>
  )
}

export default App
