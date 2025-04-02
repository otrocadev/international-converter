// Options
export const lengthOptions = [
  { value: '', text: 'Select a length unit' },
  { value: 'km', text: 'Kilometers (km)' },
  { value: 'm', text: 'Meters (m)' },
  { value: 'cm', text: 'Centimeters (cm)' },
  { value: 'mm', text: 'Milimeters (mm)' },
  { value: 'in', text: 'Inches (in)' },
  { value: 'ft', text: 'Foot (ft)' },
  { value: 'yd', text: 'Yard (yd)' },
  { value: 'mi', text: 'Miles (mi)' },
]

// Possible conversions
const equivalences = {
  // International System
  km: 1000,
  m: 1,
  cm: 0.01,
  mm: 0.001,
  // Imperial system
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344,
}

export function convertNumber(number, unitFrom, unitTo) {
  const numberInMetres = number * equivalences[unitFrom]
  const convertedNumber = numberInMetres / equivalences[unitTo]
  return convertedNumber
}
