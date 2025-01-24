import React, { useState } from 'react'

const ResultDisplay = ({
  firstUnit,
  secondUnit,
  firstNumber,
  secondNumber,
}) => {
  return (
    <main className="flex gap-4">
      <section className="flex flex-col items-center justify-center">
        <h2 className="">{firstUnit}</h2>
        <div className="border-2 rounded-lg border-black px-4 py-2">
          {firstNumber}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <h2 className="">{secondUnit}</h2>
        <div className="border-2 rounded-lg border-black px-4 py-2">
          {secondNumber}
        </div>
      </section>
    </main>
  )
}

export default ResultDisplay
