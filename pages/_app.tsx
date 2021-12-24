import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';

import Navbar from '../containers/navbar.container';
import CartBadge from '../components/cart-badge.component';

import '../styles/globals.css';
import Footer from '../containers/footer.container';

function App({ Component, pageProps }) {
  const router = useRouter();
  const [state, setState] = useState({ productsInCartQty: 0 });

  const navigation = {
    leftNavigation: [
      { name: 'Каталог', href: '/catalog' },
      { name: 'Категории', href: '/categories' },
      { name: 'О нас', href: '/about' }
    ],
    rightNavigation: [
      { name: 'Вход', href: '/sign-in' },
      {
        name: 'Корзина',
        href: '/cart',
        extra: <CartBadge qty={state.productsInCartQty} />
      }
    ]
  };

  return (
    <>
      <Navbar navigation={navigation} currentRoute={router.pathname} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
