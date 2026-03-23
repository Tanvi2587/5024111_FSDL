import React, { useState } from "react";

export default function SearchForm() {
  const [query, setQuery] = useState("");

  return (
    <div style={{ padding: "20px", border: "2px solid #e2e8f0", borderRadius: "15px", maxWidth: "300px" }}>
      <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>🔍 Quick Search</label>
      
      <input 
        type="text" 
        placeholder="Type something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "90%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
      />

      {query && (
        <p style={{ marginTop: "15px", color: "#64748b", fontStyle: "italic" }}>
          Searching for: <strong style={{ color: "#3b82f6" }}>{query}</strong>
        </p>
      )}
    </div>
  );
}