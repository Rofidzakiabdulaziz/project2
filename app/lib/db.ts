import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();

export const role = "admin"; // Atur role sesuai dengan kebutuhan

// Data barang mock
export const itemsData = [
  {
    id: 1,
    name: "Laptop",
    image: "/images/laptop.jpg",
    description: "Laptop untuk pemrograman dan tugas sekolah.",
    quantity: 5,
    status: "Available",
    availability: "Available", // Berdasarkan kuantitas
  },
  {
    id: 2,
    name: "Proyektor",
    image: "/images/proyektor.jpg",
    description: "Proyektor untuk presentasi di kelas.",
    quantity: 0,
    status: "Not Available",
    availability: "Not Available", // Berdasarkan kuantitas
  },
  {
    id: 3,
    name: "Kamera",
    image: "/images/kamera.jpg",
    description: "Kamera digital untuk dokumentasi acara.",
    quantity: 3,
    status: "Available",
    availability: "Available", // Berdasarkan kuantitas
  },
  {
    id: 4,
    name: "Meja Rapat",
    image: "/images/meja-rapat.jpg",
    description: "Meja besar untuk rapat atau pertemuan.",
    quantity: 2,
    status: "Available",
    availability: "Available", // Berdasarkan kuantitas
  },
  {
    id: 5,
    name: "Kursi",
    image: "/images/kursi.jpg",
    description: "Kursi untuk ruang kelas atau rapat.",
    quantity: 0,
    status: "Not Available",
    availability: "Not Available", // Berdasarkan kuantitas
  },
];

const pgp = pgPromise();

const db = pgp({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default db;
