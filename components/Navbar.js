import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">School Loan System</h1>
        <div className="flex gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/loan" className="hover:underline">
            Inv Sekolah
          </Link>
          <Link href="/asrama" className="hover:underline">
            Inv Asrama
          </Link>
          <Link href="/history" className="hover:underline">
            History
          </Link>
        </div>
      </div>
    </nav>
  );
}
