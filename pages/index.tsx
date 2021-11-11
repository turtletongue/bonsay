import Head from 'next/head';

import MainScreen from '../containers/main-screen.container';
import Bestsellers from '../containers/bestsellers.container';
import CategoriesScreen from '../containers/categories-screen.container';

import { mainScreenConfig } from '../variables';

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная | BONSAY</title>
      </Head>
      <MainScreen
        title={mainScreenConfig.title}
        description={mainScreenConfig.description}
        image={mainScreenConfig.image}
      />
      <Bestsellers />
      <CategoriesScreen />
    </>
  );
}
