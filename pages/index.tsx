import Head from 'next/head';
import { GetStaticProps } from 'next';

import { ISR_DELAY_IN_SECONDS, mainScreenConfig } from '../variables';
import MainScreen from '../containers/main-screen.container';
import Bestsellers from '../containers/bestsellers.container';
import CategoriesScreen from '../containers/categories-screen.container';

import { Product } from '../store/products/products.declarations';
import { Category } from '../declarations';

export default function Home({ bestsellers, categories }) {
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
      <Bestsellers bestsellers={bestsellers} />
      <CategoriesScreen categories={categories} />
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const bestsellers: Product[] = [
    {
      id: 1,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    },
    {
      id: 2,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    },
    {
      id: 3,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    },
    {
      id: 4,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    },
    {
      id: 5,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    },
    {
      id: 6,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    },
    {
      id: 7,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    },
    {
      id: 8,
      name: 'MONDAY PINE',
      price: 750,
      description: '',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20',
      age: 30,
      height: 34,
      upload: { path: '/images/product.jpg' }
    }
  ]; // server fetching

  const categories: Category[] = [
    {
      id: 1,
      name: 'Фикусы',
      upload: { path: '/images/ficuses.jpg' },
      description:
        'Фикус – это разновидность растений, произрастающих в тропиках по всему миру. Он невероятно разнообразен, некоторые виды используются в качестве домашних растений. Фикус может быть кустарником, лозой или просто небольшим декоративным растением. Многие подвиды производят воздушные корни, другие дают вкусные плоды, к примеру, инжир. Священный инжир имеет особое значение для последователей некоторых азиатских религий, включая буддизм.',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20'
    },
    {
      id: 2,
      name: 'Сосны',
      upload: { path: '/images/pines.jpg' },
      description:
        'Сосна - это вечнозеленое хвойное дерево, кустарник или стланик, относится к классу хвойные, порядку сосновые, семейству сосновые, роду сосны. Продолжительность жизни сосны колеблется от 100 до 600 лет. Сегодня встречаются единичные деревья, возраст которых приближается к 5 векам. Сосна – это светолюбивое растение. Время цветения наступает в конце весны, но процесс происходит без появления цветков. В итоге образуются сосновые шишки, которые отличаются многообразием форм, размеров и цветов.',
      createdAt: '2020-12-20',
      updatedAt: '2020-12-20'
    }
  ]; // server fetching

  return {
    props: {
      bestsellers,
      categories
    },
    revalidate: ISR_DELAY_IN_SECONDS
  };
};
