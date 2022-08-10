import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../redux/transactions/transactions-selectors';
import { fetchTransactions } from '../../redux/transactions/transactions-operations';
import { COLUMNS } from './table-helpers';
import moment from 'moment';
import EllipsisText from 'react-ellipsis-text';
import usePagination from '../../hooks/usePagination';
import {
  TabMobile,
  TableMobile,
  ColumnMobile,
  ColumnHeaderMobile,
  RowMobile,
  TableBodyMobile,
  PaginationContainerMobile,
  PaginationText,
  PaginationButton,
  PaginationNumberButton,
} from './HomeTab.styled';

export const HomeTabMobile = () => {
  const data = useSelector(getTransactions);
  const dispatch = useDispatch();
  const [showComment, setShowComment] = useState(false);

  // Hook for pagination
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 5,
    count: data.length,
  });

  const onCommentClick = () => {
    if (showComment === false) {
      setShowComment(true);
      return;
    } else {
      setShowComment(false);
      return;
    }
  };

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const getAmount = amount => {
    return amount.toFixed(2);
  };

  return (
    <>
      <TabMobile>
        {data[0] &&
          data.slice(firstContentIndex, lastContentIndex).map(item => {
            if (item.result) {
              return (
                <TableMobile
                  type={String(item.result.type)}
                  key={item.result._id}
                >
                  <TableBodyMobile>
                    <RowMobile>
                      <ColumnHeaderMobile>
                        {COLUMNS[0].Header}
                      </ColumnHeaderMobile>
                      <ColumnMobile>
                        {moment.utc(item.result.date).format('DD.MM.YYYY')}
                      </ColumnMobile>
                    </RowMobile>
                    <RowMobile>
                      <ColumnHeaderMobile>
                        {COLUMNS[1].Header}
                      </ColumnHeaderMobile>
                      <ColumnMobile>
                        {item.result.type === false ? '-' : '+'}
                      </ColumnMobile>
                    </RowMobile>
                    <RowMobile>
                      <ColumnHeaderMobile>
                        {COLUMNS[2].Header}
                      </ColumnHeaderMobile>
                      <ColumnMobile>{item.result.category}</ColumnMobile>
                    </RowMobile>
                    <RowMobile>
                      <ColumnHeaderMobile>
                        {COLUMNS[3].Header}
                      </ColumnHeaderMobile>
                      <ColumnMobile onClick={onCommentClick}>
                        <EllipsisText
                          text={item.comment}
                          length={!showComment ? 18 : 60}
                        />
                      </ColumnMobile>
                    </RowMobile>
                    <RowMobile>
                      <ColumnHeaderMobile>
                        {COLUMNS[4].Header}
                      </ColumnHeaderMobile>
                      <ColumnMobile type={String(item.result.type)}>
                        {getAmount(item.result.sum).toFixed(2)}
                      </ColumnMobile>
                    </RowMobile>
                    <RowMobile>
                      <ColumnHeaderMobile>
                        {COLUMNS[5].Header}
                      </ColumnHeaderMobile>
                      <ColumnMobile>
                        {getAmount(item.result.balance).toFixed(2)}
                      </ColumnMobile>
                    </RowMobile>
                  </TableBodyMobile>
                </TableMobile>
              );
            }
            return (
              <TableMobile type={String(item.type)} key={item._id}>
                <TableBodyMobile>
                  <RowMobile>
                    <ColumnHeaderMobile>{COLUMNS[0].Header}</ColumnHeaderMobile>
                    <ColumnMobile>
                      {moment.utc(item.date).format('DD.MM.YYYY')}
                    </ColumnMobile>
                  </RowMobile>
                  <RowMobile>
                    <ColumnHeaderMobile>{COLUMNS[1].Header}</ColumnHeaderMobile>
                    <ColumnMobile>
                      {item.type === false ? '-' : '+'}
                    </ColumnMobile>
                  </RowMobile>
                  <RowMobile>
                    <ColumnHeaderMobile>{COLUMNS[2].Header}</ColumnHeaderMobile>
                    <ColumnMobile>{item.category}</ColumnMobile>
                  </RowMobile>
                  <RowMobile>
                    <ColumnHeaderMobile>{COLUMNS[3].Header}</ColumnHeaderMobile>
                    <ColumnMobile onClick={onCommentClick}>
                      {!showComment ? (
                        <EllipsisText text={item.comment} length={18} />
                      ) : (
                        <EllipsisText text={item.comment} length={60} />
                      )}
                    </ColumnMobile>
                  </RowMobile>
                  <RowMobile>
                    <ColumnHeaderMobile>{COLUMNS[4].Header}</ColumnHeaderMobile>
                    <ColumnMobile type={String(item.type)}>
                      {getAmount(item.sum)}
                    </ColumnMobile>
                  </RowMobile>
                  <RowMobile>
                    <ColumnHeaderMobile>{COLUMNS[5].Header}</ColumnHeaderMobile>
                    <ColumnMobile>{getAmount(item.balance)}</ColumnMobile>
                  </RowMobile>
                </TableBodyMobile>
              </TableMobile>
            );
          })}
        {/* Pagination button */}
        <PaginationContainerMobile>
          <PaginationText>
            {page}/{totalPages}
          </PaginationText>
          <PaginationButton
            onClick={prevPage}
            className={`page ${page === 1 && 'disabled'}`}
          >
            &larr;
          </PaginationButton>
          <PaginationNumberButton
            onClick={() => setPage(1)}
            className={`${page === 1 && 'disabled'}`}
          >
            1
          </PaginationNumberButton>
          {gaps.before ? '...' : null}
          {gaps.paginationGroup.map(el => (
            <PaginationNumberButton
              onClick={() => setPage(el)}
              key={el}
              className={`${page === el ? 'active' : ''}`}
            >
              {el}
            </PaginationNumberButton>
          ))}
          {gaps.after ? '...' : null}
          <PaginationNumberButton
            onClick={() => setPage(totalPages)}
            className={`${page === totalPages && 'disabled'}`}
          >
            {totalPages}
          </PaginationNumberButton>
          <PaginationButton
            onClick={nextPage}
            className={`${page === totalPages && 'disabled'}`}
          >
            &rarr;
          </PaginationButton>
        </PaginationContainerMobile>
      </TabMobile>
    </>
  );
};
