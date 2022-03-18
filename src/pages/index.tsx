import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/Benner";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import HomeComponent from "./home/_home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HundredClothing|home</title>
      </Head>
      <Header />
      <Banner />
      <HomeComponent />
      <Footer />
    </>
  );
};

export default Home;
