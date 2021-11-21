import React, { useEffect, useMemo, useState } from 'react';

import styles from './selectTariff.module.scss';

import {
  selectResponseRateData,
  setRate,
} from '../../../../../../redux/reducers/orderSlice';
import { useDispatch, useSelector } from 'react-redux';

const SelectTariff = () => {
  const dispatch = useDispatch();

  const rateData = useSelector(selectResponseRateData);

  const [value, setValue] = useState('5fd91571935d4e0be16a3c44');

  const handleChangeValue = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const filteredRateData = useMemo(
    () => rateData?.filter((el) => el.id === value),
    [rateData, value],
  );

  useEffect(() => {
    if (filteredRateData) dispatch(setRate(filteredRateData[0]));
  }, [dispatch, filteredRateData]);

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Тариф</h4>
      <div className={styles.inputsWrapper}>
        {rateData?.map((el) => (
          <label className={styles.container} key={el.id}>
            <input
              className={styles.radioInputButton}
              type="radio"
              name="RateSelect"
              value={el.id}
              checked={value === el.id ? true : false}
              onChange={handleChangeValue}
            />
            <span className={styles.radioSpan}></span>
            {`${el.rateTypeId?.name}, ${el.price}₽/${el.rateTypeId?.unit}`}
          </label>
        ))}
      </div>
    </div>
  );
};
export default SelectTariff;
