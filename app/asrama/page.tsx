"use client";
import { useState } from "react";

export default function LoanPage() {
  const [message, setMessage] = useState("");

  const handleLoan = (equipmentName: string) => {
    setMessage(`Successfully loaned ${equipmentName}`);
    setTimeout(() => setMessage(""), 3000); // Menghapus pesan setelah 3 detik
  };

  return (
    <div className="bg-white min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Inv Asrama</h2>

      {/* Kontainer Card yang Rata Tengah */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Item */}
          <div className="bg-gray-100 rounded shadow-md p-4 max-w-xs flex flex-col items-center">
            <img
              src="https://via.placeholder.com/300x200.png?text=Laptop"
              alt="Laptop"
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">Laptop</h3>
            <p className="text-gray-600 mb-4 text-center">
              A high-performance laptop for study or project work.
            </p>
            <button
              onClick={() => handleLoan("Laptop")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Loan
            </button>
          </div>

          {/* Tambahkan Card Lain Jika Perlu */}
          <div className="bg-gray-100 rounded shadow-md p-4 max-w-xs flex flex-col items-center">
            <img
              src="https://via.placeholder.com/300x200.png?text=Projector"
              alt="Projector"
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">Projector</h3>
            <p className="text-gray-600 mb-4 text-center">
              Portable projector for presentations and events.
            </p>
            <button
              onClick={() => handleLoan("Projector")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Loan
            </button>
          </div>
          <div className="bg-gray-100 rounded shadow-md p-4 max-w-xs flex flex-col items-center">
            <img
              src="https://via.placeholder.com/300x200.png?text=Projector"
              alt="Projector"
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">Projector</h3>
            <p className="text-gray-600 mb-4 text-center">
              Portable projector for presentations and events.
            </p>
            <button
              onClick={() => handleLoan("Projector")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Loan
            </button>
          </div>
          <div className="bg-gray-100 rounded shadow-md p-4 max-w-xs flex flex-col items-center">
            <img
              src="https://via.placeholder.com/300x200.png?text=Projector"
              alt="Projector"
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">Projector</h3>
            <p className="text-gray-600 mb-4 text-center">
              Portable projector for presentations and events.
            </p>
            <button
              onClick={() => handleLoan("Projector")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Loan
            </button>
          </div>
          <div className="bg-gray-100 rounded shadow-md p-4 max-w-xs flex flex-col items-center">
            <img
              src="https://via.placeholder.com/300x200.png?text=Projector"
              alt="Projector"
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">Projector</h3>
            <p className="text-gray-600 mb-4 text-center">
              Portable projector for presentations and events.
            </p>
            <button
              onClick={() => handleLoan("Projector")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Loan
            </button>
          </div>

          <div className="bg-gray-100 rounded shadow-md p-4 max-w-xs flex flex-col items-center">
            <img
              src="https://via.placeholder.com/300x200.png?text=Basketball"
              alt="Basketball"
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Basketball
            </h3>
            <p className="text-gray-600 mb-4 text-center">
              Quality basketball for recreational or competitive use.
            </p>
            <button
              onClick={() => handleLoan("Basketball")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Loan
            </button>
          </div>
        </div>
      </div>

      {/* Pesan Konfirmasi */}
      {message && (
        <div className="mt-8 text-center text-green-500 text-lg font-semibold">
          {message}
        </div>
      )}
    </div>
  );
}
