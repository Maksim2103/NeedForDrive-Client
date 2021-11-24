import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  selectCategory,
  selectResponseCars,
  setCategory,
} from '../../../../../redux/reducers/orderSlice';

import styles from './modelSelect.module.scss';

const ModelSelect = () => {
  const dispatch = useDispatch();

  const category = useSelector(selectCategory);
  const carsData = useSelector(selectResponseCars);

  const categoriesData = useMemo(
    () => [
      ...new Set(
        carsData
          ?.filter((el) => el.categoryId !== null)
          .map((el) => {
            if (el.categoryId === null) return '';
            return el.categoryId?.name;
          }),
      ),
    ],
    [carsData],
  );

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
          checked={!value}
          onChange={handleChangeValue}
        />
        <span className={styles.radioSpan}></span>
        Все
      </label>

      {categoriesData.map((el, i) => (
        <label className={styles.container} key={i}>
          <input
            className={styles.radioInputButton}
            type="radio"
            name="ModelSelect"
            value={el}
            checked={value === el}
            onChange={handleChangeValue}
          />
          <span className={styles.radioSpan}></span>
          {el}
        </label>
      ))}
    </div>
  );
};
export default ModelSelect;
