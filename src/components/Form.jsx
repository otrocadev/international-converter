function Form({
  convertNumber,
  selectOption,
  typingChange,
  originalNumber,
  optionsLabel = 'Choose an option:',
  options = [{}],
}) {
  return (
    <form
      onSubmit={convertNumber}
      className="flex flex-col justify-center gap-6"
    >
      <section className="flex flex-col items-start w-full border-2 border-slategray rounded-md px-4 pb-2">
        <label className="text-midblue">{optionsLabel}</label>
        <select
          id="optionSelector"
          className="sm:text-2xl text-darkblue w-full bg-inherit cursor-pointer"
          onChange={selectOption}
        >
          {options.map((item) => (
            <option value={item.value}>{item.text}</option>
          ))}
        </select>
      </section>
      <section className="flex flex-col items-start w-full border-2 border-slategray rounded-md px-4 pb-2">
        <label className="text-midblue">Amount:</label>
        <input
          id="inputNumber"
          className="text-2xl text-darkblue w-full bg-inherit"
          onChange={typingChange}
          value={originalNumber}
          maxLength="20"
          placeholder="Enter a number..."
        ></input>
      </section>
      <section className="flex flex-col items-center w-full">
        <button
          id="submitBtn"
          className="mt-4 px-4 py-2 bg-navyblue text-softgray rounded-md"
        >
          Convert
        </button>
      </section>
    </form>
  )
}

export default Form
