import Head from "next/head";
import HomePage from "../Components/organisms/HomePage";

export default function Home() {
  return (
    <div className={"container"}>
      <Head>
        <title>SPACEX LAUNCHES | Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
      <footer className={"footer"}>
        <a
          href="https://github.com/jparasha"
          target="_blank"
          rel="noopener noreferrer"
          className={"link "}
        >
         Jayant Parashar
        </a>
      </footer>
    </div>
  );
}
