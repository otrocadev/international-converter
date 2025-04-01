import { useState, useEffect } from 'react'
import { MtoCM, CMtoM } from '../utils/lengthConvertions'

export default function useBaseSystem({
  originalNumber,
  setConvertedNumber,
  resetNumbers,
}) {
  const [unitConversion, setUnitConversion] = useState('')
  const [unitFrom, setUnitFrom] = useState('')
  const [unitTo, setUnitTo] = useState(' ')
  const [currentError, setCurrentError] = useState('')

  const checkErrors = () => {
    if (unitFrom === unitTo)
      setCurrentError('The lenght units must be different')
    if (unitFrom !== unitTo) setCurrentError('')
  }

  const selectUnitFrom = (event) => {
    const newUnitFrom = event.target.value
    resetNumbers()
    setUnitFrom(newUnitFrom)
  }

  const selectUnitTo = (event) => {
    const newUnitTo = event.target.value
    resetNumbers()
    setUnitTo(newUnitTo)
  }

  // Unit conversion selector
  useEffect(() => {
    const newUnitConversion = unitFrom + 'TO' + unitTo
    setUnitConversion(newUnitConversion)
    checkErrors()
  }, [unitFrom, unitTo])

  // Convertion
  const convertLengthUnit = (event) => {
    event.preventDefault()
    const number = originalNumber
    if (unitConversion === 'mTOcm') {
      const newNumber = MtoCM(number)
      setConvertedNumber(newNumber)
      return
    }
    if (unitConversion === 'cmTOm') {
      const newNumber = CMtoM(number)
      setConvertedNumber(newNumber)
      return
    }
  }

  return { selectUnitFrom, selectUnitTo, currentError, convertLengthUnit }
}
