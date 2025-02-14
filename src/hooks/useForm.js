import { useState } from 'react'

export default function useForm() {
  const [originalNumber, setOriginalNumber] = useState('')
  const [convertedNumber, setConvertedNumber] = useState('')

  // Reset variables
  const resetNumbers = () => {
    setOriginalNumber('')
    setConvertedNumber('')
  }

  // Update changes on typing
  const typingChange = (event) => {
    const inputValue = event.target.value
    setOriginalNumber(inputValue)
  }

  return {
    originalNumber,
    convertedNumber,
    resetNumbers,
    typingChange,
    setConvertedNumber,
  }
}
