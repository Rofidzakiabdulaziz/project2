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
      <h2 className="text-3xl font-bold text-center mb-8">Inv Sekolah</h2>

      {/* Kontainer Card yang Rata Tengah */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Item */}
          <div className="bg-gray-100 rounded shadow-md p-4 max-w-xs flex flex-col items-center">
            <img
              src="https://www.acehground.com/wp-content/uploads/2024/04/komputer-300x200.jpg"
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
              src="https://s3-ceph.indoteam.id/chatnews-bucket-production/wp-content/production/uploads/2022/02/15194106/620b5fb4acb2d-300x200.jpg"
              alt="Handphone"
              className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">Hanphone</h3>
            <p className="text-gray-600 mb-4 text-center">
              Portable Handphone for presentations and events.
            </p>
            <button
              onClick={() => handleLoan("Handphone")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Loan
            </button>
          </div>
          <div className="bg-gray-100 rounded shadow-md p-4 max-w-xs flex flex-col items-center">
            <img
              src="data:image/jpeg;base64,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"
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
            <h3 className="text-xl font-semibold mb-2 text-center">Tablet </h3>
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
            <h3 className="text-xl font-semibold mb-2 text-center">Guitar</h3>
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
               Kajon w0rat99rfvYefEZHQqKalC7m4ttt6ylHc096aL6HthiISbSnFuLs0ntj8y4FyE09zT8G3 
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
