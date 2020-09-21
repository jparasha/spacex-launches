import React from "react";

export default function Chip(props) {
  const { title = "test", isSelected = false, handleClick } = props || {};

  return (
    <div
      className={`chip ${isSelected ? "selected" : ""}`}
      onClick={(title) => handleClick(title)}
    >
      <div className="chip-content">{title}</div>
    </div>
  );
}
