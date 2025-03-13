import Form from '../components/Form'

export default function BaseConversor({
  convertBaseNumber,
  typingChange,
  originalNumber,
  selectFromBase,
  selectToBase,
  selectors = [
    {
      label: 'Convert from:',
      function: selectFromBase,
    },
    {
      label: 'To:',
      function: selectToBase,
    },
  ],
  options = [
    {
      value: '',
      text: 'Select a base system',
    },
    {
      value: 'dec',
      text: 'Decimal',
    },
    {
      value: 'bin',
      text: 'Binary',
    },
  ],
}) {
  return (
    <Form
      convertNumber={convertBaseNumber}
      typingChange={typingChange}
      originalNumber={originalNumber}
      selectors={selectors}
      options={options}
    />
  )
}
