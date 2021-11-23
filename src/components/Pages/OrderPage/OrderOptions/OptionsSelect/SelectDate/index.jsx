import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setDateFrom,
  setDateTo,
} from '../../../../../../redux/reducers/orderSlice';

import styles from './selectDate.module.scss';

const SelectDate = () => {
  const dispatch = useDispatch();
  const [valueDateFrom, setValueDateFrom] = useState('');
  const [valueDateTo, setValueDateTo] = useState('');

  const handleDateFrom = (e) => {
    const value = e.target.value;
    setValueDateFrom(value);
  };

  const handleBlurFrom = () => {
    dispatch(setDateFrom(Date.parse(valueDateFrom)));
  };

  const handleClearDateFromValue = () => {
    setValueDateFrom('');
    dispatch(setDateFrom(''));
  };

  const handleDateTo = (e) => {
    const value = e.target.value;
    setValueDateTo(value);
  };

  const handleBlurTo = () => {
    if (valueDateTo < valueDateFrom) {
      return alert(
        'Введите корректное время (время "По" не  может быть меньше времени "С")',
      );
    }
    dispatch(setDateTo(Date.parse(valueDateTo)));
  };

  const handleClearDateToValue = () => {
    setValueDateTo('');
    dispatch(setDateTo(''));
  };

  const minDate = new Date().toISOString().split('.')[0];

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Дата аренды</h4>
      <div className={styles.container__input}>
        <span>С</span>
        <input
          type="datetime-local"
          placeholder="Введите дату и время"
          value={valueDateFrom}
          onChange={handleDateFrom}
          onBlur={handleBlurFrom}
          min={minDate}
        />
        <button
          className={styles.buttonFrom}
          onClick={handleClearDateFromValue}
        >
          X
        </button>
      </div>
      <div className={styles.container__input}>
        <span>По</span>
        <input
          type="datetime-local"
          placeholder="Введите дату и время"
          value={valueDateTo}
          onChange={handleDateTo}
          onBlur={handleBlurTo}
          min={valueDateFrom}
        />
        <button className={styles.buttonFrom} onClick={handleClearDateToValue}>
          X
        </button>
      </div>
    </div>
  );
};
export default SelectDate;
