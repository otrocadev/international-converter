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
  return parseInt(binaryNumber)
}

export function binToDec(binNumber) {
  let currentPower = 0
  let decNumber = 0
  let index = binNumber.length - 1

  while (index >= 0) {
    if (binNumber[index] !== '1' && binNumber[index] !== '0') {
      alert('Please insert a correct binary value')
      return null
    }
    if (binNumber[index] === '1') {
      let newDigit = Math.pow(2, currentPower)
      decNumber += newDigit
    }
    index--
    currentPower++
  }

  return decNumber
}
