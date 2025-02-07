import { useEffect, useState } from 'react'

const decToBin = (number) => {
  let binaryNumber = ''
  while (number > 0) {
    if (number % 2 === 0) {
      binaryNumber = '0' + binaryNumber
    } else {
      binaryNumber = '1' + binaryNumber
    }
    number = Math.floor(number / 2)
  }
  return binaryNumber
}

const binToDec = (number) => {
  let currentPower = number.length - 1 // number
  let decNumber = 0
  while (currentPower >= 0) {
    if (number[currentPower] === '1') {
      let newDigit = Math.pow(2, currentPower)
      console.log(typeof newDigit)
      decNumber = newDigit + decNumber
    }
    currentPower--
  }
  return decNumber
}

function App() {
  const [originalNumber, setOriginalNumber] = useState(0)
  const [convertedNumber, setConvertedNumber] = useState(null)
  const [baseSystem, setBaseSystem] = useState('binToDec')

  const typingChange = (event) => {
    const inputValue = event.target.value
    setOriginalNumber(inputValue)
  }
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
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">Digital Converter</h1>
      <select onChange={selectChange}>
        <option value="binToDec">Binnary to Decimal</option>
        <option value="decToBin">Decimal to Binnary</option>
      </select>
      <input onChange={typingChange} value={originalNumber}></input>
      {convertNumber && <p>{convertedNumber}</p>}
      <button
        onClick={convertNumber}
        className="mt-4 px-4 py-2 bg-midblue text-softgray rounded-md"
      >
        Convert
      </button>
    </main>
  )
}

export default App
