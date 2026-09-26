import React, { useState } from "react";
import StudentPanel from "./StudentPanel";
import AdminPanel from "./AdminPanel";

export default function Dashboard({ assignments, setAssignments, studentSubmissions }) {
  const [role, setRole] = useState("student");

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="font-bold">Assignment Dashboard</h1>
        <div>
          <button
            onClick={() => setRole("student")}
            className={`px-4 py-2 mr-2 rounded ${role === "student" ? "bg-blue-600" : "bg-gray-600"}`}
          >
            Student View
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`px-4 py-2 rounded ${role === "admin" ? "bg-blue-600" : "bg-gray-600"}`}
          >
            Admin View
          </button>
        </div>
      </nav>

      {/* Panels */}
      {role === "student" ? (
        <StudentPanel assignments={assignments} />
      ) : (
        <AdminPanel
          assignments={assignments}
          setAssignments={setAssignments}
          studentSubmissions={studentSubmissions}
        />
      )}
    </div>
  );
}
