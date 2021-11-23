import React, { useState } from 'react';

import styles from './selectColor.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectAvailableColorsCar,
  selectColor,
  setColorCar,
} from '../../../../../../redux/reducers/orderSlice';

const SelectColor = () => {
  const dispatch = useDispatch();

  const colorCar = useSelector(selectColor);
  const availableColorsData = useSelector(selectAvailableColorsCar);

  const [value, setValue] = useState(colorCar);

  const handleChangeValue = (e) => {
    const value = e.target.value;
    setValue(value);
    dispatch(setColorCar(value));
  };

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Цвет</h4>
      <div className={styles.inputsWrapper}>
        <label className={styles.container}>
          <input
            className={styles.radioInputButton}
            type="radio"
            name="ColorSelect"
            value="Любой"
            checked={value === 'Любой'}
            onChange={handleChangeValue}
          />
          <span className={styles.radioSpan}></span>
          Любой
        </label>

        {availableColorsData?.map((el) => (
          <label key={el} className={styles.container}>
            <input
              className={styles.radioInputButton}
              type="radio"
              name="ColorSelect"
              value={el}
              checked={value === `${el}`}
              onChange={handleChangeValue}
            />
            <span className={styles.radioSpan}></span>
            {el}
          </label>
        ))}
      </div>
    </div>
  );
};
export default SelectColor;
