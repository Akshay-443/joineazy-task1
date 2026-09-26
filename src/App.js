import React, { useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  // Shared assignments state
  const [assignments, setAssignments] = useState([
    { id: 1, title: "Assignment 1", due: "2026-09-27", link: "" },
    { id: 2, title: "Assignment 2", due: "2026-09-28", link: "" },
  ]);

  // Mock student submissions (simulate 3 students)
  const studentSubmissions = {
    1: [
      { student: "Alice", submitted: true },
      { student: "Bob", submitted: false },
      { student: "Charlie", submitted: true },
    ],
    2: [
      { student: "Alice", submitted: false },
      { student: "Bob", submitted: false },
      { student: "Charlie", submitted: false },
    ],
  };

  return (
    <Dashboard
      assignments={assignments}
      setAssignments={setAssignments}
      studentSubmissions={studentSubmissions}
    />
  );
}

export default App;
