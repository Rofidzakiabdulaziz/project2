"use client";
import { useEffect, useState } from "react";

interface Asrama {
  id: number;
  fullname: string;
  kelas: string;
  nis: string;
  activity: string;
  borrow_time: string;
  equipment_name: string;
  status: string;
  return_time: string | null;
  created_at: string;
  updated_at: string;
}

interface Sekolah {
  id: number;
  fullname: string;
  kelas: string;
  nis: string;
  activity: string;
  borrow_time: string;
  equipment_name: string;
  status: string;
  return_time: string | null;
  created_at: string;
  updated_at: string;
}

interface ErrorResponse {
  error: string;
}

export default function LoanPage() {
  const [asramaList, setAsramaList] = useState<Asrama[]>([]);
  const [sekolahList, setSekolahList] = useState<Sekolah[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchAsrama = async () => {
      try {
        const responseAsrama = await fetch("/api/history/asrama");
        const data: Asrama[] | ErrorResponse = await responseAsrama.json();

        if ("error" in data) {
          setMessage(data.error);
        } else {
          setAsramaList(data);
        }
      } catch (error) {
        console.error("Error fetching history:", error);
        setMessage("Failed to fetch history");
      }
    };

    const fetchSekolah = async () => {
      try {
        const responseSekolah = await fetch("/api/history/sekolah");
        const data: Sekolah[] | ErrorResponse = await responseSekolah.json();

        if ("error" in data) {
          setMessage(data.error);
        } else {
          setSekolahList(data);
        }
      } catch (error) {
        console.error("Error fetching history:", error);
        setMessage("Failed to fetch history");
      }
    };

    fetchAsrama();
    fetchSekolah();
  },
   []);

  return (
    <div className="bg-white min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Loan History</h2>

      {message && <div className="text-center text-red-500">{message}</div>}

      <div className="grid grid-cols-2 gap-8">
        {/* Tabel Kiri */}
        <div className="overflow-x-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">Tabel Asrama</h3>
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead className="bg-blue-600">
              <tr>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">Nama Peminjam</th>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">Kelas</th>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">NIS</th>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">Alat Peminjaman</th>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">Keperluan</th>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">Status</th>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">Waktu Peminjaman</th>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">Waktu Pengembalian</th>
              </tr>
            </thead>
            <tbody>
              {asramaList.map((Asrama) => (
                <tr
                  key={Asrama.id}
                  className={`${Asrama.id % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-100 transition`}
                >
                  <td className="border-b p-4 text-sm text-gray-600">{Asrama.fullname}</td>
                  <td className="border-b p-4 text-sm text-gray-600">{Asrama.kelas}</td>
                  <td className="border-b p-4 text-sm text-gray-600">{Asrama.nis}</td>
                  <td className="border-b p-4 text-sm text-gray-600">{Asrama.equipment_name}</td>
                  <td className="border-b p-4 text-sm text-gray-600">{Asrama.activity}</td>
                  <td className="border-b p-4 text-sm text-gray-600">{Asrama.status}</td>
                  <td className="border-b p-4 text-sm text-gray-500">
                    {new Date(Asrama.borrow_time).toLocaleDateString()}{" "}
                    {new Date(Asrama.borrow_time).toLocaleTimeString()}
                  </td>
                  <td className="border-b p-4 text-sm text-gray-500">
                    {Asrama.return_time ? (
                      <>
                        {new Date(Asrama.return_time).toLocaleDateString()}{" "}
                        {new Date(Asrama.return_time).toLocaleTimeString()}
                      </>
                    ) : (
                      <span className="text-red-500">Not Returned</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tabel Kanan */}
        <div className="overflow-x-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">Tabel Sekolah</h3>
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead className="bg-green-600">
              <tr>
              <th className="border-b p-4 text-left text-sm font-semibold text-white">Nama Peminjam</th>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">Kelas</th>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">NIS</th>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">Alat Peminjaman</th>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">Keperluan</th>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">Status</th>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">Waktu Peminjaman</th>
                <th className="border-b p-4 text-left text-sm font-semibold text-white">Waktu Pengembalian</th>
              </tr>
            </thead>
            <tbody>
              {sekolahList.map((Sekolah) => (
                <tr
                  key={Sekolah.id}
                  className={`${Sekolah.id % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-green-100 transition`}
                >
                  <td className="border-b p-4 text-sm text-gray-600">{Sekolah.fullname}</td>
                  <td className="border-b p-4 text-sm text-gray-600">{Sekolah.kelas}</td>
                  <td className="border-b p-4 text-sm text-gray-600">{Sekolah.nis}</td>
                  <td className="border-b p-4 text-sm text-gray-600">{Sekolah.equipment_name}</td>
                  <td className="border-b p-4 text-sm text-gray-600">{Sekolah.activity}</td>
                  <td className="border-b p-4 text-sm text-gray-600">{Sekolah.status}</td>
                  <td className="border-b p-4 text-sm text-gray-500">
                    {new Date(Sekolah.borrow_time).toLocaleDateString()}{" "}
                    {new Date(Sekolah.borrow_time).toLocaleTimeString()}
                  </td>
                  <td className="border-b p-4 text-sm text-gray-500">
                    {Sekolah.return_time ? (
                      <>
                        {new Date(Sekolah.return_time).toLocaleDateString()}{" "}
                        {new Date(Sekolah.return_time).toLocaleTimeString()}
                      </>
                    ) : (
                      <span className="text-red-500">Not Returned</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
