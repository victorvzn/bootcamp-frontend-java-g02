import Link from 'next/link'

export default function HeaderLogin() {
  return (
    <header className="bg-sky-700 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">
          <Link
            href='/home'
            className="hover:text-amber-800"
          >
            Budget App
          </Link>
        </h1>
      </div>
    </header>
  )
}
