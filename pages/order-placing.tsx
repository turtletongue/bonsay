import Head from 'next/head';

import OrderDataForm from '../containers/order-data-form.containet';
import OrderSummary from '../containers/order-summary.container';

export const OrderPlacing = () => {
  return (
    <>
      <Head>
        <title>Оформление заказа | BONSAY</title>
      </Head>
      <div className='py-4 max-w-md mx-auto'>
        <OrderDataForm />
      </div>
    </>
  );
};

export default OrderPlacing;
