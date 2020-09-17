import React from "react";

export default function HomePage(props) {
  const { styles } = props;
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a> Template
      </h1>
      <p>
        edit <code>/Components/HomePage/index.js</code> to start!
      </p>
    </main>
  );
}
