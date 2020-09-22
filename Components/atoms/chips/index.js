import React from "react";

export default function Chip(props) {
  const { title = "test", isSelected = false, type = 'year', handleClick } = props || {};

  return (
    <div
      className={`chip ${isSelected ? "selected" : ""}`}
      onClick={() => handleClick(title, type)}
    >
      <div className="chip-content">{title}</div>
    </div>
  );
}
