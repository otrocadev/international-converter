import { useState, useEffect } from 'react'
import { binToDec, decToBin } from '../utils/baseSystemConvertions.js'

export default function useBaseSystem({
  originalNumber,
  setConvertedNumber,
  resetNumbers,
}) {
  const [baseSystem, setBaseSystem] = useState('')
  const [baseFrom, setBaseFrom] = useState('dec')
  const [baseTo, setBaseTo] = useState('bin')

  const selectFromBase = (event) => {
    const newBaseFrom = event.target.value
    resetNumbers()
    setBaseFrom(newBaseFrom)
  }

  const selectToBase = (event) => {
    const newBaseTo = event.target.value
    resetNumbers()
    setBaseTo(newBaseTo)
  }

  // Base system selector
  useEffect(() => {
    const newBaseSystem =
      baseFrom + 'To' + baseTo.slice(0, 1).toUpperCase() + baseTo.slice(1)
    setBaseSystem(newBaseSystem)
  }, [baseFrom, baseTo])

  // Convertion
  const convertBaseNumber = (event) => {
    event.preventDefault()
    const number = originalNumber
    if (baseSystem === 'binToDec') {
      const newNumber = binToDec(number)
      setConvertedNumber(newNumber)
      return
    }
    if (baseSystem === 'decToBin') {
      const newNumber = decToBin(number)
      setConvertedNumber(newNumber)
      return
    } else {
      alert(
        'Please select a system to convert from and one to convert to that are not the same'
      )
    }
  }

  return { selectFromBase, selectToBase, convertBaseNumber }
}
