"use client";
import { useEffect, useState } from "react";

interface History {
  id: number;
  fullname: string;
  kelas: string;
  nis: string;
  activity: string;
  borrow_time: string;
  equipment_name: string;
  status: string,
  return_time: string | null;
  created_at: string;
  updated_at: string;
}

interface ErrorResponse {
  error: string;
}

export default function LoanPage() {
  const [historyList, setHistoryList] = useState<History[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch("/api/history/asrama");
        
        const data: History[] | ErrorResponse = await response.json();

        if ('error' in data) {
          setMessage(data.error);
        } else {
          setHistoryList(data);
        }
      } catch (error) {
        console.error("Error fetching history:", error);
        setMessage("Failed to fetch history");
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="bg-white min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Loan History</h2>

      {message && (
        <div className="text-center text-red-500">{message}</div>
      )}

      <div className="overflow-x-auto">
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
            {historyList.map((history) => (
              <tr
                key={history.id}
                className={`${history.id % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-100 transition`}
              >
                <td className="border-b p-4 text-sm text-gray-600">{history.fullname}</td>
                <td className="border-b p-4 text-sm text-gray-600">{history.kelas}</td>
                <td className="border-b p-4 text-sm text-gray-600">{history.nis}</td>
                <td className="border-b p-4 text-sm text-gray-600">{history.equipment_name}</td>
                <td className="border-b p-4 text-sm text-gray-600">{history.activity}</td>
                <td className="border-b p-4 text-sm text-gray-600">{history.status}</td>
                <td className="border-b p-4 text-sm text-gray-500">
                  {new Date(history.borrow_time).toLocaleDateString()}{" "}
                  {new Date(history.borrow_time).toLocaleTimeString()}
                </td>
                <td className="border-b p-4 text-sm text-gray-500">
                  {history.return_time ? (
                    <>
                      {new Date(history.return_time).toLocaleDateString()}{" "}
                      {new Date(history.return_time).toLocaleTimeString()}
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
  );
}