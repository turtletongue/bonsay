import CartBadge from './components/cart-badge.component';
import { Navigation, SortType } from './declarations';

export const anonymousNavigation: Navigation = {
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
      extra: <CartBadge />
    }
  ]
};

export const authenticatedNavigation: Navigation = {
  leftNavigation: [
    { name: 'Каталог', href: '/catalog' },
    { name: 'Категории', href: '/categories' },
    { name: 'О нас', href: '/about' }
  ],
  rightNavigation: [
    { name: 'Профиль', href: '/profile' },
    {
      name: 'Корзина',
      href: '/cart',
      extra: <CartBadge />
    },
    { name: 'Выход', href: '/sign-out' }
  ]
};

export const mainScreenConfig = {
  title: (
    <>
      Гости из Киото: <br /> Коллекция деревьев
    </>
  ),
  description: (
    <>
      Несколько деревьев прибыли в наш магазин из Киото. Успейте купить деревья
      из новой коллекции. <br />
      Лучший подарок для дорогих вам ценителей природы.
    </>
  ),
  image: { url: '/images/main.jpg', width: 411, height: 548 }
};

export const aboutConfig = {
  sections: [
    {
      id: 1,
      title: 'Контакты',
      paragraphs: [
        {
          id: 1,
          content: (
            <>
              {' '}
              В любое время дня, вы можете позвонить по номеру{' '}
              <span className='text-secondary'>+7-905-033-55-01</span>
            </>
          )
        },
        {
          id: 2,
          content: (
            <>
              Или написать на e-mail{' '}
              <span className='text-secondary'>bonsay@gmail.com</span>
            </>
          )
        }
      ]
    },
    {
      id: 2,
      title: 'О компании',
      paragraphs: [
        {
          id: 3,
          content:
            'Мы дорожим каждым нашим клиентом, поэтому высокое товаров - приоритет для нас. Вы всегда можете задать интересующие вас вопросы по телефону или по почте и получить подробную консультацию.'
        },
        {
          id: 4,
          content:
            'Команда профессионалов собирает лучшие деревья со всего мира, бережно ухаживает за деревом до момента передачи клиенту. Сотрудники проходят основательную подготовку, совершенствуют свои навыки и знания в бонсай-искусстве, проходят специальные курсы и тренинги, чтобы идти в ногу со временем.'
        },
        {
          id: 5,
          content: 'Мы работаем более чем с 120 городами России и СНГ.'
        }
      ]
    }
  ]
};

export const DEFAULT_FETCH_LIMIT = 8;

export const DEFAULT_PRODUCT_IMAGE = '/images/product.jpg';

export const DEFAULT_CATEGORY_IMAGE = '/images/pines.jpg';

export const CATEGORY_IMAGE_WIDTH = 550;

export const CATEGORY_IMAGE_HEIGHT = 366.01;

export const ISR_DELAY_IN_SECONDS = 10;

export const DEFAULT_PRICE_MINIMUM = 0;

export const DEFAULT_PRICE_MAXIMUM = 1_000_000;

export const DEFAULT_AGE_MINIMUM = 0;

export const DEFAULT_AGE_MAXIMUM = 100;

export const sortTypes: SortType[] = [
  {
    id: '',
    name: 'По умолчанию'
  },
  {
    id: 2,
    name: 'Дорогие'
  },
  {
    id: 3,
    name: 'Дешевые'
  },
  {
    id: 4,
    name: 'Старые'
  },
  {
    id: 5,
    name: 'Молодые'
  },
  {
    id: 6,
    name: 'Высокие'
  },
  {
    id: 7,
    name: 'Низкие'
  }
];
