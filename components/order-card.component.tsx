import Image from 'next/image';

import Badge from '@components/badge.component';
import { getOrderNumber } from '@utils/get-order-number';
import { orderStatus } from '@utils/order-status';
import { orderBadgeType } from '@utils/order-badge-type';

import { Id, Purchase } from '@app/declarations';

interface OrderProps {
  id: Id;
  status: string;
  createdAt: string | Date;
  purchases: Purchase[];
}

export const OrderCard = ({ id, status, createdAt, purchases }: OrderProps) => {
  return (
    <div className="flex flex-col w-full sm:w-[45rem] my-2 border-1 border-2 border-decoration font-poppins text-primary">
      <div className="flex items-center w-full justify-between pl-6 pr-2 h-12 text-primary border-b-2 border-decoration">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-xs sm:text-base">
            Заказ #{getOrderNumber(id)}
          </span>
          <span className="text-xs mt-1 sm:mt-0 sm:text-sm sm:ml-1">
            от {new Date(createdAt).toLocaleDateString('ru')}
          </span>
        </div>
        <Badge type={orderBadgeType[status]}>{orderStatus[status]}</Badge>
      </div>
      <div className="w-full p-4 bg-white flex flex-col justify-center gap-4">
        <div className="grid grid-flow-row grid-cols-mini gap-1 justify-center">
          {purchases.map(({ id, product: { name, upload } }) => (
            <div key={id}>
              <Image
                src={upload.internalPath}
                width={70}
                height={80}
                title={name}
                alt={name}
              />
            </div>
          ))}
        </div>
        <div className="flex w-full gap-6 items-center justify-between text-sm">
          <div>
            Итого:{' '}
            <span>
              {purchases
                .reduce((sum, purchase) => sum + +purchase.product.price, 0)
                .toLocaleString('ru')}{' '}
              ₽
            </span>
          </div>
          <div>
            Кол-во товаров: <span>{purchases.length}</span>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
