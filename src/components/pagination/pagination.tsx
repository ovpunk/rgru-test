import { FC } from "react";
import styles from "./pagination.module.scss";
import { IPaginationProps } from "../../types/types";

export const Pagination: FC<IPaginationProps> = ({ props }) => {
  const { pagesCount, offset, setOffset, countOfPostsPerPage } = props;

  const pagesArray = Array.from({ length: pagesCount }, (_, index) => index);

  const handleChangePage = (pageNumber: number): void => {
    setOffset(pageNumber * countOfPostsPerPage);
  };

  return (
    <div className={styles.pagination}>
      <ul>
        {pagesArray.map((pageNumber) => (
          <li
            key={pageNumber + 1}
            onClick={() => handleChangePage(pageNumber)}
            className={
              pageNumber === offset / countOfPostsPerPage ? styles.active : ""
            }
          >
            {pageNumber + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};
