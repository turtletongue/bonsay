import { ReactNode } from "react";

import PaginationButton from "@components/pagination-button.component";

export const getPageNumberButtons = (
  pagesCount: number,
  activePageNumber?: number
) => {
  const buttons: ReactNode[] = [];

  for (let pageNumber = 1; pageNumber <= pagesCount; pageNumber++) {
    buttons.push(
      <PaginationButton
        key={pageNumber}
        pageNumber={pageNumber}
        isActive={pageNumber === activePageNumber}
      />
    );
  }

  return buttons;
};

export default getPageNumberButtons;
