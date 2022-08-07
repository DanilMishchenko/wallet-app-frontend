import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../redux/transactions/transactions-selectors';
import { fetchTransactions } from '../../redux/transactions/transactions-operations';
import moment from 'moment';
import { COLUMNS } from './table-helpers';
import EllipsisText from 'react-ellipsis-text';
import Media from 'react-media';
import {
  Tab,
  Table,
  TableHeader,
  Column,
  Row,
  ColumnHeader,
  ColumnHeaderContent,
  NoTransactions,
  NoTransactionsMsg,
} from './HomeTab.styled';
import { HomeTabMobile } from './HomeTabMobile';

export const HomeTab = () => {
  const data = useSelector(getTransactions);
  const dispatch = useDispatch();
  const [showComment, setShowComment] = useState(false);

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

  const formatAmount = amount => {
    return amount;
  };

  return (
    <>
      {data.length > 0 ? (
        <>
          <Media
            queries={{
              mobile: '(min-width: 768px)',
            }}
          >
            {({ mobile }) => (
              <Tab>
                {!mobile ? (
                  <HomeTabMobile />
                ) : (
                  <Table>
                    <TableHeader>
                      <tr>
                        <ColumnHeader>
                          <ColumnHeaderContent>
                            {COLUMNS[0].Header}
                          </ColumnHeaderContent>
                        </ColumnHeader>
                        <ColumnHeader>
                          <ColumnHeaderContent>
                            {COLUMNS[1].Header}
                          </ColumnHeaderContent>
                        </ColumnHeader>
                        <ColumnHeader>
                          <ColumnHeaderContent>
                            {COLUMNS[2].Header}
                          </ColumnHeaderContent>
                        </ColumnHeader>
                        <ColumnHeader>
                          <ColumnHeaderContent>
                            {COLUMNS[3].Header}
                          </ColumnHeaderContent>
                        </ColumnHeader>
                        <ColumnHeader>
                          <ColumnHeaderContent>
                            {COLUMNS[4].Header}
                          </ColumnHeaderContent>
                        </ColumnHeader>
                        <ColumnHeader>
                          <ColumnHeaderContent>
                            {COLUMNS[5].Header}
                          </ColumnHeaderContent>{' '}
                        </ColumnHeader>
                      </tr>
                    </TableHeader>
                    <tbody>
                      {data[0] &&
                        data
                          .map(item => {
                            if (item.result) {
                              return (
                                <Row key={item.result._id}>
                                  <Column>
                                    {moment
                                      .utc(item.result.date)
                                      .format('MM.DD.YYYY')}
                                  </Column>
                                  <Column>
                                    {item.result.type === false ? '-' : '+'}
                                  </Column>
                                  <Column>{item.result.category}</Column>
                                  <Column onClick={onCommentClick}>
                                    {!showComment ? (
                                      <EllipsisText
                                        text={item.result.comment}
                                        length={12}
                                      />
                                    ) : (
                                      <EllipsisText
                                        text={item.result.comment}
                                        length={50}
                                      />
                                    )}
                                  </Column>
                                  <Column type={String(item.result.type)}>
                                    {formatAmount(item.result.sum)}
                                  </Column>
                                  <Column>
                                    {formatAmount(item.result.balance)}
                                  </Column>
                                </Row>
                              );
                            }
                            return (
                              <Row key={item._id}>
                                <Column>
                                  {moment.utc(item.date).format('MM.DD.YYYY')}
                                </Column>
                                <Column>
                                  {item.type === false ? '-' : '+'}
                                </Column>
                                <Column>{item.category}</Column>
                                <Column onClick={onCommentClick}>
                                  {!showComment ? (
                                    <EllipsisText
                                      text={item.comment || ''}
                                      length={12}
                                    />
                                  ) : (
                                    <EllipsisText
                                      text={item.comment || ''}
                                      length={50}
                                    />
                                  )}
                                </Column>
                                <Column type={String(item.type)}>
                                  {formatAmount(item.sum)}
                                </Column>
                                <Column>{formatAmount(item.balance)}</Column>
                              </Row>
                            );
                          })
                          .reverse()}
                    </tbody>
                  </Table>
                )}
              </Tab>
            )}
          </Media>
        </>
      ) : (
        <NoTransactions>
          <NoTransactionsMsg>No Transactions added</NoTransactionsMsg>
        </NoTransactions>
      )}
      {/* <ModalAddTransaction /> */}
    </>
  );
};
