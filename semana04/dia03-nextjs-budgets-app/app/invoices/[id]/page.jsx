export default function InvoiceDetail({ params }) {
  const { id } = params

  return (
    <div className="text-white">Invoice Detail {id}</div>
  )
}
