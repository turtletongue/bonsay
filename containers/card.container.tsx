import Image from 'next/image';

interface CardProps {
  title: string;
  price: number;
  imageUrl: string;
  onClick?: () => void;
}

export const Card = ({ title, price, imageUrl, onClick }: CardProps) => {
  return (
    <div
      className='group bg-white max-w-xs flex flex-col overflow-hidden border-2 border-decoration hover:border-secondary transition-colors text-center font-hanuman text-primary cursor-pointer'
      onClick={onClick}
    >
      <div className='relative flex justify-center items-center'>
        <div className='overflow-hidden'>
          <Image src={imageUrl} width={222} height={261} alt={title} />
        </div>
      </div>
      <span className='tracking-wider text-xs my-2'>{title}</span>
      <hr className='border rounded-sm border-decoration mx-2' />
      <span className='text-sm my-2'>{price.toFixed(2)} ₽</span>
    </div>
  );
};

export default Card;
