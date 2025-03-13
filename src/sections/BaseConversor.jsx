import Form from '../components/Form'

export default function BaseConversor({
  convertBaseNumber,
  selectBaseSystem,
  typingChange,
  originalNumber,
  optionsLabel = 'Base convertion:',
  options = [
    {
      value: 'decToBin',
      text: 'Decimal to Binnary',
    },
    {
      value: 'binToDec',
      text: 'Binary to Decimal',
    },
  ],
}) {
  return (
    <Form
      convertNumber={convertBaseNumber}
      selectOption={selectBaseSystem}
      typingChange={typingChange}
      originalNumber={originalNumber}
      optionsLabel={optionsLabel}
      options={options}
    />
  )
}
