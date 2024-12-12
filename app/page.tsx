import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-72 lg:flex lg:h-screen lg:items-center lg:justify-center">
        <div className="rounded-3xl shadow-2xl">
          <div className="p-8 text-center sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              FAAR Project
            </p>

            <h2 className="mt-6 text-3xl font-bold">
              Welcome to School Loan System!
            </h2>

            <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded bg-blue-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-500 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="/home"
                >
                  Go to Page
                </Link>

                <Link
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-400 shadow hover:text-blue-500 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
