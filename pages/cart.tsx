import { useEffect, useState } from 'react';
import Head from 'next/head';

import CartItems from '@containers/cart-items.container';
import CartTotal from '@containers/cart-total.container';
import Void from '@containers/void.container';
import {
  removeUnavailableProducts,
  selectCartItems,
  selectCartItemsCount,
  selectProductsIds,
  selectTotal,
} from '@store/cart/cart.slice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

export const Cart = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, [setIsHydrated]);

  const cartItems = useAppSelector(selectCartItems);
  const total = useAppSelector(selectTotal);
  const cartItemsCount = useAppSelector(selectCartItemsCount);

  const dispatch = useAppDispatch();

  const productsIds = useAppSelector(selectProductsIds);

  useEffect(() => {
    dispatch(removeUnavailableProducts(productsIds));
  }, [dispatch, productsIds]);

  return (
    <>
      <Head>
        <title>Корзина | BONSAY</title>
      </Head>
      {isHydrated && cartItemsCount > 0 ? (
        <div className="w-full relative">
          <CartTotal total={total}>
            <CartItems items={cartItems} />
          </CartTotal>
        </div>
      ) : (
        <Void text="КОРЗИНА ПУСТА" />
      )}
    </>
  );
};

export default Cart;
