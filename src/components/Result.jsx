function Result({ convertedNumber, unit = '' }) {
  const formatNumber = (number) => {
    let newNumber = number
    if (newNumber > 1000000) return newNumber.toExponential(4)
    if (newNumber % 1 !== 0) return newNumber.toFixed(3)
    return newNumber
  }

  return (
    <div>
      {convertedNumber ? (
        <section className="flex flex-col items-start w-full">
          <label>Result:</label>
          <p id="responseNumber" className="text-4xl font-exodos">
            {formatNumber(convertedNumber)} {unit}
          </p>
        </section>
      ) : null}
    </div>
  )
}

export default Result
