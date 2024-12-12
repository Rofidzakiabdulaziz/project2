import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-72 lg:flex lg:h-auto lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              School Loan System
              <strong className="font-extrabold text-blue-500 sm:block">
                {" "}
                Track Your Loans.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Explore a smarter way to manage school resources with ease and
              efficiency!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded bg-blue-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-500 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/loan"
              >
                School
              </Link>

              <Link
                className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-400 shadow hover:text-blue-500 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                href="/asrama"
              >
                Dormitory
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
