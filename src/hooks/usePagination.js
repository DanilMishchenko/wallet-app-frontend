import { useEffect, useState } from 'react';

const usePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);
  const [gaps, setGaps] = useState({
    before: false,
    paginationGroup: [],
    after: true,
  });

  const pageCount = Math.ceil(count / contentPerPage);

  const lastContentIndex = page * contentPerPage;

  const firstContentIndex = lastContentIndex - contentPerPage;
  const [pagesInBetween, setPagesInBetween] = useState([]);

  useEffect(() => {
    if (pageCount > 1) {
      const temp = new Array(pageCount - 1).fill(1).map((_, i) => i + 1);
      setPagesInBetween(temp);
    }
  }, [pageCount]);

  useEffect(() => {
    const currentLocation = pagesInBetween.indexOf(page);
    let paginationGroup = [];
    let before = false;
    let after = false;
    if (page === 1) {
      paginationGroup = pagesInBetween.slice(0, 1);
    } else if (
      page === pageCount ||
      page === pageCount - 1 ||
      page === pageCount - 2
    ) {
      paginationGroup = pagesInBetween.slice(-1, pageCount);
    } else if (page === 2) {
      paginationGroup = pagesInBetween.slice(
        currentLocation,
        currentLocation + 1,
      );
    } else {
      paginationGroup = [page - 1, page, page + 1];
    }
    if (pageCount <= 3) {
      before = false;
      after = false;
    } else {
      before = false;
      after = false;
      if (paginationGroup[0] > 1) {
        before = true;
      }
      if (paginationGroup[1] < pageCount - 1) {
        after = true;
      }
    }
    setGaps({ paginationGroup, before, after });
  }, [page, pagesInBetween, pageCount]);

  const changePage = direction => {
    setPage(state => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };

  const setPageSAFE = num => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
  };
};

export default usePagination;
