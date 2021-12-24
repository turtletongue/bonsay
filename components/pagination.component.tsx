import Link from 'next/link';
import { ReactNode } from 'react';
import PaginationButton from './pagination-button.component';

interface PaginationProps {
  pageNumber: number;
  url?: string;
  total: number;
  limit?: number;
}

const getPageNumberButtons = (
  pagesCount: number,
  activePageNumber?: number,
  url?: string
) => {
  const buttons: ReactNode[] = [];

  for (let pageNumber = 1; pageNumber <= pagesCount; pageNumber++) {
    buttons.push(
      <PaginationButton
        key={pageNumber}
        pageNumber={pageNumber}
        url={url}
        isActive={pageNumber === activePageNumber}
      />
    );
  }

  return buttons;
};

export const Pagination = ({
  pageNumber,
  url = '/',
  total,
  limit = 10
}: PaginationProps) => {
  const pagesCount = Math.ceil(total / limit);

  return (
    <nav aria-label='Навигация по страницам'>
      <ul className='inline-flex items-center -space-x-px my-6'>
        {pageNumber > 1 && (
          <li>
            <Link href={`${url}?page=${pageNumber - 1}`}>
              <a className='block py-2 px-3 ml-0 leading-tight text-darkgray bg-white rounded-l-lg border border-gray hover:bg-lightgray hover:text-secondary'>
                <span className='sr-only'>Предыдущая</span>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
            </Link>
          </li>
        )}
        {getPageNumberButtons(pagesCount, pageNumber, url)}
        {pageNumber < pagesCount && (
          <li>
            <Link href={`${url}?page=${pageNumber + 1}`}>
              <a className='block py-2 px-3 leading-tight bg-white rounded-r-lg text-darkgray bg-white border border-gray hover:bg-lightgray hover:text-secondary'>
                <span className='sr-only'>Следующая</span>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
