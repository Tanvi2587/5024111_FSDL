import React, { useState } from "react";

export default function EventShowcase() {
  const [status, setStatus] = useState("Waiting...");
  const [hover, setHover] = useState(false);

  const style = {
    padding: "20px", borderRadius: "10px", textAlign: "center",
    background: hover ? "#f0abfc" : "#818cf8", // Changes on hover
    transition: "0.3s", cursor: "pointer", color: "white", fontWeight: "bold"
  };

  return (
    <div 
      style={style}
      onMouseEnter={() => { setHover(true); setStatus("Hovering! ⚡"); }}
      onMouseLeave={() => { setHover(false); setStatus("Waiting..."); }}
      onClick={() => setStatus("CLICKED! 🔥")}
    >
      <h3>Event Tracker</h3>
      <p style={{ fontSize: "20px" }}>{status}</p>
      <small>(Hover me or Click me!)</small>
    </div>
  );
}