"use client";
import { useState } from "react";

export default function DashboardPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Laptop",
      description: "A high-performance laptop for study or project work.",
      imageUrl: "https://via.placeholder.com/300x200.png?text=Laptop",
    },

    {
      id: 2,
      name: "Projector",
      description: "Portable projector for presentations and events.",
      imageUrl: "https://via.placeholder.com/300x200.png?text=Projector",
    },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    imageUrl: "",
  });

  const handleAddItem = () => {
    if (newItem.name && newItem.description && newItem.imageUrl) {
      setItems((prevItems) => [
        ...prevItems,
        {
          id: Date.now(), // Unique ID
          name: newItem.name,
          description: newItem.description,
          imageUrl: newItem.imageUrl,
        },
      ]);
      setNewItem({ name: "", description: "", imageUrl: "" }); // Reset form
    } else {
      alert("Please fill in all fields!");
    }
  };

  const handleDeleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Admin - Manage Inventory
      </h2>

      {/* Form Tambah Barang */}
      <div className="mb-8 max-w-md mx-auto bg-gray-100 p-4 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add New Item</h3>
        <input
          type="text"
          placeholder="Item Name"
          className="w-full mb-2 p-2 border rounded"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="w-full mb-2 p-2 border rounded"
          value={newItem.description}
          onChange={(e) =>
            setNewItem({ ...newItem, description: e.target.value })
          }
        ></textarea>
        <input
          type="text"
          placeholder="Image URL"
          className="w-full mb-2 p-2 border rounded"
          value={newItem.imageUrl}
          onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
        />
        <button
          onClick={handleAddItem}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add Item
        </button>
      </div>

      {/* Daftar Barang */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded shadow-md p-4 max-w-xs flex flex-col items-center"
          >
            <img src={item.imageUrl} alt={item.name} className="rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">
              {item.name}
            </h3>
            <p className="text-gray-600 mb-4 text-center">{item.description}</p>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
