import { useState, useEffect } from 'react'
import { binToDec, decToBin } from '../utils/baseSystemConvertions.js'

export default function useBaseSystem({
  originalNumber,
  setConvertedNumber,
  resetNumbers,
}) {
  const [baseSystem, setBaseSystem] = useState('')
  const [baseFrom, setBaseFrom] = useState('')
  const [baseTo, setBaseTo] = useState(' ')
  const [currentError, setCurrentError] = useState('')

  const checkErrors = () => {
    if (baseFrom === baseTo)
      setCurrentError('The system bases must be different')
    if (baseFrom !== baseTo) setCurrentError('')
  }

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
    checkErrors()
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

  return { selectFromBase, selectToBase, currentError, convertBaseNumber }
}
