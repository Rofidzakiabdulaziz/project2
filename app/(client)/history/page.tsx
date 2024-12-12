import { FaUserCircle } from "react-icons/fa";
import { MdOutlineDescription, MdAccessTime } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HistoryPage() {
  // Data dummy untuk contoh
  const history = [
    {
      username: "john_doe",
      description: "Mengerjakan Project",
      time: "2024-11-22 10:30 AM",
      equipment: "Basketball",
    },
    {
      username: "alice123",
      description: "Requested an extension for loan period",
      time: "2024-11-21 2:15 PM",
      equipment: "Laptop",
    },
    {
      username: "michael_smith",
      description: "Returned with minor damage",
      time: "2024-11-20 5:45 PM",
      equipment: "Projector",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen p-8">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">
          Loan History
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-6 py-4 text-left">User</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-100 transition`}
                >
                  <td className="border px-6 py-4 flex items-center gap-2">
                    <FaUserCircle className="text-blue-600 text-xl" />
                    <span className="font-semibold">{item.username}</span>
                  </td>
                  <td className="border px-6 py-4 flex items-center gap-2">
                    <MdOutlineDescription className="text-green-500 text-xl" />
                    <span>{item.description}</span>
                  </td>
                  <td className="border px-6 py-4 flex items-center gap-2">
                    <MdAccessTime className="text-orange-500 text-xl" />
                    <span>{item.time}</span>
                  </td>
                  <td className="border px-6 py-4 flex items-center gap-2">
                    <FiTool className="text-gray-700 text-xl" />
                    <span>{item.equipment}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
