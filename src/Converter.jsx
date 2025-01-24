import React, { useState } from 'react'

import ResultDisplay from './assets/ResultDisplay'

const Converter = () => {
  return (
    <ResultDisplay
      firstNumber="0"
      secondNumber="33"
      firstUnit="Binary"
      secondUnit="Decimal"
    />
  )
}

export default Converter
