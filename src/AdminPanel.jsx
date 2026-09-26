import React, { useState } from "react";

export default function AdminPanel({ assignments, setAssignments, studentSubmissions }) {
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const [link, setLink] = useState("");

  const addAssignment = () => {
    if (!title || !due) return;
    const newAssignment = {
      id: assignments.length + 1,
      title,
      due,
      link,
    };
    setAssignments([...assignments, newAssignment]);
    setTitle("");
    setDue("");
    setLink("");
  };

  // Calculate progress for each assignment
  const getProgress = (id) => {
    const submissions = studentSubmissions[id] || [];
    const total = submissions.length;
    const submittedCount = submissions.filter((s) => s.submitted).length;
    return total === 0 ? 0 : Math.round((submittedCount / total) * 100);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>

      {/* Form */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 className="font-semibold mb-2">Create Assignment</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="date"
          value={due}
          onChange={(e) => setDue(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Drive Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={addAssignment}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add
        </button>
      </div>

      {/* Assignment List with Progress */}
      {assignments.map((a) => (
        <div
          key={a.id}
          className="bg-white shadow-md rounded-lg p-4 mb-4"
        >
          <h3 className="font-semibold">{a.title}</h3>
          <p className="text-sm text-gray-500">Due: {a.due}</p>
          {a.link && (
            <a
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Submission Link
            </a>
          )}

          {/* Progress Bar */}
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${getProgress(a.id)}%` }}
              ></div>
            </div>
            <p className="text-sm mt-1">{getProgress(a.id)}% submitted</p>
          </div>
        </div>
      ))}
    </div>
  );
}
