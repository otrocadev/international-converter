import { useState } from 'react'

export default function useConvertionTypesMenu() {
  const [convertionType, setConvertionType] = useState('length')

  const changeConvertionType = (convertionType) => {
    setConvertionType(convertionType)
  }

  return { convertionType, changeConvertionType }
}
