import React, { useEffect, useMemo, useState } from 'react';

import styles from './selectTariff.module.scss';

import {
  selectRateId,
  selectResponseRateData,
  setRate,
} from '../../../../../../redux/reducers/orderSlice';
import { useDispatch, useSelector } from 'react-redux';

const SelectTariff = () => {
  const dispatch = useDispatch();

  const rateData = useSelector(selectResponseRateData);

  const rateId = useSelector(selectRateId);

  console.log(`rateData`, rateData);
  console.log(`rateId`, rateId);

  const [value, setValue] = useState(rateId);

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
              checked={value === el.id}
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
