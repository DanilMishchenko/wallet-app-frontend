// import { lazy } from 'react';
// import { useState, useEffect } from 'react';
import {
  TableWrapper,
  TableTitle,
  TableList,
  TableListItem,
  CategoryWrapper,
  CategoryColorLabel,
} from './Table.styled';

export const Table = ({ tableData }) => {
  // const [data, setData] = useState(null);

  return (
    <TableWrapper>
      <TableTitle>
        <h2>Category</h2>
        <h2>Sum</h2>
      </TableTitle>

      <TableList>
        {tableData.map(({ color, category, sum }) => {
          return (
            <TableListItem key={category}>
              <CategoryWrapper>
                <CategoryColorLabel background={color}></CategoryColorLabel>
                <span>{category}</span>
                <span>{sum}</span>
              </CategoryWrapper>
            </TableListItem>
          );
        })}
      </TableList>
    </TableWrapper>
  );
};
