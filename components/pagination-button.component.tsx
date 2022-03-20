import { setPage } from '@store/products/products.slice';
import { useAppDispatch } from '@app/hooks';

interface PaginationButtonProps {
  pageNumber: number;
  isActive?: boolean;
}

export const PaginationButton = ({
  pageNumber,
  isActive = false,
}: PaginationButtonProps) => {
  const normalStyle = 'bg-white hover:bg-lightgray hover:text-secondary';
  const activeStyle = 'bg-glassgreen text-primary';

  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(setPage(pageNumber));
  };

  return (
    <li>
      <div onClick={onClick}>
        <a
          className={`block py-2 px-3 leading-tight text-darkgray  border border-gray ${
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
