import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomePage from "../Components/HomePage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App | Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage styles={styles} />
      <footer className={styles.footer}>
        <a
          href="https://github.com/jparasha"
          target="_blank"
          rel="noopener noreferrer"
        >
          @jparasha
        </a>
      </footer>
    </div>
  );
}
