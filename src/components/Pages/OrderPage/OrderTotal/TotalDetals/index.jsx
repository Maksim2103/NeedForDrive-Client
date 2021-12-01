import React from 'react';

import styles from './totalDetails.module.scss';

import { useSelector } from 'react-redux';
import {
  selectCarImage,
  selectCarNumber,
  selectCarTank,
  selectModel,
  selectUpdateDate,
} from '../../../../../redux/reducers/orderSlice';

import image from '../../../../../assets/images/car.png';

const TotalDetails = () => {
  const img = useSelector(selectCarImage);

  const carModel = useSelector(selectModel);
  const carNumber = useSelector(selectCarNumber);
  const carTank = useSelector(selectCarTank);
  const updateDate = useSelector(selectUpdateDate);

  const availableDate = new Date(updateDate).toLocaleDateString();

  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h3 className={styles.model}> {carModel} </h3>
        <h3 className={styles.number}>{carNumber} </h3>
        <h3 className={styles.fuel}>
          <span>Топливо</span>
          {carTank ? `${carTank}%` : 'Нет данных'}
        </h3>
        <h3 className={styles.date}>
          <span>Доступна с</span> {availableDate}
        </h3>
      </div>
      <div>
        <img
          className={styles.image}
          alt="Car_Photo "
          src={img}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = image;
          }}
        />
      </div>
    </div>
  );
};
export default TotalDetails;
