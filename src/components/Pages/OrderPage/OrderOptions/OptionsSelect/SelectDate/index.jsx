import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  selectDateFrom,
  selectDateTo,
  setDateFrom,
  setDateTo,
} from '../../../../../../redux/reducers/orderSlice';

import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import styles from './selectDate.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';

registerLocale('ru', ru);

const SelectDate = () => {
  const dispatch = useDispatch();

  const selectedDateFrom = useSelector(selectDateFrom);
  const selectedDateTo = useSelector(selectDateTo);

  const [valueDateFrom, setValueDateFrom] = useState(selectedDateFrom);
  const [valueDateTo, setValueDateTo] = useState(selectedDateTo);

  const handleDateFrom = (date) => {
    setValueDateFrom(Date.parse(date));
    dispatch(setDateFrom(Date.parse(date)));
  };

  const filterPassedTimeFrom = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const filterPassedTimeTo = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const handleClearDateFromValue = () => {
    setValueDateFrom('');
    dispatch(setDateFrom(''));
    setValueDateTo('');
    dispatch(setDateTo(''));
  };

  const handleDateTo = (date) => {
    setValueDateTo(Date.parse(date));
    dispatch(setDateTo(Date.parse(date)));
  };

  const handleClearDateToValue = () => {
    setValueDateTo('');
    dispatch(setDateTo(''));
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Дата аренды</h4>
      <div className={styles.container__input}>
        <span>С</span>
        <DatePicker
          locale="ru"
          selected={valueDateFrom}
          onChange={handleDateFrom}
          placeholderText="Введите дату и время"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          minDate={new Date()}
          filterTime={filterPassedTimeFrom}
          dateFormat="dd MMMM , yyyy HH:mm"
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
        <DatePicker
          locale="ru"
          selected={valueDateTo}
          onChange={handleDateTo}
          placeholderText="Введите дату и время"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          minDate={valueDateFrom}
          filterTime={filterPassedTimeTo}
          dateFormat="dd MMMM , yyyy HH:mm"
        />
        <button className={styles.buttonFrom} onClick={handleClearDateToValue}>
          X
        </button>
      </div>
    </div>
  );
};
export default SelectDate;
