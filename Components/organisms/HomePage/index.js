import React from "react";

export default function HomePage(props) {
  return (
    <main className={"flex-default"}>
      <h1 className={`title flex-item-default `}>
        SpaceX <a href="https://nextjs.org">Demo!</a>
      </h1>
      <span className={"flex-item-default"}>
        <button onClick={() => window && (window.location.href = "/spacex")}>
          Continue
        </button>
      </span>
    </main>
  );
}
