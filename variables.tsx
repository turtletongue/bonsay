import CartBadge from './components/cart-badge.component';
import CardMock from './containers/card-mock.container';
import { Navigation, SortType } from './declarations';

export const anonymousNavigation: (count: number) => Navigation = (
  cartItemsCount: number
) => ({
  leftNavigation: [
    { name: 'Каталог', href: '/catalog' },
    { name: 'Категории', href: '/categories' },
    { name: 'О нас', href: '/about' },
  ],
  rightNavigation: [
    { name: 'Вход', href: '/sign-in' },
    {
      name: 'Корзина',
      href: '/cart',
      extra: cartItemsCount > 0 && <CartBadge />,
    },
  ],
});

export const authenticatedNavigation: (count: number) => Navigation = (
  cartItemsCount: number
) => ({
  leftNavigation: [
    { name: 'Каталог', href: '/catalog' },
    { name: 'Категории', href: '/categories' },
    { name: 'О нас', href: '/about' },
  ],
  rightNavigation: [
    { name: 'Профиль', href: '/profile' },
    {
      name: 'Корзина',
      href: '/cart',
      extra: cartItemsCount > 0 && <CartBadge />,
    },
    { name: 'Выход', href: '#', isSignOut: true },
  ],
});

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
  image: { url: '/images/main.jpg', width: 411, height: 548 },
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
              В любое время дня, вы можете позвонить по номеру
              <br />
              <span className="text-secondary">+7-905-033-55-01</span>
            </>
          ),
        },
        {
          id: 2,
          content: (
            <>
              Или написать на e-mail
              <br />
              <span className="text-secondary">bonsay@gmail.com</span>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      title: 'О компании',
      paragraphs: [
        {
          id: 3,
          content:
            'Мы дорожим каждым нашим клиентом, поэтому высокое товаров - приоритет для нас. Вы всегда можете задать интересующие вас вопросы по телефону или по почте и получить подробную консультацию.',
        },
        {
          id: 4,
          content:
            'Команда профессионалов собирает лучшие деревья со всего мира, бережно ухаживает за деревом до момента передачи клиенту. Сотрудники проходят основательную подготовку, совершенствуют свои навыки и знания в бонсай-искусстве, проходят специальные курсы и тренинги, чтобы идти в ногу со временем.',
        },
        {
          id: 5,
          content: 'Мы работаем более чем с 120 городами России и СНГ.',
        },
      ],
    },
  ],
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

export const DEFAULT_AGE_MAXIMUM = 150;

export const sortTypes: SortType[] = [
  {
    id: '',
    name: 'По умолчанию',
  },
  {
    id: 2,
    name: 'Возрастание цены',
    order: {
      price: 'ASC',
    },
  },
  {
    id: 3,
    name: 'Убывание цены',
    order: {
      price: 'DESC',
    },
  },
];

export const DEFAULT_IMAGE = { id: 0, path: DEFAULT_PRODUCT_IMAGE };

export const cardMocks = [1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
  <CardMock key={key} />
));

export const DEFAULT_CARD_IMAGE_WIDTH = 222;

export const DEFAULT_CARD_IMAGE_HEIGHT = 261;

export const SECOND = 1000;

export const MINUTE = SECOND * 60;

export const HOUR = MINUTE * 60;

export const DAY = HOUR * 24;

export const WEEK = DAY * 7;

export const ACCESS_TOKEN_TTL = HOUR;

export const REFRESH_TOKEN_TTL = WEEK;

export const STRIPE_KEY =
  'pk_test_51I1stlJeVfJJ7K9IfCyNNgvQ8j3tmjJrcFZZLYpwaIIy3ST8Fbw6B9GIMJpfuzyXUY2iwU4DNnn424XcBFKUhkZ0003GYx4lrA';

export const KOPECKS_IN_RUBLE = 100;
