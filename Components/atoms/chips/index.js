import React from "react";

export default function Chip(props) {
  const { title = "test", isSelected = false, key = "", handleClick } =
    props || {};

  return (
    <div
      className={`chip ${isSelected ? "selected" : ""}`}
      key={key}
      onClick={(title) => handleClick(title)}
    >
      <div className="chip-content">{title}</div>
    </div>
  );
}
