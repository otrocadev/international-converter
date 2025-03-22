import { useMemo } from 'react'
import useForm from '../hooks/useForm'
import useBaseSystem from '../hooks/useBaseSystem'
import Card from '../components/Card'
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

  const { selectFromBase, selectToBase, convertBaseNumber } = useBaseSystem({
    originalNumber,
    setConvertedNumber,
    resetNumbers,
  })

  // Evitem recrear els arrays a cada render
  const selectors = useMemo(
    () => [
      {
        id: 'originalNumberSelector',
        label: 'Convert from:',
        function: selectFromBase,
      },
      { id: 'convertedNumberSelector', label: 'To:', function: selectToBase },
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
    <Card>
      <Form
        convertNumber={convertBaseNumber}
        typingChange={typingChange}
        originalNumber={originalNumber}
        selectors={selectors}
        options={options}
      />
      <Result convertedNumber={convertedNumber} />
    </Card>
  )
}
