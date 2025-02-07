import { useState } from 'react'

const decToBin = (decNumber) => {
  const newDecNumber = parseInt(decNumber)
  if (isNaN(newDecNumber)) {
    alert('Please insert a correct decimal value')
    return 'Please insert a correct decimal value'
  }
  let binaryNumber = ''
  while (decNumber > 0) {
    if (decNumber % 2 === 0) {
      binaryNumber = '0' + binaryNumber
    } else {
      binaryNumber = '1' + binaryNumber
    }
    decNumber = Math.floor(decNumber / 2)
  }
  return binaryNumber
}

const binToDec = (binNumber) => {
  let currentPower = binNumber.length - 1 // number
  let decNumber = 0
  while (currentPower >= 0) {
    if (binNumber[currentPower] !== '1' && binNumber[currentPower] !== '0') {
      alert('Please insert a correct binary value')
      return 'Please insert a correct binary value'
    }
    if (binNumber[currentPower] === '1') {
      let newDigit = Math.pow(2, currentPower)
      console.log(typeof newDigit)
      decNumber = newDigit + decNumber
    }
    currentPower--
  }
  return decNumber
}

function App() {
  const [originalNumber, setOriginalNumber] = useState(null)
  const [convertedNumber, setConvertedNumber] = useState(null)
  const [baseSystem, setBaseSystem] = useState('binToDec')

  const typingChange = (event) => {
    const inputValue = event.target.value
    setOriginalNumber(inputValue)
  }

  // Base system selector
  const selectChange = (event) => {
    const newBaseSystem = event.target.value
    setBaseSystem(newBaseSystem)
  }

  const convertNumber = () => {
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
      <main className="flex items-center justify-center h-screen">
        <div className="flex flex-col justify-center gap-6 p-12 bg-lightgray rounded-md">
          <section className="flex flex-col items-start w-full border-2 border-slategray rounded-md px-4 pb-2">
            <label className="text-midblue">
              Select a base sytem conversion:
            </label>
            <select
              className="text-2xl text-darkblue w-full bg-inherit cursor-pointer"
              onChange={selectChange}
            >
              <option value="binToDec">Binnary to Decimal</option>
              <option value="decToBin">Decimal to Binnary</option>
            </select>
          </section>
          <section className="flex flex-col items-start w-full border-2 border-slategray rounded-md px-4 pb-2">
            <label className="text-midblue">Amount:</label>
            <input
              className="text-2xl text-darkblue w-full bg-inherit"
              onChange={typingChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  convertNumber()
                }
              }}
              value={originalNumber}
              maxlength="20"
              placeholder="Enter a number..."
            ></input>
          </section>
          <section className="flex flex-col items-center w-full">
            <button
              onClick={convertNumber}
              className="mt-4 px-4 py-2 bg-midblue text-softgray rounded-md"
            >
              Convert
            </button>
          </section>
          <section className="flex flex-col items-center w-full">
            <label>Result:</label>
            <p className="text-4xl">{convertedNumber}</p>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
