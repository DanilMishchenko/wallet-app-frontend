import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { ReactSVG } from 'react-svg';
import moment from 'moment';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import Button from '../Button';
import { financeOperations, financeSelectors } from '../../redux/finance';
import { globalActions } from '../../redux/global';
//import sprite from '../../assets/svg/sprite.svg'
import PluSvg from '../../images/plusIcon.svg';
import MinusSvg from '../../images/minusIcon.svg';
import styles from './ModalAddTransaction.module.css';

function ModalAddTransaction() {
  const [transactionType, setTransactionType] = useState('spending');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoriesMenu, setCategoriesMenu] = useState(false);
  const categories = useSelector(financeSelectors.getCategories);
  const totalBalance = useSelector(financeSelectors.getTotalBalance);
  const initialValues = {
    sum: '',
    comment: '',
    date: moment(),
  };
  const spendingCategories = Array.isArray(categories)
    ? categories.filter(item => item.income === false)
    : null;
  const incomeCategories = Array.isArray(categories)
    ? categories.filter(item => item.income === true)
    : null;

  const dispatch = useDispatch();

  const onSubmit = values => {
    let category = '';
    let balance = '';

    if (transactionType === 'spending' && !selectedCategory) {
      category = 'Разное';
    } else if (transactionType === 'spending' && selectedCategory) {
      category = selectedCategory?.name;
    } else if (transactionType === 'income' && !selectedCategory) {
      category = 'Регулярный доход';
    } else if (transactionType === 'income' && selectedCategory) {
      category = selectedCategory?.name;
    }

    if (transactionType === 'spending') {
      balance = totalBalance ? totalBalance - values.sum : 0 - values.sum;
    } else if (transactionType === 'income') {
      balance = totalBalance ? totalBalance + values.sum : 0 + values.sum;
    }

    const transaction = {
      ...values,
      date: moment(values.date).format('YYYY-MM-DD'),
      category,
      income: transactionType === 'spending' ? false : true,
      balance: balance.toString(),
    };

    dispatch(financeOperations.addTransaction(transaction));
  };

  const changeCategory = (e, category) => {
    e.stopPropagation();
    setSelectedCategory(category);
    setCategoriesMenu(false);
  };

  const incomeActiveTrigger = () => {
    if (transactionType === 'income') {
      const basic = styles.transTypeText;
      const active = styles.transTypeTextActiveIncome;
      return `${basic} ${active}`;
    }

    return styles.transTypeText;
  };

  const spendingActiveTrigger = () => {
    if (transactionType === 'spending') {
      const basic = styles.transTypeText;
      const active = styles.transTypeTextActiveSpending;
      return `${basic} ${active}`;
    }

    return styles.transTypeText;
  };

  const switchToggle = () => {
    if (transactionType === 'income') {
      return styles.switchToggleIncome;
    }

    return styles.switchToggleSpending;
  };

  const switchClickHandler = () => {
    setTransactionType(transactionType === 'spending' ? 'income' : 'spending');
    setSelectedCategory(null);
  };

  return (
    <div className={styles.addTransContainer}>
      {categoriesMenu && (
        <div
          className={styles.backdrop}
          onClick={() => {
            setCategoriesMenu(false);
          }}
        ></div>
      )}

      <div
        className={styles.closeBtnBox}
        onClick={() => dispatch(globalActions.closeModalAddTransaction())}
      >
        <button className={styles.closeButton}>
          <svg width="24" height="24" className={styles.closeIcon}>
            {/* <use href={`${sprite}#icon-close`} /> */}
          </svg>
        </button>
      </div>

      <h2 className={styles.title}>Добавить транзакцию</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnChange={false}
      >
        {({ setFieldValue, values }) => (
          <Form className={styles.form}>
            <div className={styles.transTypeContainer}>
              <span className={incomeActiveTrigger()}>Доход</span>

              <div className={styles.switchToggleContainer}>
                <label
                  className={styles.switchToggleBody}
                  htmlFor="transType"
                ></label>
                <span className={switchToggle()}>
                  <ReactSVG
                    className={styles.switchToggleSvg}
                    src={transactionType === 'income' ? PluSvg : MinusSvg}
                  />
                </span>
              </div>

              <input
                className={styles.switchToggleInput}
                onChange={switchClickHandler}
                name="transactionType"
                type="checkbox"
                id="transType"
                defaultChecked
              />
              <span className={spendingActiveTrigger()}>Расход</span>
            </div>

            {transactionType === 'spending' && (
              <div
                className={styles.dropDownContainer}
                onClick={() => setCategoriesMenu(true)}
              >
                <div className={styles.dropDownField}>
                  {selectedCategory ? (
                    <p className={styles.selectedCategory}>
                      {selectedCategory.name}
                    </p>
                  ) : (
                    <p>Выберите категорию</p>
                  )}
                </div>

                <svg className={styles.arowIcon}>
                  {/* <use href={`${sprite}#icon-arrow`} x={10}></use> */}
                </svg>

                {categoriesMenu && spendingCategories && (
                  <ul className={styles.dropDownList}>
                    {spendingCategories.map((category, index) => (
                      <li
                        key={index}
                        className={styles.dropDownItemSpending}
                        onClick={e => changeCategory(e, category)}
                      >
                        {category.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {transactionType === 'income' && (
              <div
                className={styles.dropDownContainer}
                onClick={() => setCategoriesMenu(true)}
              >
                <div className={styles.dropDownField}>
                  {selectedCategory ? (
                    <p className={styles.selectedCategory}>
                      {selectedCategory.name}
                    </p>
                  ) : (
                    <p>Выберите категорию</p>
                  )}
                </div>

                <svg className={styles.arowIcon}>
                  {/* <use href={`${sprite}#icon-arrow`} x={10}></use> */}
                </svg>

                {categoriesMenu && incomeCategories && (
                  <ul className={styles.dropDownList}>
                    {incomeCategories.map((category, index) => (
                      <li
                        key={index}
                        className={styles.dropDownItemIncome}
                        onClick={e => changeCategory(e, category)}
                      >
                        {category.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <div className={styles.summFieldContainer}>
              <Field
                className={styles.summField}
                required
                min="0.00"
                step="0.01"
                type="number"
                name="sum"
                placeholder="0.00"
              />
            </div>

            <div className={styles.calendarContainer}>
              <Field name="date">
                {() => (
                  <>
                    <Datetime
                      inputProps={{ className: styles.calendarField }}
                      value={values.date}
                      closeOnSelect={true}
                      timeFormat={false}
                      onChange={date => {
                        setFieldValue('date', date);
                      }}
                      dateFormat="DD.MM.YYYY"
                      isValidDate={currenatDate =>
                        currenatDate.isBefore(moment())
                      }
                      // input={false}
                    ></Datetime>

                    <svg width="24" height="24" className={styles.calendarIcon}>
                      {/* <use href={`${sprite}#icon-calendar`} /> */}
                    </svg>
                  </>
                )}
              </Field>
            </div>

            <div className={styles.commentFieldContainer}>
              <Field
                as="textarea"
                name="comment"
                className={styles.commentField}
                placeholder="Комментарий"
              />
            </div>

            <div className={styles.buttonsContainer}>
              <Button
                className={styles.submitButton}
                title="Добавить"
                type="submit"
              />

              <Button
                className={styles.cancelButton}
                title="Отмена"
                type="button"
                typeButton="secondary"
                onClick={() =>
                  dispatch(globalActions.closeModalAddTransaction())
                }
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ModalAddTransaction;
