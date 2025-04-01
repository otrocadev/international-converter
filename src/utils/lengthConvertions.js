// Options
export const lengthOptions = [
  { value: '', text: 'Select a length unit' },
  { value: 'km', text: 'Kilometers (km)' },
  { value: 'm', text: 'Meters (m)' },
  { value: 'cm', text: 'Centimeters (cm)' },
  { value: 'mm', text: 'Milimeters (mm)' },
]

// Possible convertions
const equivalences = {
  km: 1000,
  m: 1,
  cm: 0.01,
  mm: 0.001,
}

export function convertNumber(number, unitFrom, unitTo) {
  const numberInMetres = number * equivalences[unitFrom]
  const convertedNumber = numberInMetres / equivalences[unitTo]
  return convertedNumber
}
