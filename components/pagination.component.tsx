import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

import { setPage } from '../store/products/products.slice';
import { DEFAULT_FETCH_LIMIT } from '../variables';
import { getPageNumberButtons } from '../utils';
import { useAppDispatch } from '../hooks';

interface PaginationProps {
  pageNumber: number;
  total: number;
  limit?: number;
}

export const Pagination = ({
  pageNumber,
  total,
  limit = DEFAULT_FETCH_LIMIT,
}: PaginationProps) => {
  const pagesCount = Math.ceil(total / limit);

  const dispatch = useAppDispatch();

  const changePage = (page: number) => {
    return () => {
      dispatch(setPage(page));
    };
  };

  return (
    <>
      {pagesCount > 1 && (
        <nav aria-label="Навигация по страницам">
          <ul className="inline-flex items-center -space-x-px my-6">
            {pageNumber > 1 && (
              <li>
                <div onClick={changePage(pageNumber - 1)}>
                  <a className="block py-2 px-3 ml-0 leading-tight text-darkgray bg-white rounded-l-lg border border-gray hover:bg-lightgray hover:text-secondary">
                    <span className="sr-only">Предыдущая</span>
                    <ChevronLeftIcon className="w-5 h-5" />
                  </a>
                </div>
              </li>
            )}
            {getPageNumberButtons(pagesCount, pageNumber)}
            {pageNumber < pagesCount && (
              <li>
                <div onClick={changePage(pageNumber + 1)}>
                  <a className="block py-2 px-3 leading-tight bg-white rounded-r-lg text-darkgray bg-white border border-gray hover:bg-lightgray hover:text-secondary">
                    <span className="sr-only">Следующая</span>
                    <ChevronRightIcon className="w-5 h-5" />
                  </a>
                </div>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Pagination;
