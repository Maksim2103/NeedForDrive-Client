import React, { useEffect, useState } from 'react';

import styles from './selectAdditionalServices.module.scss';

import classNames from 'classnames/bind';
import {
  selectIsFullTank,
  selectIsNeedChildChair,
  selectIsRightWheel,
  setIsChildChair,
  setIsFullTank,
  setIsRightWheel,
} from '../../../../../../redux/reducers/orderSlice';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const SelectAdditionalServices = () => {
  const dispatch = useDispatch();

  const isFulTankDefault = useSelector(selectIsFullTank);
  const isChildChairDefault = useSelector(selectIsNeedChildChair);
  const isRightWheelDefault = useSelector(selectIsRightWheel);

  const [isTankValue, setIsTankValue] = useState(isFulTankDefault);
  const [isChildChairValue, setIsChildChairValue] =
    useState(isChildChairDefault);
  const [isRightWheelValue, setIsRightWheelValue] =
    useState(isRightWheelDefault);

  const handleChangeIsTankValue = () => {
    dispatch(setIsFullTank(!isTankValue));
    setIsTankValue(!isTankValue);
  };

  const handleChangeIsChildChairValue = (e) => {
    setIsChildChairValue(!isChildChairValue);
    dispatch(setIsChildChair(!isChildChairValue));
  };

  const handleChangeIsRightWheelValue = (e) => {
    setIsRightWheelValue(!isRightWheelValue);
    dispatch(setIsRightWheel(!isRightWheelValue));
  };

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
          <input
            className={styles.checkInputButton}
            type="checkbox"
            value={isChildChairValue}
            checked={isChildChairValue}
            onChange={handleChangeIsChildChairValue}
          />
          <span className={styles.checkSpan}></span>
          Детское кресло, 200р
        </label>

        <label className={styles.container}>
          <input
            className={styles.checkInputButton}
            type="checkbox"
            value={isRightWheelValue}
            checked={isRightWheelValue}
            onChange={handleChangeIsRightWheelValue}
          />
          <span className={styles.checkSpan}></span>
          Правый руль, 1600р
        </label>
      </div>
    </div>
  );
};
export default SelectAdditionalServices;
