import { useMemo } from 'react'
import useForm from '../hooks/useForm'
import useBaseSystem from '../hooks/useBaseSystem'
import SectionWrapper from '../components/SectionWrapper'
import Form from '../components/Form'
import Result from '../components/Result'

export default function BaseConversor() {
  const {
    originalNumber,
    convertedNumber,
    resetNumbers,
    typingChange,
    setConvertedNumber,
  } = useForm()

  const { selectFromBase, selectToBase, currentError, convertBaseNumber } =
    useBaseSystem({
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
        function: selectFromBase,
      },
      {
        id: 'convertedNumberSelector',
        label: 'To:',
        errorStatus: false,
        function: selectToBase,
      },
    ],
    [selectFromBase, selectToBase]
  )

  const options = useMemo(
    () => [
      { value: '', text: 'Select a base system' },
      { value: 'dec', text: 'Decimal' },
      { value: 'bin', text: 'Binary' },
    ],
    []
  )

  return (
    <SectionWrapper>
      <Form
        convertNumber={convertBaseNumber}
        typingChange={typingChange}
        originalNumber={originalNumber}
        selectors={selectors}
        options={options}
        currentError={currentError}
      />
      <Result convertedNumber={convertedNumber} />
    </SectionWrapper>
  )
}
