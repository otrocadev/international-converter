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
      <div className="flex gap-6 flex-wrap justify-center">
        <section
          key={selectors[0].id}
          className={`flex flex-col items-start w-80 border-2 rounded-md px-4 pb-2 + ${
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
          className={`flex flex-col items-start w-80 border-2 rounded-md px-4 pb-2 + ${
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
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        {
          // INPUT NUMBER
        }
        <section className="flex flex-col items-start w-80 sm:w-full rounded-md px-4 pb-2">
          <label className="text-midblue">Amount:</label>
          <input
            id="inputNumber"
            className="text-2xl text-darkblue w-full bg-inherit border-2 p-2 font-exodos"
            onChange={typingChange}
            value={originalNumber}
            maxLength="20"
            placeholder="Enter a number..."
          ></input>
        </section>
        <button
          id="submitBtn"
          className="mt-4 px-4 py-2 bg-navyblue text-softgray rounded-md transition-all hover:shadow-xl hover:-translate-y-1"
        >
          Convert
        </button>
      </div>
      {currentError ? (
        <p className="h-4 text-sm text-red-600 m-auto">{currentError}</p>
      ) : (
        <p className="h-4"></p>
      )}
    </form>
  )
}

export default Form
