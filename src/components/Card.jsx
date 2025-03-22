export default function Card({ children }) {
  return (
    <div className="flex flex-col justify-center gap-6 p-12 bg-lightgray rounded-md m-4 shadow-md">
      {children}
    </div>
  )
}
