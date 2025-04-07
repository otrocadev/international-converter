function ConversionTypesMenu({
  menu = [],
  conversionType,
  changeConversionType,
}) {
  return (
    <nav id="convertionTypeMenu" className="flex w-full p-2 gap-2 mb-6">
      {menu.map((item) => (
        <button
          key={item.id}
          id={item.id}
          onClick={() => changeConversionType(item.id)}
          className={`
            px-4 py-2 rounded-lg transition-all hover:shadow-xl hover:-translate-y-1 hover:bg-midblue hover:text-softgray + ${
              item.id == conversionType ? 'bg-midblue text-softgray' : ''
            }
          `}
        >
          {item.name}
        </button>
      ))}
    </nav>
  )
}

export default ConversionTypesMenu
