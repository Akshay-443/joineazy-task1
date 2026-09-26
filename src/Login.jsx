// src/Login.jsx
import React from "react";

export default function Login({ onLogin }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <button
          onClick={onLogin}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Login as Akshay
        </button>
      </div>
    </div>
  );
}

