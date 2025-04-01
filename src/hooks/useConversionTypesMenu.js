import { useState } from 'react'

export default function useConversionTypesMenu() {
  const [conversionType, setConversionType] = useState('length')

  const changeConversionType = (conversionType) => {
    setConversionType(conversionType)
  }

  return { conversionType, changeConversionType }
}
