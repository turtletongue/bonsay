import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

import { DEFAULT_FETCH_LIMIT } from "../variables";
import { getPageNumberButtons } from "../utils";

interface PaginationProps {
  pageNumber: number;
  url?: string;
  total: number;
  limit?: number;
}

export const Pagination = ({
  pageNumber,
  url = "/",
  total,
  limit = DEFAULT_FETCH_LIMIT,
}: PaginationProps) => {
  const pagesCount = Math.ceil(total / limit);

  return (
    <>
      {pagesCount > 1 && (
        <nav aria-label="Навигация по страницам">
          <ul className="inline-flex items-center -space-x-px my-6">
            {pageNumber > 1 && (
              <li>
                <Link href={`${url}?page=${pageNumber - 1}`}>
                  <a className="block py-2 px-3 ml-0 leading-tight text-darkgray bg-white rounded-l-lg border border-gray hover:bg-lightgray hover:text-secondary">
                    <span className="sr-only">Предыдущая</span>
                    <ChevronLeftIcon className="w-5 h-5" />
                  </a>
                </Link>
              </li>
            )}
            {getPageNumberButtons(pagesCount, pageNumber, url)}
            {pageNumber < pagesCount && (
              <li>
                <Link href={`${url}?page=${pageNumber + 1}`}>
                  <a className="block py-2 px-3 leading-tight bg-white rounded-r-lg text-darkgray bg-white border border-gray hover:bg-lightgray hover:text-secondary">
                    <span className="sr-only">Следующая</span>
                    <ChevronRightIcon className="w-5 h-5" />
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Pagination;
