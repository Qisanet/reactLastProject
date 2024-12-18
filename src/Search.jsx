import React from "react";

export default function Search({ onSearch }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search for a movie..."
        onChange={(e) => onSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}