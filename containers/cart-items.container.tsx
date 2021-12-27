import CartItem from './cart-item.containter';

export const CartItems = () => {
  return (
    <div className='py-4'>
      <CartItem
        imageUrl={'/images/product.jpg'}
        title='MONDAY PINE'
        price={750}
        qty={3}
      />
      <CartItem
        imageUrl={'/images/product.jpg'}
        title='MONDAY PINE'
        price={750}
        qty={1}
      />
    </div>
  );
};

export default CartItems;
