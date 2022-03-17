import type { NextPage } from 'next';
import { Banner } from '../components/Benner';
import { Header } from '../components/Header';
import HomeComponent from './home/_home';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <HomeComponent />
    </>
  );
};

export default Home;
