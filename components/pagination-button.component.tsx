import Link from 'next/link';

interface PaginationButtonProps {
  pageNumber: number;
  isActive?: boolean;
  url?: string;
}

export const PaginationButton = ({
  pageNumber,
  isActive = false,
  url = '/'
}: PaginationButtonProps) => {
  const normalStyle = 'bg-white hover:bg-lightgray hover:text-secondary';
  const activeStyle = 'bg-glassgreen text-primary';

  return (
    <li>
      <Link href={`${url}?page=${pageNumber}`}>
        <a
          className={`block py-2 px-3 leading-tight text-darkgray  border border-gray ${
            isActive ? activeStyle : normalStyle
          }`}
        >
          {pageNumber}
        </a>
      </Link>
    </li>
  );
};

export default PaginationButton;
