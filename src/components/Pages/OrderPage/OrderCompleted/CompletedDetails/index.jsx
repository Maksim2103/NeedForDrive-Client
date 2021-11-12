import React from 'react';

import styles from './completedDetails.module.scss';

import image from '../../../../../assets/images/car2.png';

const CompletedDetails = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h3 className={styles.orderNumber}>Заказ номер RU58491823</h3>
        <h3 className={styles.orderAccepted}>Ваш заказ подтверждён</h3>
        <h3 className={styles.model}>Hyndai, i30 N</h3>
        <h3 className={styles.number}>K 761 HA 73</h3>
        <h3 className={styles.fuel}>
          <span>Топливо</span>100%
        </h3>
        <h3 className={styles.date}>
          <span>Доступна с</span>12.06.2019 12:00
        </h3>
      </div>
      <div className={styles.image}>
        <img src={image} alt="car" />
      </div>
    </div>
  );
};
export default CompletedDetails;
