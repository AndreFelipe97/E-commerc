import type { NextPage } from "next";
import { LayoutDefault } from "../components/Layout";
import HomeComponent from "./home/_home";

const Home: NextPage = () => {
  return (
    <LayoutDefault title="HundredClothing|home">
      <HomeComponent />
    </LayoutDefault>
  );
};

export default Home;
