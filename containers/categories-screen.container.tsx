import Image from 'next/image';

import ScreenHeading from '../components/screen-heading.component';
import UnderlineLink from '../components/underline-link.component';

export const CategoriesScreen = () => {
  return (
    <div className='w-full bg-lightgray'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8'>
        <ScreenHeading href='/categories'>Категории</ScreenHeading>
        <div className='grid grid-flow-row max-w-6xl auto-cols-fr grid-cols-2 justify-center gap-12'>
          <div>
            <Image
              src='/images/ficuses.jpg'
              alt='Ficuses'
              width={550}
              height={366.01}
            />
          </div>
          <div className='flex flex-col justify-between'>
            <div>
              <div className='text-primary text-2xl mb-4'>Фикусы</div>
              <p className='text-primary'>
                Фикус – это разновидность растений, произрастающих в тропиках по
                всему миру. Он невероятно разнообразен, некоторые виды
                используются в качестве домашних растений. Фикус может быть
                кустарником, лозой или просто небольшим декоративным растением.
                Многие подвиды производят воздушные корни, другие дают вкусные
                плоды, к примеру, инжир. Священный инжир имеет особое значение
                для последователей некоторых азиатских религий, включая буддизм.
              </p>
            </div>
            <UnderlineLink href='/categories/ficuses'>
              Посмотреть категорию
            </UnderlineLink>
          </div>
          <div className='flex flex-col justify-between'>
            <div>
              <div className='text-primary text-2xl mb-4'>Сосны</div>
              <p className='text-primary'>
                Сосна - это вечнозеленое хвойное дерево, кустарник или стланик,
                относится к классу хвойные, порядку сосновые, семейству
                сосновые, роду сосны. Продолжительность жизни сосны колеблется
                от 100 до 600 лет. Сегодня встречаются единичные деревья,
                возраст которых приближается к 5 векам. Сосна – это светолюбивое
                растение. Время цветения наступает в конце весны, но процесс
                происходит без появления цветков. В итоге образуются сосновые
                шишки, которые отличаются многообразием форм, размеров и цветов.
              </p>
            </div>
            <UnderlineLink href='/categories/pines'>
              Посмотреть категорию
            </UnderlineLink>
          </div>
          <div>
            <Image
              src='/images/pines.jpg'
              alt='Pines'
              width={550}
              height={412.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesScreen;
