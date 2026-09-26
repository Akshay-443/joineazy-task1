import React, { useState } from "react";

export default function StudentPanel({ assignments }) {
  const [submitted, setSubmitted] = useState({});
  const [confirming, setConfirming] = useState(null);

  const handleSubmit = (id) => {
    if (confirming === id) {
      // Final confirmation
      setSubmitted({ ...submitted, [id]: true });
      setConfirming(null);
    } else {
      // First click → ask for confirmation
      setConfirming(id);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Assignments</h2>
      {assignments.map((a) => (
        <div
          key={a.id}
          className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center"
        >
          <div>
            <h3 className="font-semibold">{a.title}</h3>
            <p className="text-sm text-gray-500">Due: {a.due}</p>
          </div>
          <div>
            {submitted[a.id] ? (
              <span className="text-green-600 font-medium">Submitted ✅</span>
            ) : (
              <button
                onClick={() => handleSubmit(a.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {confirming === a.id ? "Confirm Submission" : "Submit"}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
