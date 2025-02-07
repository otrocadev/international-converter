import { useEffect, useState } from 'react'

const decToBin = (decNumber) => {
  const newDecNumber = parseInt(decNumber)
  if (isNaN(newDecNumber)) {
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
