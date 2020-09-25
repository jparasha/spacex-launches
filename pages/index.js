import Head from "next/head";
import HomePage from "../Components/organisms/HomePage";
import Footer from '../Components/organisms/Footer';
export default function Home() {
  return (
    <div className={"container"}>
      <Head>
        <title>SPACEX LAUNCHES | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
      <Footer />
    </div>
  );
}
