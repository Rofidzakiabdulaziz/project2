"use client";
import { useEffect, useState } from "react";
interface Equipment {
  id: number;
  name_equipment: string;
  image: string;
  description: string | null;
  quantity: number;
  status: string;
  availability: boolean;
  created_at: string;
  updated_at: string;
}

export default function DashboardPage() {

  const [equipmentList, setEquipmentList] = useState<Equipment[]>([]);
  const [formData, setFormData] = useState({
    name_equipment: "",
    image: "",
    description: "",
    quantity: 0,
    status: "Baik",
    availability: true,
  });
  const [message, setMessage] = useState("");

  // Fetch data from the API
  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch("/api/equipments/asrama", {
          method: "GET",
        });
        const data = await response.json();
        if (data.error) {
          setMessage(data.error);
        } else {
          setEquipmentList(data);
        }
      } catch (error) {
        setMessage("Failed to fetch equipment");
      }
    };

    fetchEquipment();
  }, []);

  // Handle form submission to add new equipment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/equipments/asrama", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.error) {
        setMessage(result.error);
      } else {
        setMessage(result.message);
        setEquipmentList((prev) => [...prev, result.data]); // Add new data to the list
        setFormData({
          name_equipment: "",
          image: "",
          description: "",
          quantity: 0,
          status: "Baik",
          availability: true,
        }); // Reset form
      }
    } catch (error) {
      setMessage("Failed to add equipment");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Equipment Management</h1>

      {/* Message */}
      {message && <div className="mb-4 text-red-500">{message}</div>}

      {/* Form to add equipment */}
      <form className="bg-white p-4 shadow mb-8" onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-4">Add New Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Equipment Name"
            value={formData.name_equipment}
            onChange={(e) =>
              setFormData({ ...formData, name_equipment: e.target.value })
            }
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            className="p-2 border rounded"
          />
          <textarea
            placeholder="Description"
            value={formData.description || ""}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="p-2 border rounded"
          ></textarea>
          <input
            type="number"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={(e) =>
              setFormData({ ...formData, quantity: Number(e.target.value) })
            }
            className="p-2 border rounded"
            required
          />
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="p-2 border rounded"
          >
            <option value="Baik">Baik</option>
            <option value="Rusak">Rusak</option>
          </select>
          <select
            value={String(formData.availability)}
            onChange={(e) =>
              setFormData({
                ...formData,
                availability: e.target.value === "true",
              })
            }
            className="p-2 border rounded"
          >
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Equipment
        </button>
      </form>

      {/* Table of equipment */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border p-4 text-left">Name</th>
              <th className="border p-4 text-left">Image</th>
              <th className="border p-4 text-left">Description</th>
              <th className="border p-4 text-left">Quantity</th>
              <th className="border p-4 text-left">Status</th>
              <th className="border p-4 text-left">Availability</th>
            </tr>
          </thead>
          <tbody>
            {equipmentList.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border p-4">{item.name_equipment}</td>
                <td className="border p-4">
                  <img
                    src={item.image}
                    alt={item.name_equipment}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="border p-4">{item.description || "-"}</td>
                <td className="border p-4">{item.quantity}</td>
                <td className="border p-4">{item.status}</td>
                <td className="border p-4">
                  {item.availability ? "Available" : "Not Available"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
