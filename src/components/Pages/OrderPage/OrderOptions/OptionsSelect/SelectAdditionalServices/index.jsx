import React, { useEffect, useState } from 'react';

import styles from './selectAdditionalServices.module.scss';

import classNames from 'classnames/bind';
import {
  selectIsFullTank,
  selectIsNeedChildChair,
  selectIsRightWheel,
} from '../../../../../../redux/reducers/orderSlice';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const SelectAdditionalServices = () => {
  const dispatch = useDispatch();

  const isFulTank = useSelector(selectIsFullTank);
  const isChildChair = useSelector(selectIsNeedChildChair);
  const isRightWheel = useSelector(selectIsRightWheel);

  const [isTankValue, setIsTankValue] = useState(isFulTank);
  const [isChildChairValue, setIsChildChairValue] = useState(isFulTank);
  const [isRightWheelValue, setIsRightWheelValue] = useState(isRightWheel);

  const handleChangeIsTankValue = (e) => {
    // const value = e.target.value;
    // console.log(`value`, value);
    setIsTankValue(!isTankValue);
    // dispatch(setIsTankValue(!isTankValue));
  };

  console.log(`isTankValue`, isTankValue);

  // useEffect(() => {
  //   dispatch(setIsTankValue(isTankValue));
  // }, [isTankValue]);

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Доп услуги</h4>
      <div className={styles.inputsWrapper}>
        <label className={cx('container', 'label-active')}>
          <input
            className={styles.checkInputButton}
            type="checkbox"
            value={isTankValue}
            checked={isTankValue}
            onChange={handleChangeIsTankValue}
          />
          <span className={styles.checkSpan}></span>
          Полный бак, 500р
        </label>

        <label className={styles.container}>
          <input className={styles.checkInputButton} type="checkbox" />
          <span className={styles.checkSpan}></span>
          Детское кресло, 200р
        </label>

        <label className={styles.container}>
          <input className={styles.checkInputButton} type="checkbox" />
          <span className={styles.checkSpan}></span>
          Правый руль, 1600р
        </label>
      </div>
    </div>
  );
};
export default SelectAdditionalServices;
