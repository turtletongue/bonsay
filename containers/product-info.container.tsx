import Image from 'next/image';
import Button from '../components/button.component';
import OutlineButton from '../components/outline-button.component';

interface ProductInfoProps {
  isInCart: boolean;
}

export const ProductInfo = ({ isInCart }: ProductInfoProps) => {
  return (
    <div className='grid grid-cols-2 justify-center items-center grid-auto-flow gap-4 py-2 sm:py-10 px-2'>
      <div className='flex flex-col-reverse sm:flex-row justify-center items-center h-full mx-2'>
        <div className='flex flex-row sm:flex-col justify-around mx-1 mb-1 sm:h-full max-h-screen mt-1 sm:mt-0'>
          <div className='flex items-center cursor-pointer mx-1'>
            <Image
              src='/images/product.jpg'
              width={120}
              height={120}
              alt='MONDAY PINE'
            />
          </div>
          <div className='flex items-center cursor-pointer mx-1'>
            <Image
              src='/images/product.jpg'
              width={120}
              height={120}
              alt='MONDAY PINE'
            />
          </div>
          <div className='flex items-center cursor-pointer mx-1'>
            <Image
              src='/images/product.jpg'
              width={120}
              height={120}
              alt='MONDAY PINE'
            />
          </div>
          <div className='flex items-center cursor-pointer mx-1'>
            <Image
              src='/images/product.jpg'
              width={120}
              height={120}
              alt='MONDAY PINE'
            />
          </div>
        </div>
        <div className='relative'>
          <Image
            src='/images/product.jpg'
            width={450}
            height={500}
            alt='MONDAY PINE'
          />
        </div>
      </div>
      <div className='max-w-lg'>
        <div className='flex flex-col sm:flex-row p-2 sm:p-0 items-start sm:items-center justify-between'>
          <div className='w-full'>
            <div className='flex justify-between w-full'>
              <div className='text-lg font-medium text-secondary'>
                MONDAY PINE
              </div>
              <div className='text-center sm:hidden text-sm font-medium text-primary'>
                34 см
              </div>
            </div>
            <div className='flex justify-between w-full'>
              <div className='text-gray'>750.00 ₽</div>
              <div className='text-center sm:hidden text-sm font-medium text-primary'>
                30 лет
              </div>
            </div>
          </div>
          <div className='w-full mt-6 sm:mt-0 flex items-center'>
            {isInCart ? (
              <OutlineButton>В КОРЗИНЕ</OutlineButton>
            ) : (
              <Button>ДОБАВИТЬ В КОРЗИНУ</Button>
            )}
          </div>
        </div>
        <div className='text-sm hidden sm:flex font-medium text-primary w-24 items-center justify-between mt-1'>
          <div>34 см</div>
          <div>30 лет</div>
        </div>
        <div className='text-justify my-4 p-2 sm:p-0'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          fugiat quos eligendi amet magnam! Vitae dolore totam optio fuga
          aspernatur nostrum cumque quas nobis odit, obcaecati, expedita ipsam
          reprehenderit natus repudiandae eius error neque vero placeat. Velit,
          sequi nam! Dolorem blanditiis soluta, facere repudiandae, dolore ea
          deserunt obcaecati provident aspernatur, adipisci saepe cupiditate
          pariatur voluptas illum sint labore? Explicabo quisquam dolore, ad
          eveniet, culpa atque animi praesentium nemo facere minus dolorum
          mollitia doloribus tempore necessitatibus eos veritatis saepe
          architecto esse quod natus magnam, dignissimos dolores. Blanditiis,
          delectus dolorem perferendis tenetur voluptate nam ex eveniet mollitia
          quas voluptates, ducimus ad nesciunt.
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
