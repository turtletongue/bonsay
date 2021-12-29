import Head from 'next/head';

import CategoriesGrid from '../containers/categories-grid.container';

import { GetStaticProps } from 'next';
import { Category } from '../declarations';
import { ISR_DELAY_IN_SECONDS } from '../variables';

export const Categories = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Категории | BONSAY</title>
      </Head>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8'>
        <CategoriesGrid categories={categories} />
      </div>
    </>
  );
};

export default Categories;

export const getStaticProps: GetStaticProps = () => {
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
      categories
    },
    revalidate: ISR_DELAY_IN_SECONDS
  };
};
