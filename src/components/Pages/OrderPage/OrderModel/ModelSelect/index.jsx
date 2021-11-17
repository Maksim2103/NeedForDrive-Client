import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  selectCategory,
  setCategory,
} from '../../../../../redux/reducers/orderSlice';

import styles from './modelSelect.module.scss';

const ModelSelect = () => {
  const dispatch = useDispatch();

  const category = useSelector(selectCategory);

  const [value, setValue] = useState(category);

  const handleChangeValue = (e) => {
    const value = e.target.value;
    setValue(value);
    dispatch(setCategory(value));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.container}>
        <input
          className={styles.radioInputButton}
          type="radio"
          name="ModelSelect"
          value=""
          checked={value === '' ? true : false}
          onChange={handleChangeValue}
        />
        <span className={styles.radioSpan}></span>
        Все модели
      </label>

      <label className={styles.container}>
        <input
          className={styles.radioInputButton}
          type="radio"
          name="ModelSelect"
          value="Спорт"
          checked={value === 'Спорт' ? true : false}
          onChange={handleChangeValue}
        />
        <span className={styles.radioSpan}></span>
        Спорт
      </label>

      <label className={styles.container}>
        <input
          className={styles.radioInputButton}
          type="radio"
          name="ModelSelect"
          value="Люкс"
          checked={value === 'Люкс' ? true : false}
          onChange={handleChangeValue}
        />
        <span className={styles.radioSpan}></span>
        Люкс
      </label>
    </div>
  );
};
export default ModelSelect;
