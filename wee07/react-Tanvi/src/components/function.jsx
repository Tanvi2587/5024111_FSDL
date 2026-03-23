import React, { useState } from "react";

function StudentCard({ message }) {
  const [student, setStudent] = useState({ name: "Tanvi", grade: "A+", id: "5024111" });

  const cardStyle = {
    background: "#f0fdf4", // Soft mint background
    border: "2px solid #22c55e",
    borderRadius: "12px",
    padding: "15px",
    maxWidth: "280px",
    fontFamily: "sans-serif",
    color: "#166534"
  };

  const btn = {
    background: "#22c55e", color: "white", border: "none",
    padding: "6px 12px", borderRadius: "6px", cursor: "pointer",
    marginTop: "10px", fontWeight: "bold"
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: "0 0 10px 0" }}>🎓 Student Info</h3>
      <hr style={{ border: "0.5px solid #bbf7d0" }} />
      
      <p style={{ fontSize: "14px" }}><b>ID:</b> {student.id}</p>
      <p style={{ fontSize: "18px" }}><b>Name:</b> {student.name}</p>
      <p><b>Grade:</b> <span style={{ color: "#15803d" }}>{student.grade}</span></p>
      
      <small>📩 {message || "No system alerts"}</small> <br />

      <button style={btn} onClick={() => setStudent({ ...student, name: "Tanvi ✨" })}>
        Verify Student
      </button>
    </div>
  );
}

export default StudentCard;