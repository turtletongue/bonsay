interface CartBadgeProps {
  qty: number;
}

export const CartBadge = ({ qty }: CartBadgeProps) => {
  return (
    <figure className='rounded-full mx-2 px-2 border-secondary border inline-flex items-center justify-center'>
      {qty}
    </figure>
  );
};

export default CartBadge;
