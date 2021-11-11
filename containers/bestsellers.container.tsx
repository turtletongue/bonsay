import ScreenHeading from '../components/screen-heading.component';
import ProductsGrid from './products-grid.container';

const products = [
  {
    id: 1,
    title: 'SLEEPING WARIOR',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 2,
    title: 'SLEEPING WARIOR',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 3,
    title: 'SLEEPING WARIOR',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 4,
    title: 'SLEEPING WARIOR',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 5,
    title: 'SLEEPING WARIOR',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 6,
    title: 'SLEEPING WARIOR',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 7,
    title: 'SLEEPING WARIOR',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 8,
    title: 'SLEEPING WARIOR',
    price: 750,
    imageUrl: '/images/product.jpg'
  }
];

export const Bestsellers = () => {
  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-8'>
      <ScreenHeading href='/catalog'>Популярное</ScreenHeading>
      <ProductsGrid products={products} />
    </div>
  );
};

export default Bestsellers;
