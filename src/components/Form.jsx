function Form({
  convertNumber,
  typingChange,
  originalNumber,
  options = [{}],
  selectors = [{}],
  currentError,
}) {
  return (
    <form
      onSubmit={convertNumber}
      className="flex flex-col justify-center gap-6"
    >
      <section
        key={selectors[0].id}
        className={`flex flex-col items-start w-full border-2 rounded-md px-4 pb-2 + ${
          selectors[0].errorStatus ? 'border-red-600' : ''
        }`}
      >
        <label className="text-midblue">{selectors[0].label}</label>
        <select
          id={selectors[0].id}
          className="sm:text-2xl text-darkblue w-full bg-inherit cursor-pointer"
          onChange={selectors[0].function}
        >
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
      </section>
      <section
        key={selectors[0].id}
        className={`flex flex-col items-start w-full border-2 rounded-md px-4 pb-2 + ${
          selectors[1].errorStatus ? 'border-red-600' : ''
        }`}
      >
        <label className="text-midblue">{selectors[1].label}</label>
        <select
          id={selectors[1].id}
          className="sm:text-2xl text-darkblue w-full bg-inherit cursor-pointer"
          onChange={selectors[1].function}
        >
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
      </section>
      {
        // INPUT NUMBER
      }
      <section className="flex flex-col items-start w-full border-2 rounded-md px-4 pb-2">
        <label className="text-midblue">Amount:</label>
        <input
          id="inputNumber"
          className="text-2xl text-darkblue w-full bg-inherit font-exodos"
          onChange={typingChange}
          value={originalNumber}
          maxLength="20"
          placeholder="Enter a number..."
        ></input>
      </section>
      {currentError && (
        <p className="text-sm text-red-600 m-auto">{currentError}</p>
      )}
      <section className="flex flex-col items-center w-full">
        <button
          id="submitBtn"
          className="mt-4 px-4 py-2 bg-navyblue text-softgray rounded-md transition-all hover:shadow-xl hover:-translate-y-1"
        >
          Convert
        </button>
      </section>
    </form>
  )
}

export default Form
