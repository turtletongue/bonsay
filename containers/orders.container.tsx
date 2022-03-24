import OrderCard from '@components/order-card.component';

import { Order } from '@app/declarations';

interface OrdersProps {
  orders: Order[];
}

export const Orders = ({ orders }: OrdersProps) => {
  return (
    <div className="flex flex-col w-full gap-4 items-center mt-12">
      {orders.map(({ id, status, createdAt, purchases }) => (
        <OrderCard
          key={id}
          id={id}
          status={status}
          createdAt={createdAt}
          purchases={purchases}
        />
      ))}
    </div>
  );
};

export default Orders;
