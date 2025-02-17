function Result({ convertedNumber }) {
  return (
    <div>
      {convertedNumber ? (
        <section className="flex flex-col items-start w-full">
          <label>Result:</label>
          <p id="responseNumber" className="text-4xl">
            {convertedNumber}
          </p>
        </section>
      ) : null}
    </div>
  )
}

export default Result
