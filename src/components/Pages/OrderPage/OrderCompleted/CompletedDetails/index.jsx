import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCarImage,
  selectCarNumber,
  selectCarTank,
  selectModel,
  selectOrderId,
  selectUpdateDate,
} from '../../../../../redux/reducers/orderSlice';

import styles from './completedDetails.module.scss';

import images from '../../../../../assets/images/car.png';

const CompletedDetails = ({ orderStatusConfirmed }) => {
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
        <h3 className={styles.orderAccepted}>
          {orderStatusConfirmed ? 'Ваш заказ подтверждён' : 'Ваш заказ отменен'}{' '}
        </h3>
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
            e.target.src = images;
          }}
        />
      </div>
    </div>
  );
};
export default CompletedDetails;
