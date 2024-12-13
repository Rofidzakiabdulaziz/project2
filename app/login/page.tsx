"use client"; // Tambahkan ini di bagian atas

import { useState } from "react";
import { useRouter } from "next/navigation";

interface LoginFrmProps {
  darkMode: boolean;
}

const LoginFrm = ({ darkMode }: LoginFrmProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Validasi login
    if (username === "admin" && password === "admin123") {
      // Login berhasil, arahkan ke halaman dashboard peminjaman
      router.push("/dashboard");
    } else {
      // Tampilkan pesan error
      setError("Username atau password yang Anda masukkan salah!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col w-full p-8 max-w-lg mx-auto shadow-lg rounded-lg transition-all duration-300 transform ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-800"
        }`}
      >
        {/* Judul Form */}
        <h2
          className={`text-3xl font-semibold mb-6 text-center ${
            darkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Sistem Login
        </h2>

        {/* Error Message */}
        {error && (
          <p className="text-sm text-red-500 mb-4 text-center" role="alert">
            {error}
          </p>
        )}

        {/* Input Username */}
        <div className="mb-6">
          <label
            htmlFor="username"
            className={`block text-sm font-medium mb-1 ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`w-full border-b-2 bg-transparent outline-none px-3 py-2 transition-all duration-300 focus:ring-2 rounded-md ${
              darkMode
                ? "border-gray-600 text-gray-100 focus:ring-blue-500"
                : "border-gray-300 text-gray-800 focus:ring-blue-600"
            }`}
            placeholder="Masukkan username"
          />
        </div>

        {/* Input Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className={`block text-sm font-medium mb-1 ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full border-b-2 bg-transparent outline-none px-3 py-2 transition-all duration-300 focus:ring-2 rounded-md ${
              darkMode
                ? "border-gray-600 text-gray-100 focus:ring-blue-500"
                : "border-gray-300 text-gray-800 focus:ring-blue-600"
            }`}
            placeholder="Masukkan password"
          />
        </div>

        {/* Tombol Submit */}
        <button
          type="submit"
          className={`w-full py-3 font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
            darkMode
              ? "bg-blue-600 text-gray-100 hover:bg-blue-500"
              : "bg-blue-500 text-white hover:bg-blue-400"
          }`}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginFrm;
