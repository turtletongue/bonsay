import Link from 'next/link';

interface ProfileNavigationProps {
  activePage: 'orders' | 'settings';
}

export const ProfileNavigation = ({ activePage }: ProfileNavigationProps) => {
  return (
    <ul className="uppercase font-nunito flex w-full justify-center mt-6 text-secondary">
      <li
        className={`cursor-pointer ${
          activePage === 'orders' ? 'text-primary' : ''
        }`}
      >
        <Link href="/profile/orders">
          <a>Мои заказы</a>
        </Link>
      </li>
      <li className="mx-4">/</li>
      <li
        className={`cursor-pointer ${
          activePage === 'settings' ? 'text-primary' : ''
        }`}
      >
        <Link href="/profile/settings">
          <a>Настройки</a>
        </Link>
      </li>
    </ul>
  );
};

export default ProfileNavigation;
