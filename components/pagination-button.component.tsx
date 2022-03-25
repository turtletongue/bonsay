import { setPage } from '@store/products/products.slice';
import { useAppDispatch } from '@app/hooks';

interface PaginationButtonProps {
  pageNumber: number;
  onPageChange: (page: number) => (...args: unknown[]) => unknown;
  isActive?: boolean;
}

export const PaginationButton = ({
  pageNumber,
  onPageChange,
  isActive = false,
}: PaginationButtonProps) => {
  const normalStyle = 'bg-white hover:bg-lightgray hover:text-secondary';
  const activeStyle = 'bg-glassgreen text-primary';

  return (
    <li>
      <div onClick={onPageChange(pageNumber)}>
        <a
          className={`block py-2 px-3 leading-tight text-darkgray  border border-gray select-none ${
            isActive ? activeStyle : normalStyle
          }`}
        >
          {pageNumber}
        </a>
      </div>
    </li>
  );
};

export default PaginationButton;
