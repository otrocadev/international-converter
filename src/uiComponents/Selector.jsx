import React from 'react'

const ConversorDisplay = ({ isFrom }) => {
  return (
    <div className="flex-1 border-2 border-gray-300 px-2 py-1 rounded-lg">
      <label htmlFor="unit-select" className="text-xs">
        {isFrom ? 'From:' : 'To:'}
      </label>
      <select id="unit-select" className="w-full">
        <option value="unit1">Unit 1</option>
        <option value="unit2">Unit 2</option>
        <option value="unit3">Unit 3</option>
      </select>
    </div>
  )
}

export default ConversorDisplay
