import Image from 'next/image';

import UnderlineLink from '../components/underline-link.component';

const CategoryPreview = () => {
  return (
    <div className='grid grid-cols-2 gap-6 sm:gap-12 justify-center'>
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
          <p className='text-primary text-justify'>
            Фикус – это разновидность растений, произрастающих в тропиках по
            всему миру. Он невероятно разнообразен, некоторые виды используются
            в качестве домашних растений. Фикус может быть кустарником, лозой
            или просто небольшим декоративным растением. Многие подвиды
            производят воздушные корни, другие дают вкусные плоды, к примеру,
            инжир. Священный инжир имеет особое значение для последователей
            некоторых азиатских религий, включая буддизм.
          </p>
        </div>
        <div className='mt-4 sm:mt-0'>
          <UnderlineLink href='/catalog?category=ficuses'>
            Найти в каталоге
          </UnderlineLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
