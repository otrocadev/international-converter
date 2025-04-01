import { useState } from 'react'

export default function useConverstionTypesMenu() {
  const [convertionType, setConvertionType] = useState('base')

  const changeConvertionType = (convertionType) => {
    setConvertionType(convertionType)
  }

  return { convertionType, changeConvertionType }
}
