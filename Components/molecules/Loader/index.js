import React from "react";

export default function Loader(props) {
  const { isLoading = false, title = "Loading" } = props || {};

  const Loader = isLoading ? (
    <div className="flex-default">
      <div className="flex-default flex-default-item">
        <img src={"/spinner.svg"} alt="loader" />
        <p>{title}</p>
      </div>
    </div>
  ) : null;

  return Loader;
}
