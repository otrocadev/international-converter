export function decToBin(decNumber) {
  const newDecNumber = parseInt(decNumber)
  if (isNaN(newDecNumber)) {
    alert('Please insert a correct decimal value')
    return null
  }
  let binaryNumber = ''
  while (decNumber > 0) {
    if (decNumber % 2 === 0) {
      binaryNumber = '0' + binaryNumber
    } else {
      binaryNumber = '1' + binaryNumber
    }
    decNumber = Math.floor(decNumber / 2)
  }
  return binaryNumber
}

export function binToDec(binNumber) {
  let currentPower = binNumber.length - 1 // number
  let decNumber = 0
  while (currentPower >= 0) {
    if (binNumber[currentPower] !== '1' && binNumber[currentPower] !== '0') {
      alert('Please insert a correct binary value')
      return null
    }
    if (binNumber[currentPower] === '1') {
      let newDigit = Math.pow(2, currentPower)
      decNumber = newDigit + decNumber
    }
    currentPower--
  }
  return decNumber
}
