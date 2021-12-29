import { ReactNode } from 'react';

import PaginationButton from './components/pagination-button.component';

export const getPageNumberButtons = (
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
