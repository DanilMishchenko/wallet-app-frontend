import PropTypes from 'prop-types';
import { currencyInfo } from './constants';
import {
  TableContainer,
  TableHead,
  TableHeadText,
  TableRow,
  TableData,
} from './Currency.styled';

const CurrencyTab = ({ currencies, isLoading }) => (
  <TableContainer>
    {!isLoading && (
      <>
        <TableHead>
          <tr>
            {currencyInfo.map((item, index) => (
              <TableHeadText key={item + index}>{item}</TableHeadText>
            ))}
          </tr>
        </TableHead>
        <tbody>
          {currencies.map(({ ccy, base_ccy, sale, buy }, index) => (
            <TableRow key={sale + index}>
              <TableData>
                {ccy} / {base_ccy}
              </TableData>
              <TableData>{Number(sale).toFixed(2)}</TableData>
              <TableData>{Number(buy).toFixed(2)}</TableData>
            </TableRow>
          ))}
        </tbody>
      </>
    )}
  </TableContainer>
);

CurrencyTab.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      ccy: PropTypes.string,
      base_ccy: PropTypes.string,
      sale: PropTypes.string,
      buy: PropTypes.string,
    }),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CurrencyTab;
