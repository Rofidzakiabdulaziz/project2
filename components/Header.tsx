import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl my-2 px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-blue-500" href="#">
              <span className="sr-only">Home</span>
              <Link className="group relative inline-block focus:outline-none focus:ring" href="/home">
                <span
                  className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-blue-500 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                ></span>

                <span
                  className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                >
                  School Loan System
                </span>
              </Link>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-dark transition hover:text-blue-500/75" href="/loan"> School </Link>
                </li>
                <li>
                  <Link className="text-dark transition hover:text-blue-500/75" href="/asrama"> Dormitory </Link>
                </li>
                <li>
                  <Link className="text-dark transition hover:text-blue-500/75" href="/history"> History </Link>
                </li>
                <li>
                  <Link className="text-dark transition hover:text-blue-500/75" href="/about"> About </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/login"
                >
                  Sign in as Admin
                </Link>

              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
