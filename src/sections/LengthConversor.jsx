import { useMemo } from 'react'
import useForm from '../hooks/useForm'
import useLength from '../hooks/useLength'
import SectionWrapper from '../components/SectionWrapper'
import Form from '../components/Form'
import Result from '../components/Result'

import { lengthOptions } from '../utils/lengthConversions'

export default function LengthConversor() {
  const {
    originalNumber,
    convertedNumber,
    resetNumbers,
    typingChange,
    setConvertedNumber,
  } = useForm()

  const {
    selectUnitFrom,
    unitTo,
    selectUnitTo,
    currentError,
    convertLengthUnit,
  } = useLength({
    originalNumber,
    setConvertedNumber,
    resetNumbers,
  })

  const selectors = useMemo(
    () => [
      {
        id: 'originalNumberSelector',
        label: 'Convert from:',
        errorStatus: false,
        function: selectUnitFrom,
      },
      {
        id: 'convertedNumberSelector',
        label: 'To:',
        errorStatus: false,
        function: selectUnitTo,
      },
    ],
    [selectUnitFrom, selectUnitTo]
  )

  const options = useMemo(() => lengthOptions, [])

  return (
    <SectionWrapper>
      <Form
        convertNumber={convertLengthUnit}
        typingChange={typingChange}
        originalNumber={originalNumber}
        selectors={selectors}
        options={options}
        currentError={currentError}
      />
      <Result convertedNumber={convertedNumber} unit={unitTo} />
    </SectionWrapper>
  )
}
