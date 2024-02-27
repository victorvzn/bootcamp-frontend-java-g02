import Link from 'next/link'

export default function Page() {
  return (
    <>
      <nav className="flex gap-2">
        <Link href="/login" className="text-blue-600">Login</Link>
        <Link href="/home" className="text-blue-600">Home</Link>
        <Link href="/home/products" className="text-blue-600">Products</Link>
      </nav>

      <h1>Hola Next.js</h1>
    </>
  );
}
