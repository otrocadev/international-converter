import { useState } from 'react'
import { binToDec, decToBin } from '../utils/convertions'

export default function useBaseSystem({
  originalNumber,
  setConvertedNumber,
  resetNumbers,
}) {
  const [baseSystem, setBaseSystem] = useState('decToBin')

  // Base system selector
  const selectBaseSystem = (event) => {
    const newBaseSystem = event.target.value
    resetNumbers()
    setBaseSystem(newBaseSystem)
  }

  // Convertion
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
  }

  return { selectBaseSystem, convertNumber }
}
