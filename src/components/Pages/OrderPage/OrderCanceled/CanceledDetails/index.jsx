import React from 'react';

import styles from './canceledDetails.module.scss';

import { useSelector } from 'react-redux';
import {
  selectCarImage,
  selectCarNumber,
  selectCarTank,
  selectModel,
  selectOrderId,
  selectUpdateDate,
} from '../../../../../redux/reducers/orderSlice';

import image from '../../../../../assets/images/car.png';

const CanceledDetails = () => {
  const img = useSelector(selectCarImage);

  const orderId = useSelector(selectOrderId);
  const carModel = useSelector(selectModel);
  const carNumber = useSelector(selectCarNumber);
  const carTank = useSelector(selectCarTank);
  const updateDate = useSelector(selectUpdateDate);

  const availableDate = new Date(updateDate).toLocaleDateString();

  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h3 className={styles.orderNumber}>Заказ номер {orderId} </h3>
        <h3 className={styles.orderAccepted}>Ваш заказ отменен</h3>
        <h3 className={styles.model}>{carModel} </h3>
        <h3 className={styles.number}>{carNumber}</h3>
        <h3 className={styles.fuel}>
          <span>Топливо</span>
          {carTank ? `${carTank}%` : 'Нет данных'}
        </h3>
        <h3 className={styles.date}>
          <span>Доступна с</span>
          {availableDate}
        </h3>
      </div>
      <div className={styles.image}>
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

export default CanceledDetails;
