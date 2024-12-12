"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

interface Equipment {
  id: number;
  name_equipment: string;
  image: string;
  description: string;
  quantity: number;
  status: string;
  availability: boolean;
  created_at: string;
  updated_at: string;
}

export default function LoanPage() {
  const [equipmentList, setEquipmentList] = useState<Equipment[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch("/api/equipments/sekolah");
        const data: Equipment[] = await response.json();
        const filteredData = data.filter(
          (equipment) => equipment.status === "Baik"
        );

        setEquipmentList(filteredData);
      } catch (error) {
        console.error("Error fetching equipment:", error);
      }
    };

    fetchEquipment();
  }, []);

  const handleLoan = (equipmentName: string) => {
    setMessage(`Successfully loaned ${equipmentName}`);
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Inventory Sekolah
        </h2>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {equipmentList.map((equipment) => (
              <div
                key={equipment.id}
                className="bg-gray-100 rounded shadow-md p-4 max-w-xs flex flex-col items-center"
              >
                <img
                  src={equipment.image}
                  alt={equipment.name_equipment}
                  className="rounded mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {equipment.name_equipment}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {equipment.description}
                </p>
                <p className="text-gray-500 mb-2 text-sm">
                  Status:{" "}
                  <span
                    className={
                      equipment.quantity > 0 ? "text-green-500" : "text-red-500"
                    }
                  >
                    {equipment.quantity > 0 ? "Available" : "Not Available"}
                  </span>
                </p>
                <button
                  onClick={() => handleLoan(equipment.name_equipment)}
                  className={`px-4 py-2 rounded transition ${
                    equipment.quantity > 0
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                  disabled={equipment.quantity === 0}
                >
                  {equipment.quantity > 0 ? "Loan" : "Empty"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {message && (
          <div className="mt-8 text-center text-green-500 text-lg font-semibold">
            {message}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
