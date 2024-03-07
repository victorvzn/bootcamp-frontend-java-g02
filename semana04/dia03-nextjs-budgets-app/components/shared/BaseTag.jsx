export default function BaseTag({ label, bgColor, dotColor }) {
  return (
    <div className={`py-2 rounded-md text-center capitalize font-extrabold min-w-[120px] flex justify-center items-center ${bgColor} ${dotColor}`}>
      <span className="text-3xl leading-3 mr-2">•</span>
      <span>{label}</span>
    </div>
  )
}

