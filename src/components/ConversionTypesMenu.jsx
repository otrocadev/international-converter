function ConversionTypesMenu({
  menu = [],
  conversionType,
  changeConversionType,
}) {
  return (
    <nav className="flex w-full p-2 gap-2 mb-6">
      {menu.map((item) => (
        <button
          key={item.id}
          onClick={() => changeConversionType(item.id)}
          className={`
            px-4 py-2 transition-all + ${
              item.id == conversionType
                ? 'rounded-lg bg-midblue text-softgray'
                : ''
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
